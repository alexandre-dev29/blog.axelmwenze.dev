import { PageGetAllAboutComp, ssrGetAllAbout } from '@next-template-nx/data';
import { GetServerSideProps } from 'next';
import { useGraphqlErrorState, withApollo } from '@next-template-nx/utils';

const HomePage: PageGetAllAboutComp = (props) => {
  const { data } = props;
  const { isOpen, setIsOpen, errorType, messagesError } =
    useGraphqlErrorState();

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>activate</button>
      <button onClick={() => setIsOpen(true)}>deactivate</button>
      {data?.abouts?.data?.map((value, index) => (
        <div key={index} className={'text-2xl text-pink-400'}>
          {value.id}
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return await ssrGetAllAbout.getServerPage({}, ctx);
};

export default withApollo(ssrGetAllAbout.withPage(() => ({}))(HomePage));
