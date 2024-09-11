// import { useState } from 'react';

// export default function Upload() {
//   const [file, setFile] = useState(null);
//   const [prediction, setPrediction] = useState('');

//   const handleFileChange = (e: any) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await fetch('http://127.0.0.1:8000/predict/', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setPrediction(result.prediction);
//       } else {
//         setPrediction('Error: Unable to get prediction.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setPrediction('Error: Unable to connect to the server.');
//     }
//   };

//   return (
//     <div>
//       <h1>Upload an Image</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {prediction && <p>Prediction: {prediction}</p>}
//     </div>
//   );
// }

import axios from 'axios';
import { useState } from 'react';

const MyComponent = () => {
  const [file, setFile] = useState<File | null>(null);
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
      const response = await axios.post('http://127.0.0.1:8000/predict/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
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
    <div>
      <h1>Upload an Image</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default MyComponent;
