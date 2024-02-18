import type { Metadata } from "next";

import { getPageBySlug } from "@/app/lib/pages";
import { Page } from "@/app/types/pages";

import Container from "@/app/components/containter";

interface PageParams {
  params: { pageSlug: string };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const page = await getPageBySlug(params.pageSlug);
  return {
    title: `${page.title} - Sandeep`,
    description: page.seo?.description || `${page.title}`,
  };
}

export default async function Page({ params }: PageParams) {
  const page = await getPageBySlug(params.pageSlug);
  return (
    <>
      <Container className="max-w-5xl xl:max-w-7xl mt-12 mb-24">
        <article className="prose mx-auto">
          <h1>{page.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: page?.content.html,
            }}
          />
        </article>
      </Container>
    </>
  );
}
