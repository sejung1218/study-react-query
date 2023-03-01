"use client";

import router from "next/router";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function TestPage01() {
  const queryClient = new QueryClient();

  // TestReactQuery01 complete
  // TestReactQuery02 complete
  // TestReactQuery02_01 complete
  // TestReactQuery02_02 complete
  // TestReactQuery03 complete

  return (
    <QueryClientProvider client={queryClient}>
      Test
    </QueryClientProvider>
  );
}
