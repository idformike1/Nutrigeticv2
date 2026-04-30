type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
        {eyebrow}
      </p>
      <h1 className="mt-6 text-h1 font-semibold text-balance">{title}</h1>
      <p className="mt-6 max-w-3xl text-body text-muted">{description}</p>
    </div>
  );
}
