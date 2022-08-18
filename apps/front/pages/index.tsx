import { Avatar } from '@nextui-org/react';
import { BsArrowRight } from 'react-icons/bs';

const HomePage = (props) => {
  return (
    <div className={'pt-10'}>
      <div className={'px-56'}>
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
      </div>
      <section
        style={{ backgroundColor: 'rgb(245, 246, 251)' }}
        className={'h-[30vh] mt-16 flex justify-center items-center'}
      >
        <div className={'h-3/4 w-7/12 bg-sky-800 px-12 py-6 grid grid-cols-5'}>
          <div className={'col-span-3 flex flex-col '}>
            <h4 className={'font-bold text-3xl text-gray-100'}>
              {"Don't miss any new article"}
            </h4>
            <p className={'mt-2 text-white'}>Subscribe to newsletter</p>
            <div className={' flex items-center mt-4'}>
              <input
                type="email"
                className={'outline-0 h-12 w-3/4 pl-4'}
                placeholder={'Enter your email address'}
              />
              <button
                className={
                  'h-12 px-12 bg-teal-600 text-white font-bold capitalize'
                }
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className={'items-end'}>
            <img
              src={'message.svg'}
              className={'w-[200px] ml-24'}
              alt={'message svg'}
            />
          </div>
        </div>
      </section>
      <footer className={'flex justify-center items-center p-8 bg-sky-800'}>
        <p className={'default-police text-white text-lg font-bold'}>
          <a href="#">&copy; Axel Mwenze 2022</a>
        </p>
      </footer>
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
