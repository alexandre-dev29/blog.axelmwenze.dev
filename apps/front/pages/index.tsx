import {
  ArticleAttributs,
  ArticleByCategoryContainer,
  FeaturedArticle,
} from '@next-template-nx/ui';

const HomePage = (props) => {
  const values = {
    title: 'Introducing segment data lakes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid at doloremque ducimus, excepturi laboriosam libero, maxime nam neque non quis quod ratione reprehenderit, rerum suscipit temporibus tenetur vel veniam.',
    author: 'Axel mwenze',
    dateString: 'August 2022',
    tags: ['Engineering', 'Company'],
  } as ArticleAttributs;
  return (
    <div>
      <FeaturedArticle
        title={values.title}
        author={values.author}
        description={values.description}
        dateString={values.dateString}
        tags={values.tags}
      />
      <ArticleByCategoryContainer
        categoryTitle={'Engineering'}
        featuredArticle={values}
        otherArticles={[values, values]}
      />
    </div>
  );
};
export default HomePage;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   return await ssrGetAllAbout.getServerPage({}, ctx);
// };

// export default withApollo(ssrGetAllAbout.withPage(() => ({}))(HomePage));
