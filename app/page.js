"use client"
import { QueryClient, QueryClientProvider } from 'react-query';
import Gallery from "@/app/components/Gallery";

const queryClient = new QueryClient({
  defaultQueryObserverOptions: {
    staleTime: 1000 * 60 * 5,
  },
});

export default function Home() {
  return <QueryClientProvider client={queryClient}>
    <Gallery/>
  </QueryClientProvider>
}