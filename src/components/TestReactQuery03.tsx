import { useEffect } from "react";

// Use Fetch
export function TestReactQuery03() {
  //내장 fetch 사용시
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.bonobono.dev/api/v1/post?boardType=TYPE_NOTICE&page=0",
        {
          method: "get",
        }
      ).then((res) => res.json());
      // ).then((res) => console.log(res));
      // console.log(data);
      console.log(res);
    }
    fetchData();
  }, []);
  //내장 fetch 사용시

  // console.log("data03 : ", data);

  return (
    <div>
      <div>TEST 페이지 05-03</div>
    </div>
  );
}
