"use client";
import { Example } from "@/components/Example";
import router from "next/router";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function TestPage01() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      {/* <Example /> */}
    </QueryClientProvider>
  );
}
