import React from "react";
import AmExistingArticles from "./amExistingArticles";
import AmNewArticle from "./amNewArticle";
import ExistingAndNewSwitch from "../common/existingAndNewSwitch";

export default function AmArticleRender() {
  return (
    <ExistingAndNewSwitch
      page={"Articles"}
      existingComponent={<AmExistingArticles />}
      newComponent={<AmNewArticle />}
    />
  );
}