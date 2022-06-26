import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ul6cg40y8501uedh4u24gd/master',
  cache: new InMemoryCache()
})

