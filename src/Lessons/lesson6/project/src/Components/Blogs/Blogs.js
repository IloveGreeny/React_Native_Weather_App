import useFetch from "react-fetch-hook";

export default function Blogs() {
    const { isLoading, data, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=12"
      );
    return (
        <div>
        <h1>API Posts</h1>
        {isLoading && <div>Loading</div>}
        {error && (
          <div>{`problem - ${error}`}</div>
        )}
        <ul>
          {data &&
            data.map(({ id, title }) => (
              <li key={id}>
                <h3>{title}</h3>
              </li>
            ))}
        </ul>
      </div>
    )
}