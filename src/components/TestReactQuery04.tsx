import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

const headRows: {
  name: string;
}[] = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

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
      <div>CN LMS notice board</div>
      <table border={1}>
        <thead>
          <tr>
            {headRows.map(({ name }: { name: string }) => (
              <th>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TestReactQuery?.data?.data.data.content.map((data: any) => (
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
