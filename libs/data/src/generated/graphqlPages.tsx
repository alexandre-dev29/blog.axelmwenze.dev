import * as Types from './graphqlTypes';
import * as Operations from './graphqlTypes';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import * as Apollo from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import type React from 'react';
import { ApolloClientContext, getApolloClient } from '@next-template-nx/utils';

export async function getServerPageGetOneAbout(
  options: Omit<Apollo.QueryOptions<Types.GetOneAboutQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetOneAboutQuery>({
    ...options,
    query: Operations.GetOneAboutDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export const useGetOneAbout = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetOneAboutQuery, Types.GetOneAboutQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetOneAboutDocument, options);
};
export type PageGetOneAboutComp = React.FC<{
  data?: Types.GetOneAboutQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetOneAbout =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetOneAboutQuery,
      Types.GetOneAboutQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetOneAboutComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetOneAboutDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetOneAbout = {
  getServerPage: getServerPageGetOneAbout,
  withPage: withPageGetOneAbout,
  usePage: useGetOneAbout,
};

export async function getServerPageGetAllAbout(
  options: Omit<Apollo.QueryOptions<Types.GetAllAboutQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllAboutQuery>({
    ...options,
    query: Operations.GetAllAboutDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}

export const useGetAllAbout = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetAllAboutQuery, Types.GetAllAboutQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAllAboutDocument, options);
};
export type PageGetAllAboutComp = React.FC<{
  data?: Types.GetAllAboutQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetAllAbout =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetAllAboutQuery,
      Types.GetAllAboutQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetAllAboutComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllAboutDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllAbout = {
  getServerPage: getServerPageGetAllAbout,
  withPage: withPageGetAllAbout,
  usePage: useGetAllAbout,
};
