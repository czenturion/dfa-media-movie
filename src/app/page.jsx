"use client";

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '@/src/store/store';

import Home from "@/src/components/home/Home";


const queryClient = new QueryClient();

export default function App() {
  return <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </Provider>
}