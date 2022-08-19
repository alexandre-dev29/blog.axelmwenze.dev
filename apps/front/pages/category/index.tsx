/* eslint-disable-next-line */
export interface CategoryProps {}

export function Category(props: CategoryProps) {
  return (
    <div className={'px-56'}>
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
      <section className={'mt-16'}>
        <h4 className={'text-4xl font-bold text-gray-700'}>
          All Engineering articles
        </h4>

        <div className={'grid grid-cols-3 mt-8 gap-20'}>
          <div className={'h-[35vh] flex flex-col justify-between'}>
            <div className={'h-3/6 bg-green-600'}></div>
            <h4 className={'font-bold default-police text-2xl  text-slate-600'}>
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
            <h4 className={'font-bold default-police text-2xl  text-slate-600'}>
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
            <h4 className={'font-bold default-police text-2xl  text-slate-600'}>
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
  );
}

export default Category;
