import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

// Syntax-highlight theme for fenced code blocks. Code blocks render on a dark
// surface in both light and dark site themes (see the `prose-pre:*` overrides),
// so a single dark hljs theme stays legible either way.
import "highlight.js/styles/github-dark.css";

interface MarkdownProps {
  content: string;
}

// Renders trusted blog Markdown. `rehype-raw` allows the small amount of inline
// HTML authors occasionally embed; content originates from the site's own CMS.
const Markdown = ({ content }: MarkdownProps) => (
  <div
    className="
      prose prose-slate max-w-none dark:prose-invert
      prose-headings:scroll-mt-24 prose-headings:font-bold
      prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
      prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-blue-400
      prose-img:rounded-xl prose-img:border prose-img:border-slate-200/70 dark:prose-img:border-slate-700/60
      prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[0.85em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-slate-800
      prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-800 prose-pre:bg-slate-900 prose-pre:p-4
      prose-pre:prose-code:bg-transparent prose-pre:prose-code:p-0 prose-pre:prose-code:text-slate-100
      prose-blockquote:border-l-blue-500 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-slate-600 dark:prose-blockquote:text-slate-300
      prose-th:text-left
    "
  >
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypeHighlight, { detect: true }]]}
      components={{
        // External links open in a new tab; internal ones navigate normally.
        a: ({ href, children, ...props }) => {
          const isExternal = /^https?:\/\//.test(href ?? "");
          return (
            <a
              href={href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...props}
            >
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default Markdown;
