/* eslint-disable-next-line */
export interface CategoryProps {}

export function CategoryName(props: CategoryProps) {
  return (
    <div className={''}>
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
          <p className={' text-slate-700'}>Axel mwenze on January 20th 2022</p>
          <p className={' text-slate-500'}>
            With the launch of Twilio Engage, the team needed to update the data
            delivery system to support th…
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
    </div>
  );
}

export default CategoryName;
