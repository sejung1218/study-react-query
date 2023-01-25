import { useEffect } from "react";
import { useQuery } from "react-query";

export function TestReactQuery01() {
  const TestReactQuery = useQuery("boardData", () =>
    fetch("https://api.bonobono.dev/api/v1/post?boardType=TYPE_NOTICE&page=0", {
      method: "get",
    }).then((res) => res.json())
  );

  useEffect(() => {
    console.log("data01 : ", TestReactQuery.data?.data.content);
  }, [TestReactQuery]);

  return (
    <div>
      {/* <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong> */}
      <div>TEST 페이지 05-01</div>
    </div>
  );
}
