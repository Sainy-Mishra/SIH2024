import axios from 'axios';
import { Suspense, useState } from 'react';
import Loading from '@/components/Loading';

const MyComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [crop, setCrop] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/${crop}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        // const data = response.data.prediction;
        // const res = await fetch("http://localhost:3000/api/integrate",{
        //   headers: {
        //     'Content-Type': 'application/json',

        //   }
        // }).then((res)=>{
        //   return res.json();
        // })
        setPrediction(response.data.prediction);
      } else {
        setPrediction('Error: Unable to get prediction.');
      }
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Error: Unable to connect to the server.');
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#4CAF50' }}>Select Crop</h1>
          <select
            onChange={(e) => setCrop(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="" disabled selected>Select your option</option>
            <option value="rice">Rice</option>
            <option value="potato">Potato</option>
            <option value="tomato">Tomato</option>
            <option value="wheat">Wheat</option>
            <option value="maize">Maize</option>
          </select>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', width: '100%', maxWidth: '500px' }}>
          <h1 style={{ color: '#4CAF50' }}>Upload an Image of Infected {crop} Leaf</h1>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: 'block', margin: '20px auto', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <button
            onClick={handleUpload}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Upload
          </button>
          {prediction && (
            <p style={{ marginTop: '20px', fontSize: '18px', color: '#333', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
              Prediction: {prediction}
            </p>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default MyComponent;
