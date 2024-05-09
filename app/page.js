"use client";

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store/store';

import Gallery from "@/app/components/gallery/Gallery";
import "nprogress/nprogress.css";



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