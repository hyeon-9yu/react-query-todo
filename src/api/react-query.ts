import axios from 'axios';
import { QueryClient, QueryFunctionContext } from 'react-query';
import { runMock } from './mock-api';

runMock();

const axiosDefaultQuery = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await axios.get(queryKey[0] as string, { params: queryKey[1] });
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
      queryFn: axiosDefaultQuery,
      retry: 2,
      retryDelay: 500,
      staleTime: Infinity,
    },
  },
});
