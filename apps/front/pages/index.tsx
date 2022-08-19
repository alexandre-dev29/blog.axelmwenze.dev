import { Avatar } from '@nextui-org/react';
import { BsArrowRight } from 'react-icons/bs';

const HomePage = (props) => {
  return (
    <div className={'mt-12 px-56'}>
      <section className={''}>
        <div className={'h-[30vh] grid grid-cols-2 gap-24 mt-8 '}>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aliquid at doloremque ducimus, excepturi laboriosam libero, maxime
              nam neque non quis quod ratione reprehenderit, rerum suscipit
              temporibus tenetur vel veniam.
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
          <div className={'bg-teal-600 rounded-md'}></div>
        </div>
      </section>
      <section className={''}>
        <div className={'mt-12'}>
          <div className={'mt-8 flex justify-between'}>
            <div className={'relative'}>
              <h3
                className={
                  'text-4xl capitalize text-gray-800 font-bold tracking-wider ml-6  border-[#313bac]'
                }
              >
                Engineering
              </h3>
              <div
                className={'h-full w-[5px] bg-[#313bac] absolute top-0'}
              ></div>
            </div>
            <a
              href="#"
              className={'flex items-center text-secondary font-bold'}
            >
              All engineering articles
              <BsArrowRight className={'ml-2 font-bold'} />
            </a>
          </div>

          <div className={'h-[50vh] grid grid-cols-2 gap-24 mt-8 '}>
            <div className={'flex flex-col justify-between'}>
              <div className={'bg-red-500 w-full h-3/4 rounded-md'}></div>
              <h2
                className={
                  'font-bold default-police text-3xl text-gray-800 mt-8'
                }
              >
                Introducing segment data lakes
              </h2>
              <div className={'flex items-center gap-4'}>
                <Avatar src={'./mypicture.jpeg'} />
                <p className={'font-bold text-gray-600'}>
                  Axel Mwenze on October 9 2022
                </p>
              </div>
              <p className={'default-police font-medium text-gray-600'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquid at doloremque ducimus, excepturi laboriosam libero,
                maxime nam neque non quis quod ratione reprehenderit, rerum
                suscipit temporibus tenetur vel veniam.
              </p>
            </div>
            <div className={'grid grid-rows-2'}>
              <div className={''}>
                <h2
                  className={'font-bold default-police text-2xl text-gray-800'}
                >
                  how to start using advance analytics
                </h2>
                <div className={'flex items-center gap-4 mt-2'}>
                  <Avatar src={'./mypicture.jpeg'} />
                  <p className={'font-bold text-gray-600'}>
                    Axel Mwenze on October 9 2022
                  </p>
                </div>
                <p className={'default-police font-light text-gray-600 mt-2'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aliquid at doloremque ducimus, excepturi laboriosam libero,
                  maxime nam neque non quis quod ratione reprehenderit, rerum
                  suscipit temporibus tenetur vel veniam.
                </p>
              </div>
              <div className={'border-t-2 pt-8'}>
                <h2
                  className={'font-bold default-police text-2xl text-gray-800'}
                >
                  how to start using advance analytics
                </h2>
                <div className={'flex items-center gap-4 mt-2'}>
                  <Avatar src={'./mypicture.jpeg'} />
                  <p className={'font-bold text-gray-600'}>
                    Axel Mwenze on October 9 2022
                  </p>
                </div>
                <p className={'default-police font-light text-gray-600 mt-2'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aliquid at doloremque ducimus, excepturi laboriosam libero,
                  maxime nam neque non quis quod ratione reprehenderit, rerum
                  suscipit temporibus tenetur vel veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={'mt-12'}>
          <div className={'mt-8 flex justify-between'}>
            <div className={'relative'}>
              <h3
                className={
                  'text-4xl capitalize text-gray-800 font-bold tracking-wider ml-6  border-[#313bac]'
                }
              >
                Company
              </h3>
              <div
                className={'h-full w-[5px] bg-[#313bac] absolute top-0'}
              ></div>
            </div>
            <a
              href="#"
              className={'flex items-center text-secondary font-bold'}
            >
              All Company articles
              <BsArrowRight className={'ml-2 font-bold'} />
            </a>
          </div>

          <div className={'h-[50vh] grid grid-cols-2 gap-24 mt-8 '}>
            <div className={'flex flex-col justify-between'}>
              <div className={'bg-[#313bac] w-full h-3/4 rounded-md'}></div>
              <h2
                className={
                  'font-bold default-police text-3xl text-gray-800 mt-8'
                }
              >
                Introducing segment data lakes
              </h2>
              <div className={'flex items-center gap-4'}>
                <Avatar src={'./mypicture.jpeg'} />
                <p className={'font-bold text-gray-600'}>
                  Axel Mwenze on October 9 2022
                </p>
              </div>
              <p className={'default-police font-medium text-gray-600'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                aliquid at doloremque ducimus, excepturi laboriosam libero,
                maxime nam neque non quis quod ratione reprehenderit, rerum
                suscipit temporibus tenetur vel veniam.
              </p>
            </div>
            <div className={'grid grid-rows-2'}>
              <div className={''}>
                <h2
                  className={'font-bold default-police text-2xl text-gray-800'}
                >
                  how to start using advance analytics
                </h2>
                <div className={'flex items-center gap-4 mt-2'}>
                  <Avatar src={'./mypicture.jpeg'} />
                  <p className={'font-bold text-gray-600'}>
                    Axel Mwenze on October 9 2022
                  </p>
                </div>
                <p className={'default-police font-light text-gray-600 mt-2'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aliquid at doloremque ducimus, excepturi laboriosam libero,
                  maxime nam neque non quis quod ratione reprehenderit, rerum
                  suscipit temporibus tenetur vel veniam.
                </p>
              </div>
              <div className={'border-t-2 pt-8'}>
                <h2
                  className={'font-bold default-police text-2xl text-gray-800'}
                >
                  how to start using advance analytics
                </h2>
                <div className={'flex items-center gap-4 mt-2'}>
                  <Avatar src={'./mypicture.jpeg'} />
                  <p className={'font-bold text-gray-600'}>
                    Axel Mwenze on October 9 2022
                  </p>
                </div>
                <p className={'default-police font-light text-gray-600 mt-2'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aliquid at doloremque ducimus, excepturi laboriosam libero,
                  maxime nam neque non quis quod ratione reprehenderit, rerum
                  suscipit temporibus tenetur vel veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
