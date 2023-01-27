import axios from "axios";
import { useEffect } from "react";

// Use Axios
export function TestReactQuery02_01() {
  //axios사용시
  useEffect(() => {
    const data = axios
      .get("https://api.bonobono.dev/api/v1/post", {
        params: { boardType: "TYPE_NOTICE", page: 0 },
      })
      .then((res) => {
        res; // 여기에 console을 찍어봐야한다. 따로따로
      });
    // 동기와 비동기는 쉽게말해서
    // 동기는 절차대로 처리, 비동기는 미루고 처리
    // 비동기 처리문이 있으면 건너뛰고 나중에 처리가 완료되었을때
    // 실행할 함수를 지정해준다.
    // 옛날에는 callback function을 활용해서 요청처리가 끝났을때 실행
    // 지금은 promise를 통해서 then method 체이닝
    // get <- promise 함수
    console.log("data02_01 : ", data);
  });

  return (
    <div>
      <div>TEST 페이지 05-02-01</div>
    </div>
  );
}
