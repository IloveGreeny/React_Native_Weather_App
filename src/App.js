import './App.css';
import { QueryClient,QueryClientProvider,useQuery,useMutation,InvalidateQueries } from "react-query";


const queryClient = new QueryClient();
export default function App() {


  async function fetchData() {
     const res = await fetch("/MockData/data.json");
     return res.json();
  }

function Data() {
    const { data, status } = useQuery("data",fetchData);

    const mutation = useMutation( {
      onSuccess: () => {
        queryClient.invalidateQueries("data");
      },
    })

    if (status === "loading") {
      return <p>Loading</p>
    }

    if(status === "error") {
      return  <p>Error!</p>
    }

    return  (
        <ul>
          {data.map((datas) => {
            <li key={data.id}>{data.make}</li>
          })}
        </ul>
    )
}

  return (
      <QueryClientProvider client={queryClient}>
        <Data/>
      </QueryClientProvider>
  );
}


