package com.b208.prologue.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Map;

@Getter
@Data
@ApiModel("ModifyBlogPagesRequest")
public class ModifyBlogPagesRequest {

    @NotBlank
    @ApiModelProperty(name = "엑세스 토큰", example = "Qdsfhdf...", required = true)
    String accessToken;

    @NotBlank
    @ApiModelProperty(name = "깃허브 아이디", example = "test1234", required = true)
    String githubId;

    @NotNull
    @ApiModelProperty(name = "설정한 페이지 목록", example = "페이지명", required = true)
    List<String> pages;

    @NotNull
    @ApiModelProperty(name = "이름을 수정할 페이지 목록", example = "oldName=수정하기 전 페이지명, newName=수정한 후 페이지명", required = true)
    List<Map<String,String>> modifiedPages;

    @NotNull
    @ApiModelProperty(name = "삭제할 페이지 목록", example = "삭제할 페이지명", required = true)
    List<String> deletedPages;

    @NotNull
    @ApiModelProperty(name = "추가할 페이지 목록", example = "추가할 페이지명", required = true)
    List<String> addedPages;

}
