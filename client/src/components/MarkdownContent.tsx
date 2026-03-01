import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const markdownComponents: Components = {
  code({ className, children, ...props }) {
    const isInline = !className?.includes("language-");
    return isInline ? (
      <code
        className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm before:content-none after:content-none"
        {...props}
      >
        {children}
      </code>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <div className={`prose prose-sm md:prose-base dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-card-foreground prose-li:text-card-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:before:content-none prose-code:after:content-none ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content ?? ""}
      </ReactMarkdown>
    </div>
  );
}
