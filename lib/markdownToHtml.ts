import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
// import rehypeSanitize from 'rehype-sanitize'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
      .use(remarkParse)
      .use(remarkRehype, {allowDangerousHtml: true})
      .use(rehypeRaw)
      // .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(markdown)
  return result.toString()
}
