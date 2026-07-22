import FadeIn from './FadeIn';

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  marathi?: string;
}

export default function PageHero({ eyebrow, title, subtitle, marathi }: Props) {
  return (
    <section className="page-hero">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <FadeIn>
          <span className="badge">{eyebrow}</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-h1" style={{ marginTop: '1.25rem', maxWidth: 700 }}>
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.2}>
            <p className="text-body-lg" style={{ marginTop: '1rem', color: 'var(--text-secondary)', maxWidth: 600 }}>
              {subtitle}
            </p>
          </FadeIn>
        )}
        {marathi && (
          <FadeIn delay={0.3}>
            <p className="text-marathi" style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'var(--color-gray-500)' }}>
              "{marathi}"
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
