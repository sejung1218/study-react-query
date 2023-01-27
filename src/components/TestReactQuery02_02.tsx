import axios from "axios";
import { use, useEffect } from "react";

// Use Axios + async await
export function TestReactQuery02_02() {
  // axios사용시(async await)
  // useEffect(() => {}, []);
  // useEffect는 async 가 안되니 async 함수로 하나 더 감싸주자.

  useEffect(() => {
    async function fetchData() {
      const data = await axios
        .get("https://api.bonobono.dev/api/v1/post", {
          params: { boardType: "TYPE_NOTICE", page: 0 },
        })
        .then((data) => console.log("data02_02 : ", data));
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>TEST 페이지 05-02-02</div>
    </div>
  );
}
