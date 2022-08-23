import { onError } from '@apollo/client/link/error';
import { ErrorTypeGraphQl } from '@next-template-nx/data';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { GraphqlErrorState } from '../StateManagement';

export const ErrorLinkHandler = () => {
  const { setState } = GraphqlErrorState;

  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      setState({ messagesError: graphQLErrors.map((a) => a.message) });
      setState({ errorType: ErrorTypeGraphQl.Request });
      setState({ isOpen: true });
    }
    if (networkError) {
      setState({ errorType: ErrorTypeGraphQl.Network });
      setState({
        messagesError: ['Connection Issue Please check Your internet connection and try again'],
      });
      setState({ isOpen: true });
    }
  });
};

export const authLinkApp = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_ACCESS_TOKEN}`,
    },
  };
});

export const httpLinkApp = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});
export const defaultApolloClient = new ApolloClient({
  link: from([authLinkApp, httpLinkApp]),
  cache: new InMemoryCache({
    typePolicies: {
      CategoryEntity: {
        keyFields: ['id', 'attributes'],
      },
      UploadFileEntity: {
        keyFields: ['id', 'attributes'],
      },
    },
  }),
});
