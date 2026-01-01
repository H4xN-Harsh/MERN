import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevCount.current}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;