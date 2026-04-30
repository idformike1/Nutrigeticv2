type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-4xl">
      <p className="section-kicker">{eyebrow}</p>
      <h1 className="page-title max-w-4xl">{title}</h1>
      <p className="section-copy max-w-3xl">{description}</p>
    </div>
  );
}
