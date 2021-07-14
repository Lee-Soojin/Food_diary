import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <>
      <div>{promiseInProgress && <h1>로딩 중... </h1>}</div>
    </>
  );
};

export default LoadingIndicator;
