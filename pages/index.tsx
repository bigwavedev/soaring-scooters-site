import { builder, BuilderComponent } from '@builder.io/react';

builder.init(process.env.BUILDER_PUBLIC_API_KEY || '');

export async function getStaticProps() {
  const content = await builder.get('page', { url: '/' }).toPromise();
  return {
    props: {
      content: content || null,
    },
  };
}

export default function Home({ content }) {
  if (!content) return <div>Page not found</div>;
  return <BuilderComponent model="page" content={content} />;
}
