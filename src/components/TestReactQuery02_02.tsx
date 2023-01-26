import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

// Use Axios
export function TestReactQuery02_02() {
  //axios사용시
  async () => {
    console.log("hi");
    const data = await axios
      .get("https://api.bonobono.dev/api/v1/post", {
        params: { boardType: "TYPE_NOTICE", page: 0 },
      })
      .then((res) => res);
    console.log("data : ", data);
  };

  return (
    <div>
      <div>TEST 페이지 05-02-02</div>
    </div>
  );
}
