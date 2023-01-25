import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

export function TestReactQuery02() {
  //axios사용시
  useEffect(() => {
    const data = axios
      .get("https://api.bonobono.dev/api/v1/post", {
        params: { boardType: "TYPE_NOTICE", page: 0 },
      })
      .then((res) => res);
    console.log("testReactQuery02 입니다.");
    console.log("data : ", data);
  }, []);

  return (
    <div>
      {/* <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong> */}
      <div>TEST 페이지 05-02</div>
    </div>
  );
}
