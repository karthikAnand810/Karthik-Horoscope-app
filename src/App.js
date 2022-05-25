import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Form } from './components/Form';
import { useState } from 'react';
import { Image } from 'primereact/image';
import { Horoscope } from './components/Horoscope';
import { Button } from 'primereact/button';

function App() {
  const [formData, setFormData] = useState(null);

  const restart = () => {
    setFormData(null)
  }
  return (
    <div className="App">
      <div className='header'><Image src="../horoscope.png" alt="Image" width="250" />
      </div>
      {!formData && <Form formFilled={setFormData} />
      }
      {formData && <Horoscope data={formData} />
      }
      <Button label="Reset" onClick={restart} className="p-button-rounded p-button-warning" />

    </div>
  );
}

export default App;
