import { remark } from 'remark';
import remarkHtml from 'remark-html';

const mdToHtml = async (markdown: string) => {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
};
export default mdToHtml;
