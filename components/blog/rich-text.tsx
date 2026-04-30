type RichTextProps = {
  value: Array<{
    _type?: string;
    style?: string;
    children?: Array<{ _type?: string; text?: string }>;
  }>;
};

export function RichText({ value }: RichTextProps) {
  return (
    <div className="rich-text text-body text-foreground">
      {value.map((block, index) => {
        const text = block.children?.map((child) => child.text || "").join("") || "";

        if (block.style === "h2") {
          return <h2 key={index}>{text}</h2>;
        }

        if (block.style === "h3") {
          return <h3 key={index}>{text}</h3>;
        }

        if (block.style === "blockquote") {
          return <blockquote key={index}>{text}</blockquote>;
        }

        return <p key={index}>{text}</p>;
      })}
    </div>
  );
}
