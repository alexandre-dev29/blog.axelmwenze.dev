import { Avatar } from '@nextui-org/react';

const HomePage = (props) => {
  return (
    <div className={'px-56 py-10'}>
      <h1 className={'text-3xl font-extrabold default-police '}>
        Axel <span className={'text-secondary'}>Mwenze</span>
      </h1>
      <div className={'border-b border-b-2 border-gray-200 mt-6 flex'}>
        <div className={'flex-1 flex gap-8'}>
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
      <div className={'h-[30vh] grid grid-cols-2 gap-5 mt-8 '}>
        <div className={'flex flex-col justify-between'}>
          <h2 className={'font-bold default-police text-4xl text-gray-800'}>
            Introducing segment data lakes:
            <p>how to start using advance analytics</p>
          </h2>
          <div className={'flex items-center gap-4'}>
            <Avatar src={'./mypicture.jpeg'} />
            <p className={'font-bold text-gray-600'}>
              Axel Mwenze on October 9 2022
            </p>
          </div>
          <p className={'default-police font-medium text-gray-600'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
            at doloremque ducimus, excepturi laboriosam libero, maxime nam neque
            non quis quod ratione reprehenderit, rerum suscipit temporibus
            tenetur vel veniam.
          </p>
          <div className={'flex gap-4'}>
            <p
              className={
                'font-medium text-blue-500 bg-blue-200 self-start p-2 rounded-md text-sm'
              }
            >
              Engineering
            </p>
            <p
              className={
                'font-medium text-blue-500 bg-blue-200 self-start p-2 rounded-md text-sm'
              }
            >
              Engineering
            </p>
          </div>
        </div>
        <div className={'bg-red-500'}></div>
      </div>
    </div>
  );
};
export default HomePage;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   return await ssrGetAllAbout.getServerPage({}, ctx);
// };

// export default withApollo(ssrGetAllAbout.withPage(() => ({}))(HomePage));
