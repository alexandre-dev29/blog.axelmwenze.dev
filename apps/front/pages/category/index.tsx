/* eslint-disable-next-line */
export interface CategoryProps {}

export function Category(props: CategoryProps) {
  return (
    <div className={'pt-10'}>
      <div className={'px-64'}>
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
        <section className={'mt-12 grid grid-cols-2 h-[25vh]'}>
          <div className={'bg-teal-600'}></div>
          <div
            className={
              'bg-gray-100 px-12 py-6 flex flex-col justify-between items-start'
            }
          >
            <h2 className={'text-2xl font-bold text-slate-700'}>
              Building the data delivery architecture that powers Twilio Engage
            </h2>
            <p className={' text-slate-700'}>
              Axel mwenze on January 20th 2022
            </p>
            <p className={' text-slate-500'}>
              With the launch of Twilio Engage, the team needed to update the
              data delivery system to support th…
            </p>
            <p
              className={
                'font-medium text-green-500 bg-green-200 self-start p-2 rounded-md text-sm'
              }
            >
              Engineering
            </p>
          </div>
        </section>
        <section className={'mt-16'}>
          <h4 className={'text-4xl font-bold text-gray-700'}>
            All Engineering articles
          </h4>

          <div className={'grid grid-cols-3 mt-8 gap-20'}>
            <div className={'h-[35vh] flex flex-col justify-between'}>
              <div className={'h-3/6 bg-green-600'}></div>
              <h4
                className={'font-bold default-police text-2xl  text-slate-600'}
              >
                How Integrated Customer Journeys Improve Patient Health
              </h4>
              <p className={'mt-2 font-bold text-slate-700'}>
                Kailey Raymond on August 11th 2022
              </p>
              <p className={'mt-2 font-medium text-slate-700'}>
                Rahul Kak talks about the consumerization of the healthcare
                industry and how his te…
              </p>
            </div>
            <div className={'h-[35vh] flex flex-col justify-between'}>
              <div className={'h-3/6 bg-green-600'}></div>
              <h4
                className={'font-bold default-police text-2xl  text-slate-600'}
              >
                How Integrated Customer Journeys Improve Patient Health
              </h4>
              <p className={'mt-2 font-bold text-slate-700'}>
                Kailey Raymond on August 11th 2022
              </p>
              <p className={'mt-2 font-medium text-slate-700'}>
                Rahul Kak talks about the consumerization of the healthcare
                industry and how his te…
              </p>
            </div>
            <div className={'h-[35vh] flex flex-col justify-between'}>
              <div className={'h-3/6 bg-green-600'}></div>
              <h4
                className={'font-bold default-police text-2xl  text-slate-600'}
              >
                How Integrated Customer Journeys Improve Patient Health
              </h4>
              <p className={'mt-2 font-bold text-slate-700'}>
                Kailey Raymond on August 11th 2022
              </p>
              <p className={'mt-2 font-medium text-slate-700'}>
                Rahul Kak talks about the consumerization of the healthcare
                industry and how his te…
              </p>
            </div>
          </div>
        </section>
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
    </div>
  );
}

export default Category;
