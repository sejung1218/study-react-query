import axios from "axios";
import { useEffect } from "react";

// Use Axios
export function TestReactQuery02_01() {
  //axios사용시
  const data = axios
    .get("https://api.bonobono.dev/api/v1/post", {
      params: { boardType: "TYPE_NOTICE", page: 0 },
    })
    .then((res) => res);
  console.log("data02_01 : ", data);

  return (
    <div>
      <div>TEST 페이지 05-02-01</div>
    </div>
  );
}
