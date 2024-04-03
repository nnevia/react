import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // /posts 파일 이름을 잡아주기
  const fileNames = fs.readdirSync(postDirectory);
  // ['pre-rendering.md', ...]

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data as {date: string; title: string}
    }
  })

  // Sorting
  return allPostsData.sort((a,b) => {
    if(a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
})
}