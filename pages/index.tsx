import { builder, BuilderComponent } from '@builder.io/react';
import { GetStaticProps } from 'next';

// Set your Builder.io Public API Key
builder.init('04598ec14ade45c982c06c9646f899e0'); // ← we’ll fix this next

export default function Home({ builderContent }: any) {
  return (
    <div>
      {builderContent ? (
        <BuilderComponent model="page" content={builderContent} />
      ) : (
        <div>Coming soon...</div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const builderContent = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/',
      },
    })
    .toPromise();

  return {
    props: {
      builderContent: builderContent || null,
    },
    revalidate: 5,
  };
};
