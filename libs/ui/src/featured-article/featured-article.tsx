import { Avatar } from '@nextui-org/react';
import { ArticleAttributs } from '../article-by-category-container/article-by-category-container';

export function FeaturedArticle({
  title,
  description,
  author,
  image,
  dateString,
  tags,
}: ArticleAttributs) {
  return (
    <section className={''}>
      <div
        className={'grid grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-24 mt-8 '}
      >
        <div className={'flex flex-col justify-between'}>
          <h2
            className={
              'font-bold default-police text-lg lg:text-2xl xl:text-4xl text-gray-800'
            }
          >
            {title}
          </h2>
          <div className={'flex items-center gap-4'}>
            <Avatar src={'./mypicture.jpeg'} />
            <p className={'font-bold text-gray-600'}>
              {`${author} on ${dateString}`}
            </p>
          </div>
          <p
            className={
              'default-police font-medium text-gray-600 xl:text-lg lg:text-sm'
            }
          >
            {description}
          </p>
          <div className={'flex gap-4'}>
            {tags?.map((value, index) => (
              <p
                key={index}
                className={
                  'font-medium text-blue-500 bg-blue-200 self-start p-2 rounded-lg text-sm'
                }
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        <div
          className={'bg-teal-600 rounded-lg hidden lg:block min-h-[300px]'}
        ></div>
      </div>
    </section>
  );
}

export default FeaturedArticle;
