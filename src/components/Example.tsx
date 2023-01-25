import { useQuery } from "react-query";

export function Example() {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  //     (res) => res.json()
  //   )
  // );
  const { isLoading, error, data } = useQuery(
    ["boardData", { boardType: "TYPE_NOTICE", page: 1 }],
    () =>
      fetch("https://api.bonobono.dev/api/v1/post", { method: "get" }).then(
        (res) => res.json()
      )
  );

  // console.log("repoData : ", data?.repoData);
  console.log("data : ", data);

  // if (isLoading) return "Loading...";
  // if (isLoading) return <div>"Loading...";</div>;

  // 이렇게 작성하면 상위에서 'Example'은(는) JSX 구성 요소로 사용할 수 없습니다.
  // 해당 반환 형식 'string | Element'은(는) 유효한 JSX 요소가 아닙니다. 라는 에러 출력.
  // if (error) return "An error has occurred: " + error;
  // 아래와 같이 작성해야 한다. feat. 제호
  // if (error) return <div>"An error has occurred: " + error;</div>;

  return (
    <div>
      {/* <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong> */}
      <div>TEST</div>
    </div>
  );
}
