import { ArticleAttributs } from '@next-template-nx/data';
import { Avatar } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

export function FeaturedArticle({
  title,
  description,
  authorImage,
  author,
  image,
  dateString,
  tags,
  slug,
}: ArticleAttributs) {
  return (
    <section className={''}>
      <div
        className={
          'grid grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-24 mt-8 transition-all duration-200 hover:shadow-2xl p-4 rounded-md relative'
        }
      >
        <div className={'flex flex-col justify-between'}>
          <Link href={`/article/${slug}`}>
            <h2
              className={
                'font-bold default-police text-lg lg:text-2xl xl:text-4xl text-gray-800 cursor-pointer'
              }
            >
              {title}
            </h2>
          </Link>
          <div className={'flex items-center gap-4'}>
            <Avatar src={authorImage} />
            <p className={'font-bold text-gray-600'}>{`${author} on ${dateString}`}</p>
          </div>
          <p className={'default-police font-medium text-gray-600 xl:text-lg lg:text-sm'}>{description}</p>
          <div className={'flex gap-4'}>
            {tags
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
        <Image src={`${image}`} width={720} height={320} objectFit="cover" style={{ maxWidth: '480px' }} />
      </div>
    </section>
  );
}

export default FeaturedArticle;
