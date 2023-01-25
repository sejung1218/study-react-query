import { useQuery } from "react-query";

export function TestReactQuery() {
  const RQ = useQuery(
    "",
    () =>
      fetch(
        "https://api.bonobono.dev/api/v1/post?boardType=TYPE_NOTICE&page=0",
        {
          method: "get",
        }
      ).then((res) => res.json())
    // async () => {

    //axios사용시
    // const data = await axios
    //   .get('https://api.bonobono.dev/api/v1/post', { params: { boardType: 'TYPE_NOTICE', page: 0 } })
    //   .then((res) => res);

    //내장 fetch 사용시
    //   const data = await fetch('https://api.bonobono.dev/api/v1/post?boardType=TYPE_NOTICE&page=0', {
    //     method: 'get',
    //   }).then((res) => res.json());
    //   console.log(data, '아 좀내놔');
    //   return data;
    // }
  );

  return (
    <div>
      {/* <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong> */}
      <div>TEST 페이지 05</div>
    </div>
  );
}
