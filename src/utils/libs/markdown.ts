import { remark } from 'remark';
import remarkHtml from 'remark-html';
/**
 * Markdown を解析して HTML にして返す
 * @param markdown Markdown ファイル名
 * @returns HTML
 */
const mdToHtml = async (markdown: string) => {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
};
export default mdToHtml;
