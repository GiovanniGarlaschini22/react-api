import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import cards from "./components/Card";


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
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-4">Actress List</h1>
          </div>
        </div>

        <div className="row">
          {actresses.map((curActress) => (
            <cards
              key={curActress.id}
              actress={curActress}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;