import { Container } from "@/components/layout/container";

export const dynamic = "force-static";

export const metadata = {
  title: "Studio"
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function StudioPage() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <div className="max-w-2xl border border-border bg-white p-8">
          <h1 className="text-h2 font-semibold">Sanity Studio Unavailable</h1>
          <p className="mt-4 text-body text-muted">
            Install the Sanity packages in this workspace to enable the embedded
            studio route.
          </p>
        </div>
      </Container>
    </section>
  );
}
