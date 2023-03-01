import { useQuery } from "react-query";

const headRows: {
  name: string;
}[] = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

export function Example() {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  //     (res) => res.json()
  //   )
  // );
  // const { isLoading, error, data } = useQuery(
  //   ["boardData", { boardType: "TYPE_NOTICE", page: 0 }],
  //   () =>
  //     fetch(
  //       // "https://api.bonobono.dev/api/v1/post?boardType=TYPE_NOTICE&page=0",
  //       "https://api.bonobono.dev/api/v1/post?boardType=TYPE_NOTICE&page=0",
  //       { method: "get" }
  //     ).then((res) => res.json())
  // );

  // const { data, error, isLoading } = useQuery(["boardData", {boardType: "TYPE_NOTICE", page: 0}],
  //   () => fetch(`https://api.bonobono.dev/api/v1/post?boardType=${boardType}&page=${page}`).then((res) => res.json()));

  // const { data, isLoading, error } = useQuery(
  //   [{boardType: "TYPE_NOTICE"},{page: 0} ],
  //   async () => {
  //     const response = await fetch(`https://api.bonobono.dev/api/v1/post?boardType=${boardType}&page=${page}`);
  //     return response.json();
  //   }
  // );

  // const { data, isLoading, error } = useQuery(
  //   ['boardData', { boardType: "TYPE_NOTICE", page: 0 }],
  //   async ({ queryKey }) => {
  //     const ['boardData', { boardType: "TYPE_NOTICE", page: 0 }] = queryKey;
  //     const response = await fetch(`https://api.bonobono.dev/api/v1/post?boardType=${queryParams.boardType}&page=${queryParams.page}`);
  //     return response.json();
  //   }
  // );

  // const { data, isLoading, error } = useQuery(
  //   ['boardData', { boardType: "TYPE_NOTICE", page: 0 }],
  //   async ({ queryKey }) => {
  //     const ['boardData', queryParams] = queryKey;
  //     const response = await fetch(`https://api.bonobono.dev/api/v1/post?boardType=${queryParams.boardType}&page=${queryParams.page}`);
  //     return response.json();
  //   }
  // );

  const { data, isLoading, error } = useQuery(
    ['boardData', { boardType: "TYPE_NOTICE", page: 0 }],
    async ({ queryKey }) => {
      const queryParams = queryKey[1];
      const response = await fetch(`https://api.bonobono.dev/api/v1/post?boardType=${queryParams.boardType}&page=${queryParams.page}`);
      return response.json();
    }
  );



  console.log("새로 만든 data -> ", data)

  // TODO : post?boardType=TYPE_NOTICE&page=0 이런거 말고 파라미터로 넣는법 체크
  const detailData = data?.data.content; // console.log("repoData : ", data?.repoData);
  // console.log("data : ", data?.data.content);
  console.log("detailData : ", detailData);

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
      <div>TEST 페이지 01</div>
      <div>CN LMS notice board</div>
      <table border={1}>
        <thead>
          <tr>
            {headRows.map(({ name }: { name: string }) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.data.content.map((data: any) => (
            <tr key={data.id}>
              <td>{data?.seq}</td>
              <td>{data?.username}</td>
              <td>{data?.createdDtimeYmd}</td>
              <td>{data?.regIp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
