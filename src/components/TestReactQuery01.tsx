import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
} from "react";
import { useQuery } from "react-query";

// Use React Query Hooks
export function TestReactQuery01() {
  const TestReactQuery = useQuery("boardData", () =>
    fetch("https://api.bonobono.dev/api/v1/post?boardType=TYPE_NOTICE&page=0", {
      method: "get",
    }).then((res) => res.json())
  );

  useEffect(() => {
    console.log("data01 : ", TestReactQuery.data?.data.content);
  }, [TestReactQuery]);

  return (
    <div>
      <div>TEST 페이지 05-01</div>
      {TestReactQuery.data?.data.content.map(
        (data: {
          id: Key | null | undefined;
          title:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <div key={data.id}>{data.title}</div>
        )
      )}
      <div></div>
    </div>
  );
}
