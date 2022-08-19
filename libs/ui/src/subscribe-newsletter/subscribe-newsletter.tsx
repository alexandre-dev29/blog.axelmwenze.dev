/* eslint-disable-next-line */
export interface SubscribeNewsletterProps {}

export function SubscribeNewsletter(props: SubscribeNewsletterProps) {
  return (
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
  );
}

export default SubscribeNewsletter;
