import { BsArrowRight } from 'react-icons/bs';
import { Avatar } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface ArticleAttributs {
  title: string;
  image?: string;
  description: string;
  author: string;
  dateString: string;
  tags?: string[];
}

export interface ArticleByCategoryContainerProps {
  categoryTitle: string;
  featuredArticle: ArticleAttributs;
  otherArticles: Array<ArticleAttributs>;
}

interface ICategoryTitle {
  categoryTitle: string;
}

function CategoryTitle({ categoryTitle }: ICategoryTitle) {
  return (
    <div className={'flex justify-between'}>
      <h3
        className={
          'text-xl lg:text-3xl lg:text-4xl border-l-4 pl-4 capitalize text-gray-800 font-bold  border-[#313bac]'
        }
      >
        {categoryTitle}
      </h3>
      <a
        href="#"
        className={
          'flex items-center text-secondary font-bold text-sm lg:text-xl'
        }
      >
        {`All ${categoryTitle} articles`}
        <BsArrowRight className={'ml-2 font-bold'} />
      </a>
    </div>
  );
}

function CategoryFeaturedArticle({
  title,
  author,
  description,
  dateString,
}: ArticleAttributs) {
  return (
    <div className={'flex flex-col justify-between'}>
      <div
        className={
          'bg-red-500 w-full h-3/4 max-h-[280px] rounded-lg hidden lg:block'
        }
      ></div>
      <h2
        className={
          'font-bold default-police text-xl md:text-2xl lg:text-3xl text-gray-800 md:mt-6'
        }
      >
        {title}
      </h2>
      <div className={'flex items-center gap-4 mt-2'}>
        <Avatar src={'./mypicture.jpeg'} className={'mt-2'} />
        <p className={'font-bold text-gray-600'}>
          {`${author} on ${dateString}`}
        </p>
      </div>
      <p className={'default-police font-medium text-gray-600'}>
        {description}
      </p>
    </div>
  );
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
        <div
          className={
            'xl:h-[50vh] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-8 '
          }
        >
          <CategoryFeaturedArticle
            author={featuredArticle.author}
            dateString={featuredArticle.dateString}
            description={featuredArticle.description}
            title={featuredArticle.title}
          />
          <div className={'grid grid-rows-2'}>
            {otherArticles
              .slice(0, 2)
              .map(({ title, author, dateString, description }, index) => (
                <div className={'border-t-2 pt-8'}>
                  <h2
                    className={
                      'font-bold default-police text-xl lg:text-2xl text-gray-800'
                    }
                  >
                    {title}
                  </h2>
                  <div className={'flex items-center gap-4 mt-2'}>
                    <Avatar src={'./mypicture.jpeg'} />
                    <p className={'font-bold text-gray-600'}>
                      {`${author} on ${dateString}`}
                    </p>
                  </div>
                  <p className={'default-police font-light text-gray-600 mt-2'}>
                    {description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleByCategoryContainer;
