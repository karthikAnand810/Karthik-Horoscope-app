import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Form } from './components/Form';
import { useState } from 'react';

import { Horoscope } from './components/Horoscope';
import { Button } from 'primereact/button';

function App() {
  const [formData, setFormData] = useState(null);

  const restart = () => {
    
    setFormData(null)
  }

  return (
    <div className="App">

      {!formData && <Form formFilled={setFormData} />
      }
      {formData && <Horoscope data={formData} />
      }
      <Button label="Go Back" onClick={restart} className="p-button-rounded p-button-warning" style={{ display: "block", margin: "10px auto" }} />

    </div>
  );
}

export default App;
