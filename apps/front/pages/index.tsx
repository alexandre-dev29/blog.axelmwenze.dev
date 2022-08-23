import { ArticleByCategoryContainer, FeaturedArticle } from '@next-template-nx/ui';
import { GetServerSideProps } from 'next';
import {
  ArticleAttributs,
  PageGetAllCategoriesComp,
  ssrGetAllCategories,
  useGetFeaturedArticleQuery,
} from '@next-template-nx/data';
import {
  defaultApolloClient,
  getArticleFromArticleEntity,
  getArticleFromFeaturedQuery,
  getArticlesFromCategory,
  withApollo,
} from '@next-template-nx/utils';

const HomePage: PageGetAllCategoriesComp = ({ data: pageData, error }) => {
  const { data: dataFeatured, loading } = useGetFeaturedArticleQuery({
    client: defaultApolloClient,
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  });

  let featuredArticleData = {} as ArticleAttributs;
  if (!loading) {
    featuredArticleData = getArticleFromFeaturedQuery(dataFeatured);
  }
  return (
    <div>
      {!loading ? (
        <FeaturedArticle
          title={featuredArticleData.title}
          author={featuredArticleData.author}
          description={featuredArticleData.description}
          dateString={featuredArticleData.dateString}
          tags={featuredArticleData.tags}
          image={featuredArticleData.image}
          authorImage={featuredArticleData.authorImage}
          slug={featuredArticleData.slug}
        />
      ) : (
        <p>Loading</p>
      )}

      {pageData.categories.data.slice(0, 2).map((value) => {
        return (
          <ArticleByCategoryContainer
            categoryTitle={value?.attributes?.CategoryName}
            featuredArticle={getArticleFromArticleEntity(value?.attributes?.FeaturedArticle?.data)}
            otherArticles={getArticlesFromCategory(value?.attributes?.Articles?.data)}
            key={value?.id}
          />
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetAllCategories.getServerPage({}, { cookies: undefined });
};

export default withApollo(ssrGetAllCategories.withPage(() => ({}))(HomePage));
