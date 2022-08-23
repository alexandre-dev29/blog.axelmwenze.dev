import { GetServerSideProps, GetStaticPaths } from 'next';
import { PageGetCategoryBySlugComp, ssrGetAllCategories, ssrGetCategoryBySlug } from '@next-template-nx/data';
import { withApollo } from '@next-template-nx/utils';
import Link from 'next/link';

const CategoryPage: PageGetCategoryBySlugComp = ({ data, error }) => {
  const { attributes } = data.categories.data[0];

  return (
    <div className={''}>
      <section
        className={'mt-12 grid grid-cols-2  p-4 rounded-md transition-all duration-200 hover:shadow-2xl'}
      >
        <div className={'bg-teal-600'}></div>
        <div className={'bg-gray-100 px-12 py-6 flex flex-col justify-between items-start'}>
          <Link href={`/article/${attributes.FeaturedArticle.data.attributes.Slug}`}>
            <h2 className={'text-2xl font-bold text-slate-700 cursor-pointer'}>
              {attributes.FeaturedArticle.data.attributes.Title}
            </h2>
          </Link>
          <p
            className={' text-slate-700'}
          >{`${attributes.FeaturedArticle.data.attributes.Creator.data.attributes.CreatorName} on ${attributes.FeaturedArticle.data.attributes.PublishedDate}`}</p>
          <p className={' text-slate-500'}>{attributes.FeaturedArticle.data.attributes.Description}</p>
          <div>
            {attributes.FeaturedArticle.data.attributes.Tags.data
              ?.filter((a) => a !== '')
              .map((value, index) => (
                <p
                  className={'font-medium text-green-500 bg-green-200 self-start p-2 rounded-md text-sm'}
                  key={index}
                >
                  {value.attributes.TagText}
                </p>
              ))}
          </div>
        </div>
      </section>
      <section className={'mt-16'}>
        <h4 className={'text-4xl font-bold text-gray-700'}>{`All ${attributes.CategoryName} articles`}</h4>

        <div className={'grid grid-cols-3 mt-8 gap-20'}>
          {attributes.Articles.data.map(({ id, attributes: articleAttribute }, index) => (
            <div
              className={'flex flex-col justify-between transition-all duration-200 hover:shadow-2xl p-4'}
              key={index}
            >
              <div className={'min-h-[200px] max-h-[300px] bg-green-600'}></div>
              <Link href={`/article/${articleAttribute.Slug}`}>
                <h4 className={'font-bold default-police text-2xl  text-slate-600 cursor-pointer'}>
                  {articleAttribute.Title}
                </h4>
              </Link>
              <p
                className={'mt-2 font-bold text-slate-700'}
              >{`${articleAttribute.Creator.data.attributes.CreatorName} on ${articleAttribute.PublishedDate}`}</p>

              <p className={'mt-2 font-medium text-slate-700'}>{articleAttribute.Description}</p>
              <div className={'flex'}>
                {articleAttribute.Tags.data
                  ?.filter((a) => a !== '')
                  .map((value, index) => (
                    <p
                      className={'font-medium text-green-500 bg-green-200 self-start p-2 rounded-md text-sm'}
                      key={index}
                    >
                      {value.attributes.TagText}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await ssrGetAllCategories.getServerPage({}, { cookies: undefined, req: undefined });
  const paths =
    props?.data?.categories?.data?.map((value) => ({
      params: { categoryName: value.attributes?.CategoryName },
    })) || [];

  return { paths, fallback: false };
};
export const getStaticProps: GetServerSideProps = async ({ params, req }) => {
  const res = await ssrGetCategoryBySlug.getServerPage(
    { variables: { categoryName: { eq: params?.categoryName?.toString() || '' } } },
    { cookies: undefined, req }
  );
  if (res.props.error || !res.props.data?.categories?.data?.length) {
    return {
      notFound: true,
    };
  }
  return res;
};
export default withApollo(
  ssrGetCategoryBySlug.withPage((arg) => ({
    variables: { categoryName: { eq: arg?.query?.categoryName?.toString() || '' } },
  }))(CategoryPage)
);
