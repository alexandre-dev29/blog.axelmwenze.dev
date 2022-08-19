/* eslint-disable-next-line */
import { Dropdown } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type MenuItem = { name: string; link: string; key: string };
const listLinks: Array<MenuItem> = [
  { link: '/', name: 'Popular', key: 'popular' },
  { link: '/about', name: 'Engineering', key: 'engineering' },
  { link: '/work', name: 'Growth Marketing', key: 'growth-marketing' },
  { link: '/skills', name: 'Company', key: 'company' },
];

export function NavBar() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <div
      className={
        'px-10 sm:px-24 md:px-28 lg:px-36 xl:px-48 2xl:px-56 flex justify-between items-center'
      }
    >
      <h1 className={'text-lg lg:text-3xl font-extrabold default-police '}>
        Axel <span className={'text-secondary'}>Mwenze</span>
      </h1>
      <div className={'flex flex-1 hidden md:block'}>
        <div className={'flex-1 flex gap-8 justify-end'}>
          <button
            className={
              'py-4 text-sm lg:text-lg border-b-2 border-[#313bac] text-secondary font-bold '
            }
          >
            Popular
          </button>
          <button className={'py-4 text-sm lg:text-lg font-bold text-gray-600'}>
            Engineering{' '}
          </button>
          <button
            className={'py-4 text-sm lg:text-lg  font-bold text-gray-600'}
          >
            Growth Marketing{' '}
          </button>
          <button
            className={'py-4 text-sm lg:text-lg  font-bold text-gray-600'}
          >
            Company
          </button>
        </div>
      </div>
      <div className={'md:hidden '}>
        {!isSSR && (
          <Dropdown>
            <Dropdown.Button flat>
              <AiOutlineMenu className={'text-xl'} />
            </Dropdown.Button>
            <Dropdown.Menu aria-label="Dynamic Actions" items={listLinks}>
              {(item: any) => (
                <Dropdown.Item key={item.key} color={'secondary'}>
                  <Link href={`${item.link}`}>
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
