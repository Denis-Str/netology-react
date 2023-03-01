import React from "react";
import useJsonFetch from "./hooks/useJsonFetch";

const RequestComp = ({ url }) => {
  const [data, loading, error] = useJsonFetch(url);
  if (loading) return <h4 className="request-comp">is Loading...</h4>

  const dataText = (data && data.status) ? <h4>Request Status: {data.status}</h4> : null;
  const errorText = (error && error.message) ? <h4>Request Status: {error.message}</h4> : null;

  return (
    <div className={`request-comp ${error ? '_error' : ""}`.trim()}>
      { dataText || errorText }
    </div>
  );
}

export default function App() {
  return (
    <div className="wrap">
      <RequestComp url={'http://localhost:7070/data'} />
      <RequestComp url={'http://localhost:7070/error'} />
      <RequestComp url={'http://localhost:7070/loading'} />
  </div>)
}
