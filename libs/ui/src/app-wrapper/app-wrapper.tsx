import { ThemeProvider as NextThemesProvider } from 'next-themes';
import ErrorPopup from '../error-popup/error-popup';
import Head from 'next/head';
import { ErrorTypeGraphQl } from '@next-template-nx/data';
import { useState } from 'react';
import {
  authLinkApp,
  ErrorLinkHandler,
  httpLinkApp,
} from '@next-template-nx/utils';
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
} from '@apollo/client';
import { DarkTheme, LightTheme } from '../ThemeConfig';
import { NextUIProvider } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface AppWrapperProps {
  children: any;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [errorType, setErrorType] = useState(ErrorTypeGraphQl.Request);
  const [messagesError, setMessagesError] = useState(['']);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const errorLink = ErrorLinkHandler();

  const apolloClient = new ApolloClient({
    link: from([errorLink, authLinkApp, httpLinkApp]),
    cache: new InMemoryCache({
      typePolicies: {
        CategoryEntity: {
          keyFields: ['id', 'attributes'],
        },
      },
    }),
  });

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <ErrorPopup
        errorType={errorType}
        messages={messagesError}
        onCloseEvent={closeModal}
        openStatus={isOpen}
      />
      <Head>
        <title>Welcome The template </title>
      </Head>
      <NextThemesProvider
        defaultTheme={'system'}
        attribute={'class'}
        value={{ light: LightTheme.className, dark: DarkTheme.className }}
      >
        <NextUIProvider>
          <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
}

export default AppWrapper;
