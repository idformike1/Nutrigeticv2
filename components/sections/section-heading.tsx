type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-6 text-h2 font-semibold text-balance">{title}</h2>
      <p className="mt-6 text-body text-muted">{description}</p>
    </div>
  );
}
