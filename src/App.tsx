import { useState } from "react";
import { Text } from "./components/Text";
import "./styles/global.css";

export function App() {
  const [count, setCount] = useState(0);

  return <>
 <Text>teste</Text>
  <button
  className="bg-cyan-500 hover:bg-cyan-300  font-bold py-2 px-4 rounded"
  onClick={() => setCount(count + 1)}
  >Enviar</button>
  </>;
}

 
