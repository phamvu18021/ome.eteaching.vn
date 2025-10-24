import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const API_GRAPHQL =
  process.env.NEXT_PUBLIC_API_GRAPHQL || "http://omeeteaching.local/graphql";
const API_TOKEN = process.env.TOKEN || "";

// Tạo link chính (HTTP)
const httpLink = new HttpLink({
  uri: API_GRAPHQL,
  fetch,
});

// Middleware thêm header Authorization nếu có token
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : "",
  },
}));

// Hàm tạo client (dùng được ở cả server và client component)
export function getClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // bật chế độ SSR nếu đang chạy trên server
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
