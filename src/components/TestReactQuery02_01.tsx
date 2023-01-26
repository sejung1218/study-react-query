import axios from "axios";
import { useEffect } from "react";

// Use Axios
export function TestReactQuery02_01() {
  //axios사용시
  const fetchUsers = async () => {
    try {
      const data = axios
        .get("https://api.bonobono.dev/api/v1/post", {
          params: { boardType: "TYPE_NOTICE", page: 0 },
        })
        .then((res) => res);
      console.log("data02 : ", data);
    } catch (e) {
      console.log(e);
    }
  };
  fetchUsers();

  // useEffect(() => {
  //   console.log("data02 : ", data);
  // }, [data]);

  return (
    <div>
      {/* <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong> */}
      <div>TEST 페이지 05-02-01</div>
    </div>
  );
}
