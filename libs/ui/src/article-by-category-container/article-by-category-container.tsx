import { Avatar } from '@nextui-org/react';
import { ArticleAttributs } from '@next-template-nx/data';
import CategoryFeaturedArticle from '../category-featured-article/category-featured-article';
import CategoryTitle from '../category-title/category-title';
import Link from 'next/link';

export interface ArticleByCategoryContainerProps {
  categoryTitle: string;
  featuredArticle: ArticleAttributs;
  otherArticles: Array<ArticleAttributs>;
}

export function ArticleByCategoryContainer({
  featuredArticle,
  categoryTitle,
  otherArticles,
}: ArticleByCategoryContainerProps) {
  return (
    <section className={'mt-12 py-6'}>
      <CategoryTitle categoryTitle={categoryTitle} />
      <div className={'mt-8'}>
        {otherArticles.length > 0 ? (
          <div className={'xl:h-[50vh] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-8 '}>
            <CategoryFeaturedArticle articleData={featuredArticle} isOtherArticlePresent={true} />
            <div className={`grid grid-rows-${otherArticles.length}`}>
              {otherArticles.map(
                ({ title, author, dateString, description, authorImage, image, slug }, index) => (
                  <div className={'border-t-2 pt-8 '} key={index}>
                    <div className={'transition-all duration-200 hover:shadow-2xl p-4 rounded-md'}>
                      <Link href={`/article/${slug}`}>
                        <h2
                          className={
                            'font-bold default-police text-xl lg:text-2xl text-gray-800 cursor-pointer'
                          }
                        >
                          {title}
                        </h2>
                      </Link>

                      <div className={'flex items-center gap-4 mt-2'}>
                        <Avatar src={authorImage} />
                        <p className={'font-bold text-gray-600'}>{`${author} on ${dateString}`}</p>
                      </div>
                      <p className={'default-police font-light text-gray-600 mt-2'}>{description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <div className={'grid grid-cols-1 gap-12 lg:gap-24 mt-8 '}>
            <CategoryFeaturedArticle articleData={featuredArticle} isOtherArticlePresent={false} />
          </div>
        )}
      </div>
    </section>
  );
}

export default ArticleByCategoryContainer;
