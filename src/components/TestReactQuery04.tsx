import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

// reactQuery + axios
export function TestReactQuery04() {
  const TestReactQuery = useQuery("boardData", () =>
    axios
      .get("https://api.bonobono.dev/api/v1/post", {
        method: "get",
        params: { boardType: "TYPE_NOTICE", page: 0 },
      })
      // .then((data) => console.log("inner data : ", data?.data.data.content))
      .then((data) => data)
  );
  // console.log(data);

  // console.log("outer data : ", TestReactQuery?.data);
  console.log("outer data : ", TestReactQuery?.data?.data.data.content);

  // console.log("TestReactQuery : ", TestReactQuery);

  // useEffect(() => {
  //   console.log("data01 : ", TestReactQuery.data?.data.content);
  // }, [TestReactQuery]);

  return (
    <div>
      <div>TEST 페이지 05-04</div>
      {/* {boardData.content.map((item) => (
        <div></div>
      ))} */}
      <div></div>
    </div>
  );
}
