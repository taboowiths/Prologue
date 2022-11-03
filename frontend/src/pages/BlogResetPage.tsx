import React from "react";
import { Box, Stack } from "@mui/material";
import Text from "components/Text";
import Modal from "components/Modal";
import BlogReset from "features/blog/blogReset";
import resetImg from "assets/blog/RepositoryReset.png";
import manageImg from "assets/blog/ManageOnly.png";

function BlogResetPage() {
  const [repositoryModalOpen, setRepositoryModalOpen] = React.useState(false);
  const [ManageModalOpen, setManageModalOpen] = React.useState(false);

  const showRepositoryModal = () => {
    setRepositoryModalOpen(true);
  };

  const showManageModal = () => {
    setManageModalOpen(true);
  };

  const context = [
    {
      title: "Repository 초기화",
      image: resetImg,
      text: [
        "• 사용자 Repository에 있는 github.io를 삭제하고 새로 생성합니다.",
        "• 사이트에서 제공하는 레이아웃으로 블로그를 디자인 할 수 있습니다.",
        "• 블로그 게시글을 간편하게 작성하고 관리할 수 있습니다. ",
      ],
      onClick: showRepositoryModal,
    },
    {
      title: "게시글만 관리",
      image: manageImg,
      text: [
        "• 기존에 존재하는 github.io를 분석하여 게시글을 관리 할 수 있도록 지원합니다.",
        "• 대시보드와 게시글 목록보기를 지원합니다.",
        "• 레이아웃 수정 및 게시글 작성 지원은 불가 합니다.",
      ],
      onClick: showManageModal,
    },
  ];

  return (
    <Box sx={{ mx: 10 }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ my: 7.5 }}
      >
        <Text
          value="github.io가 이미 존재합니다"
          type="pageTitle"
          bold
          color="red"
        />
        <Text
          value="사이트에서 지원하는 깃허브 블로그가 아닙니다. 다음 중 선택하세요."
          type="groupTitle"
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <BlogReset
          title={context[0].title}
          image={context[0].image}
          text={context[0].text}
          onClick={context[0].onClick}
        />
        <div style={{ borderLeft: "1px dashed #000000", height: "500px" }} />
        <BlogReset
          title={context[1].title}
          image={context[1].image}
          text={context[1].text}
          onClick={context[1].onClick}
        />
      </Stack>
      {repositoryModalOpen && (
        <Modal
          buttonNum={2}
          twoButtonCancle={() => setRepositoryModalOpen(false)}
          twoButtonConfirm={() => console.log("Repository초기화 확인 클릭")}
          text={`Repository 초기화를 선택했습니다\ngithub.io 데이터들이 모두 삭제됩니다`}
        />
      )}
      {ManageModalOpen && (
        <Modal
          buttonNum={2}
          twoButtonCancle={() => setManageModalOpen(false)}
          twoButtonConfirm={() => console.log("게시글만 관리 확인 클릭")}
          text={`게시글만 관리를 선택했습니다\n게시글 탐색이 안 될 경우 지원이 불가합니다`}
        />
      )}
    </Box>
  );
}

export default BlogResetPage;