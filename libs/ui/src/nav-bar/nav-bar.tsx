/* eslint-disable-next-line */
import { Dropdown } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useGetAllCategoriesQuery } from '@next-template-nx/data';
import { defaultApolloClient } from '@next-template-nx/utils';

type MenuItem = { name: string; link: string; key: string };

export function NavBar() {
  const [isSSR, setIsSSR] = useState(true);
  const [listOfMenu, setListOfMenu] = useState([] as Array<MenuItem>);
  const { loading, data } = useGetAllCategoriesQuery({
    errorPolicy: 'all',
    fetchPolicy: 'cache-first',
    client: defaultApolloClient,
  });
  useEffect(() => {
    setIsSSR(false);
    if (!loading) {
      const finalValue = [] as Array<MenuItem>;
      data?.categories?.data.forEach((value) => {
        finalValue.push({
          name: `${value.attributes?.CategoryName}`,
          key: `${value.attributes?.CategoryName.toLowerCase()}`,
          link: `${value.attributes?.CategoryName}`,
        });
      });
      setListOfMenu(finalValue);
    }
  }, [data?.categories?.data, loading]);

  const selectedStyle = 'border-b-2 border-[#313bac] text-secondary';

  return (
    <div
      className={
        'px-10 sm:px-24 md:px-28 lg:px-36 xl:px-48 2xl:px-56 flex justify-between items-center'
      }
    >
      <Link href={'/'}>
        <h1
          className={
            'text-lg lg:text-3xl font-extrabold default-police cursor-pointer'
          }
        >
          Axel <span className={'text-secondary'}>Mwenze</span>
        </h1>
      </Link>
      <div className={'flex flex-1 hidden md:block'}>
        <div className={'flex-1 flex gap-8 justify-end'}>
          {loading ? (
            <p>Loading.....</p>
          ) : (
            data?.categories?.data.map((value) => (
              <Link
                href={`/category/${value.attributes?.CategoryName}`}
                key={value.id}
              >
                <button
                  className={
                    'py-4 text-sm lg:text-lg  text-gray-600 font-bold '
                  }
                >
                  {value.attributes?.CategoryName}
                </button>
              </Link>
            ))
          )}
        </div>
      </div>
      <div className={'md:hidden '}>
        {!isSSR && (
          <Dropdown>
            <Dropdown.Button flat>
              <AiOutlineMenu className={'text-xl'} />
            </Dropdown.Button>
            <Dropdown.Menu aria-label="Dynamic Actions" items={listOfMenu}>
              {(item: any) => (
                <Dropdown.Item key={item.key} color={'secondary'}>
                  <Link href={`/category/${item.link}`}>
                    <p className={'font-bold default-police'}>{item.name}</p>
                  </Link>
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </div>
  );
}

export default NavBar;
