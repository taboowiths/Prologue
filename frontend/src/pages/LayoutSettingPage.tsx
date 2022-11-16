import api from "api/Api";
import Axios from "api/JsonAxios";
import { useAppSelector } from "app/hooks";
import { rootState } from "app/store";
import ButtonStyled from "components/Button";
import Text from "components/Text";
import DefaultLayoutStyles from "features/setting/layout/DefaultLayoutStyles";
import LayoutSample from "features/setting/layout/LayoutSample";
import LayoutSelector from "features/setting/layout/LayoutSelector";
import React, { useEffect } from "react";
import { Layout } from "react-grid-layout";
import { useDispatch, useSelector } from "react-redux";
import {
  ComponentConfig,
  selectClickedLayoutIdx,
  selectComponentLayoutList,
  setUserCheckList,
  setUserComponentLayoutList,
  setUserComponentList,
} from "slices/settingSlice";
import styles from "../features/setting/Setting.module.css";

const LayoutSettingPage = () => {
  const dispatch = useDispatch();
  const clickedIdx = useAppSelector(selectClickedLayoutIdx);
  const { githubId, accessToken } = useSelector((state: rootState) => state.auth);
  const layoutList = useAppSelector(selectComponentLayoutList);
  const DefaultLayoutList = DefaultLayoutStyles();

  const getUserLayout = async () => {
    await Axios.get(api.setting.getLayout(accessToken, githubId))
      .then((res: any) => {
        const response = JSON.parse(res.data.layout);
        console.log("사용자 레이아웃 조회", response);
        const userLayout: ComponentConfig[] = [];
        response.layout.map((it: Layout) => {
          if (it.i === "블로그 로고") userLayout.push({ key: "블로그 로고", id: "logo" });
          else if (it.i === "프로필") userLayout.push({ key: "프로필", id: "profile" });
          else if (it.i === "카테고리") userLayout.push({ key: "카테고리", id: "category" });
          else if (it.i === "페이지") userLayout.push({ key: "페이지", id: "page" });
          else if (it.i === "타이틀") userLayout.push({ key: "타이틀", id: "title" });
          else if (it.i === "글 목록") userLayout.push({ key: "글 목록", id: "contents" });
        });
        dispatch(setUserComponentLayoutList(response.layout));
        dispatch(setUserComponentList(userLayout));
        dispatch(setUserCheckList(response.checkList));
      })
      .catch((err: any) => {
        console.log("실패@", err);
      });
  };

  const handleOnSave = () => {
    console.log("레이아웃 저장");
    console.log("저장된 레이아웃:", layoutList);
    const layoutJson = {
      layout: DefaultLayoutList[clickedIdx].layout,
      checkList: DefaultLayoutList[clickedIdx].checkList,
    };
    console.log(layoutJson.checkList);

    const result = {
      accessToken: accessToken,
      githubId: githubId,
      layout: DefaultLayoutList[clickedIdx].struct,
      layoutJson: JSON.stringify(layoutJson),
    };
    sendUserLayout(result);
  };

  const sendUserLayout = async (result: object) => {
    await Axios.put(api.setting.modifyLayout(), result)
      .then((res: any) => {
        console.log("레이아웃 수정 완!", res);
      })
      .catch((err: any) => {
        console.log("ㅡㅡ빠꾸", err);
      });
  };

  useEffect(() => {
    getUserLayout();
  }, []);

  return (
    <>
      <div className={styles.textPadding} style={{ paddingTop: "0", paddingBottom: "10px" }}>
        <Text value="기본 레이아웃 선택" type="groupTitle" bold />
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <Text value="기본으로 사용할 레이아웃을 선택하세요." type="caption" />
      </div>
      <LayoutSelector />
      <LayoutSample />
      <div className={styles.confirmButton}>
        <div style={{ margin: "10px" }}>
          <ButtonStyled color="sky" label="취소" />
        </div>
        <div style={{ margin: "10px" }}>
          <ButtonStyled label="저장 후 레이아웃 설정" onClick={handleOnSave} />
        </div>
      </div>
    </>
  );
};

export default LayoutSettingPage;
