import { ArticleByCategoryContainer, FeaturedArticle } from '@next-template-nx/ui';
import { GetServerSideProps } from 'next';
import {
  GetFeaturedArticleQuery,
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
import { useEffect, useState } from 'react';

const HomePage: PageGetAllCategoriesComp = ({ data: pageData, error }) => {
  const [featuredEntity, setFeaturedEntity] = useState({} as GetFeaturedArticleQuery);
  const { data: dataFeatured, loading } = useGetFeaturedArticleQuery({
    client: defaultApolloClient,
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  });
  useEffect(() => {
    if (!loading) {
      setFeaturedEntity(dataFeatured);
    }
  }, [dataFeatured, loading]);
  const { author, dateString, tags, title, description, image, authorImage, slug } =
    getArticleFromFeaturedQuery(featuredEntity);

  return (
    <div>
      {!loading ? (
        <FeaturedArticle
          title={title}
          author={author}
          description={description}
          dateString={dateString}
          tags={tags}
          image={image}
          authorImage={authorImage}
          slug={slug}
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return await ssrGetAllCategories.getServerPage({}, ctx);
};

export default withApollo(ssrGetAllCategories.withPage(() => ({}))(HomePage));
