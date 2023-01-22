import { useAxios } from "./hooks/useAxios";

function App() {
  const { loading, error, data, refetch } = useAxios({
    url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
  });
  console.log(loading, data, error);

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
