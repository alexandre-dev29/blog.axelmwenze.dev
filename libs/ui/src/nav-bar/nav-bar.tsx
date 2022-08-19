/* eslint-disable-next-line */
export interface NavBarProps {}

export function NavBar(props: NavBarProps) {
  return (
    <div className={'px-56 flex justify-between items-center'}>
      <h1 className={'text-3xl font-extrabold default-police '}>
        Axel <span className={'text-secondary'}>Mwenze</span>
      </h1>
      <div className={'flex flex-1'}>
        <div className={'flex-1 flex gap-8 justify-end'}>
          <button
            className={
              'py-4 border-b-2 border-[#313bac] text-secondary font-bold '
            }
          >
            Popular
          </button>
          <button className={'py-4 font-bold text-gray-600'}>
            Engineering{' '}
          </button>
          <button className={'py-4  font-bold text-gray-600'}>
            Growth Marketing{' '}
          </button>
          <button className={'py-4  font-bold text-gray-600'}>Company</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
