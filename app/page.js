"use client";

import { QueryClient, QueryClientProvider } from 'react-query';
import Gallery from "@/app/components/gallery/Gallery";
import store from './store/store';
import { Provider } from 'react-redux';

const queryClient = new QueryClient({
  defaultQueryObserverOptions: {
    staleTime: 1000 * 60 * 10,
  },
});

export default function Home() {
  return <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Gallery/>
    </QueryClientProvider>
  </Provider>
}