import { useQuery } from "react-query";

export async function TestReactQuery03() {
  //내장 fetch 사용시
  const data = await fetch(
    "https://api.bonobono.dev/api/v1/post?boardType=TYPE_NOTICE&page=0",
    {
      method: "get",
    }
  ).then((res) => res.json());

  console.log("boardData : ", data);

  return (
    <div>
      {/* <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong> */}
      <div>TEST 페이지 05-03</div>
    </div>
  );
}
