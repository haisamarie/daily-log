import fs from 'fs';

const getAllSlug = (dirPath: string): string[] => {
  return fs.readdirSync(dirPath).map((fileName) => {
    return fileName.replace(/\.mdx?$/, '');
  });
};
export default getAllSlug;
