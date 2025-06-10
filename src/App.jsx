import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function App() {
  // variabile di stato //
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    // chaiamata axios //
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
    .then((resp) => {
      console.log("lista attrici ricevuta dall'API", resp.data);
      setActresses(resp.data);
      
    });
  }, []);

  return (
    <>
      <ul>
        <h2>actresses list</h2>
        {actresses.map((curActress) => (
          <li key={curActress.id}>
            {curActress.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;