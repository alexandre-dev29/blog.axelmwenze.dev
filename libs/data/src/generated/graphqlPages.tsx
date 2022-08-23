import * as Types from './graphqlTypes';
import * as Operations from './graphqlTypes';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import * as Apollo from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import type React from 'react';
import { ApolloClientContext, getApolloClient } from '@next-template-nx/utils';

export async function getServerPageGetAllArticles(
  options: Omit<Apollo.QueryOptions<Types.GetAllArticlesQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllArticlesQuery>({
    ...options,
    query: Operations.GetAllArticlesDocument,
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
export type PageGetAllArticlesComp = React.FC<{
  data?: Types.GetAllArticlesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetAllArticles =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetAllArticlesQuery, Types.GetAllArticlesQueryVariables>
  ) =>
  (WrappedComponent: PageGetAllArticlesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllArticlesDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllArticles = {
  getServerPage: getServerPageGetAllArticles,
  withPage: withPageGetAllArticles,
};
export async function getServerPageGetOneArticle(
  options: Omit<Apollo.QueryOptions<Types.GetOneArticleQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetOneArticleQuery>({
    ...options,
    query: Operations.GetOneArticleDocument,
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

export type PageGetOneArticleComp = React.FC<{ data?: Types.GetOneArticleQuery; error?: Apollo.ApolloError }>;
export const withPageGetOneArticle =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetOneArticleQuery, Types.GetOneArticleQueryVariables>
  ) =>
  (WrappedComponent: PageGetOneArticleComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetOneArticleDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetOneArticle = {
  getServerPage: getServerPageGetOneArticle,
  withPage: withPageGetOneArticle,
};
export async function getServerPageGetArticleBySlug(
  options: Omit<Apollo.QueryOptions<Types.GetArticleBySlugQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetArticleBySlugQuery>({
    ...options,
    query: Operations.GetArticleBySlugDocument,
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
export type PageGetArticleBySlugComp = React.FC<{
  data?: Types.GetArticleBySlugQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetArticleBySlug =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetArticleBySlugQuery, Types.GetArticleBySlugQueryVariables>
  ) =>
  (WrappedComponent: PageGetArticleBySlugComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetArticleBySlugDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetArticleBySlug = {
  getServerPage: getServerPageGetArticleBySlug,
  withPage: withPageGetArticleBySlug,
};
export async function getServerPageGetAllCategories(
  options: Omit<Apollo.QueryOptions<Types.GetAllCategoriesQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllCategoriesQuery>({
    ...options,
    query: Operations.GetAllCategoriesDocument,
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
export type PageGetAllCategoriesComp = React.FC<{
  data?: Types.GetAllCategoriesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetAllCategories =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetAllCategoriesQuery, Types.GetAllCategoriesQueryVariables>
  ) =>
  (WrappedComponent: PageGetAllCategoriesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllCategoriesDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllCategories = {
  getServerPage: getServerPageGetAllCategories,
  withPage: withPageGetAllCategories,
};
export async function getServerPageGetOneCategory(
  options: Omit<Apollo.QueryOptions<Types.GetOneCategoryQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetOneCategoryQuery>({
    ...options,
    query: Operations.GetOneCategoryDocument,
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
export type PageGetOneCategoryComp = React.FC<{
  data?: Types.GetOneCategoryQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetOneCategory =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetOneCategoryQuery, Types.GetOneCategoryQueryVariables>
  ) =>
  (WrappedComponent: PageGetOneCategoryComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetOneCategoryDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetOneCategory = {
  getServerPage: getServerPageGetOneCategory,
  withPage: withPageGetOneCategory,
};
export async function getServerPageGetCategoryBySlug(
  options: Omit<Apollo.QueryOptions<Types.GetCategoryBySlugQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetCategoryBySlugQuery>({
    ...options,
    query: Operations.GetCategoryBySlugDocument,
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
export type PageGetCategoryBySlugComp = React.FC<{
  data?: Types.GetCategoryBySlugQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetCategoryBySlug =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetCategoryBySlugQuery, Types.GetCategoryBySlugQueryVariables>
  ) =>
  (WrappedComponent: PageGetCategoryBySlugComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetCategoryBySlugDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetCategoryBySlug = {
  getServerPage: getServerPageGetCategoryBySlug,
  withPage: withPageGetCategoryBySlug,
};

export async function getServerPageGetFeaturedArticle(
  options: Omit<Apollo.QueryOptions<Types.GetFeaturedArticleQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetFeaturedArticleQuery>({
    ...options,
    query: Operations.GetFeaturedArticleDocument,
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

export type PageGetFeaturedArticleComp = React.FC<{
  data?: Types.GetFeaturedArticleQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetFeaturedArticle =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetFeaturedArticleQuery, Types.GetFeaturedArticleQueryVariables>
  ) =>
  (WrappedComponent: PageGetFeaturedArticleComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetFeaturedArticleDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetFeaturedArticle = {
  getServerPage: getServerPageGetFeaturedArticle,
  withPage: withPageGetFeaturedArticle,
};

export async function getServerPageGetAllTags(
  options: Omit<Apollo.QueryOptions<Types.GetAllTagsQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllTagsQuery>({
    ...options,
    query: Operations.GetAllTagsDocument,
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

export type PageGetAllTagsComp = React.FC<{ data?: Types.GetAllTagsQuery; error?: Apollo.ApolloError }>;
export const withPageGetAllTags =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetAllTagsQuery, Types.GetAllTagsQueryVariables>
  ) =>
  (WrappedComponent: PageGetAllTagsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllTagsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllTags = {
  getServerPage: getServerPageGetAllTags,
  withPage: withPageGetAllTags,
};
export async function getServerPageGetOneTag(
  options: Omit<Apollo.QueryOptions<Types.GetOneTagQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetOneTagQuery>({
    ...options,
    query: Operations.GetOneTagDocument,
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

export type PageGetOneTagComp = React.FC<{ data?: Types.GetOneTagQuery; error?: Apollo.ApolloError }>;
export const withPageGetOneTag =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetOneTagQuery, Types.GetOneTagQueryVariables>
  ) =>
  (WrappedComponent: PageGetOneTagComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetOneTagDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetOneTag = {
  getServerPage: getServerPageGetOneTag,
  withPage: withPageGetOneTag,
};
