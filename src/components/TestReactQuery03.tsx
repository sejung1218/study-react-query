import { useQuery } from "react-query";

// Use Fetch
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
      <div>TEST 페이지 05-03</div>
    </div>
  );
}
