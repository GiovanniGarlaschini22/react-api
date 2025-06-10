import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function App() {
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      const actressesList = resp.data.name;
      setActresses(actressesList);
    });
  }, []);

  return (
    <>
      <ul>
        {actresses.map((curActress) => (
          <li>{curActress.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;