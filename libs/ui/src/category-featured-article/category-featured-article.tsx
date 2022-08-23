import { ArticleAttributs } from '@next-template-nx/data';
import { Avatar } from '@nextui-org/react';
import Link from 'next/link';

export type typeMixedCategoryFeaturedType = {
  articleData: ArticleAttributs;
  isOtherArticlePresent: boolean;
};
export default function CategoryFeaturedArticle({
  isOtherArticlePresent,
  articleData,
}: typeMixedCategoryFeaturedType) {
  return isOtherArticlePresent ? (
    <div
      className={'flex flex-col justify-between transition-all duration-200 hover:shadow-2xl p-4 rounded-md'}
    >
      <div className={'bg-red-500 w-full h-3/4 max-h-[280px] rounded-lg hidden lg:block'}></div>
      <Link href={`/article/${articleData.slug}`}>
        <h2
          className={
            'font-bold default-police text-xl md:text-2xl lg:text-3xl text-gray-800 md:mt-6 cursor-pointer'
          }
        >
          {articleData.title}
        </h2>
      </Link>

      <div className={'flex items-center gap-4 mt-2'}>
        <Avatar src={`${articleData.authorImage}`} className={'mt-2'} />
        <p className={'font-bold text-gray-600'}>{`${articleData.author} on ${articleData.dateString}`}</p>
      </div>
      <p className={'default-police font-medium text-gray-600'}>{articleData.description}</p>
    </div>
  ) : (
    <div
      className={
        'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 transition-all duration-200 hover:shadow-2xl p-4 rounded-md'
      }
    >
      <div className={'bg-red-500 w-full min-h-[300px] rounded-lg hidden lg:block'}></div>
      <div>
        <Link href={`/article/${articleData.slug}`}>
          <h2
            className={
              'font-bold default-police text-xl md:text-2xl lg:text-3xl text-gray-800 md:mt-6 cursor-pointer'
            }
          >
            {articleData.title}
          </h2>
        </Link>

        <div className={'flex items-center gap-4 mt-2'}>
          <Avatar src={`${articleData.authorImage}`} className={'mt-2'} />
          <p className={'font-bold text-gray-600'}>{`${articleData.author} on ${articleData.dateString}`}</p>
        </div>
        <p className={'default-police font-medium text-gray-600'}>{articleData.description}</p>
        <div className={'flex gap-4 mt-2'}>
          {articleData.tags
            ?.filter((a) => a !== '')
            .map((value, index) => (
              <p
                key={index}
                className={'font-medium text-blue-500 bg-blue-200 self-start p-2 rounded-lg text-sm'}
              >
                {value}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
