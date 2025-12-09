'use server';

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export async function getSortedContentData(directory: string) {
  const fullPath = path.join(contentDirectory, directory);
  const fileNames = fs.readdirSync(fullPath);
  const allContentData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullFilePath = path.join(fullPath, fileName);
      const fileContents = fs.readFileSync(fullFilePath, "utf8");
      const matterResult = matter(fileContents);
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();
      return {
        id,
        contentHtml,
        ...matterResult.data,
      };
    })
  );
  return allContentData;
}

export async function getContentData(directory: string, id: string) {
  const fullPath = path.join(contentDirectory, directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
