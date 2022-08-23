import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

interface ICategoryTitle {
  categoryTitle: string;
}

export default function CategoryTitle({ categoryTitle }: ICategoryTitle) {
  return (
    <div className={'flex justify-between'}>
      <h3
        className={
          'text-xl lg:text-3xl lg:text-4xl border-l-4 pl-4 capitalize text-gray-800 font-bold  border-[#313bac]'
        }
      >
        {categoryTitle}
      </h3>
      <Link href={`/category/${categoryTitle}`}>
        <p className={'flex items-center text-secondary font-bold text-sm lg:text-xl cursor-pointer'}>
          {`All ${categoryTitle} articles`}
          <BsArrowRight className={'ml-2 font-bold'} />
        </p>
      </Link>
    </div>
  );
}
