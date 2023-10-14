import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");
console.log("postDirectory ", postDirectory);

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postDirectory);
  console.log("fileName ", fileNames);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);

    return { id, ...(matterResult.data as { title: string; date: string }) };
  });

  return allPostsData.sort((a, b) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });
};
