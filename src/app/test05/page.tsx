"use client";
import { TestReactQuery01 } from "@/components/TestReactQuery01";
import { TestReactQuery02 } from "@/components/TestReactQuery02";
import { TestReactQuery02_01 } from "@/components/TestReactQuery02_01";
import { TestReactQuery02_02 } from "@/components/TestReactQuery02_02";
import { TestReactQuery03 } from "@/components/TestReactQuery03";
import router from "next/router";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function TestPage01() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <TestReactQuery01 /> */}
      {/* <TestReactQuery02 /> */}
      {/* <TestReactQuery02_01 /> */}
      <TestReactQuery02_02 />
      {/* <TestReactQuery03 /> */}
    </QueryClientProvider>
  );
}
