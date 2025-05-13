import { useState } from 'react';
import MyCode from "./first";

function App() {
  const [count, setCount] = useState(0);

  return (
   <>
   <MyCode/>
   </>
  );
}

export default App;
