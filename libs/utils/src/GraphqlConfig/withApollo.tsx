import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { NextPage } from 'next';
import { ApolloClient, ApolloProvider, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { authLinkApp, ErrorLinkHandler, httpLinkApp } from './GraphqlConfig';
import { DarkTheme, ErrorPopup, LightTheme } from '@next-template-nx/ui';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';
import { useGraphqlErrorState } from '../StateManagement';

export type ApolloClientContext = {
  req?: IncomingMessage;
  cookies: NextApiRequestCookies;
};

export const getApolloClient = (ctx?: ApolloClientContext, initialState?: NormalizedCacheObject) => {
  if (ctx && ctx.req) {
    const { req } = ctx;
  }
  const errorLink = ErrorLinkHandler();
  const cache = new InMemoryCache().restore(initialState || {});

  return new ApolloClient({
    link: from([errorLink, authLinkApp, httpLinkApp]),
    cache,
  });
};

export const withApollo = (Comp: NextPage) => (props: any) => {
  const { isOpen, setIsOpen, errorType, messagesError } = useGraphqlErrorState();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <ErrorPopup
        errorType={errorType}
        messages={messagesError}
        onCloseEvent={closeModal}
        openStatus={isOpen}
      />
      <Toaster />
      <Head>
        <title>Welcome The template </title>
      </Head>
      <NextThemesProvider
        defaultTheme={'system'}
        attribute={'class'}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <NextUIProvider>
          <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
            <Comp />
          </ApolloProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
};
