import axios from "axios";
import { useEffect } from "react";

// Use Axios
export function TestReactQuery02() {
  //axios사용시
  useEffect(() => {
    axios
      .get("https://api.bonobono.dev/api/v1/post", {
        params: { boardType: "TYPE_NOTICE", page: 0 },
      })
      .then((data) => {
        // console.log("data02 : ", data);
        console.log("data02_00 : ", data?.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>TEST 페이지 05-02</div>
    </div>
  );
}
