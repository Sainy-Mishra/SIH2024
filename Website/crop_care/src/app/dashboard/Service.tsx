// import React, { useRef, useState } from 'react';
// import Image from 'next/image';
// import './Service.css';

// interface ServiceProps {
//     onFileChange: (files: File[]) => void;
// }

// const Service: React.FC<ServiceProps> = (props) => {
//     const wrapperRef = useRef<HTMLDivElement>(null);
//     const [fileList, setFileList] = useState<File[]>([]);

//     const onDragEnter = () => {
//         if (wrapperRef.current) {
//             wrapperRef.current.classList.add('dragover');
//         }
//     };

//     const onDragLeave = () => {
//         if (wrapperRef.current) {
//             wrapperRef.current.classList.remove('dragover');
//         }
//     };

//     const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         if (wrapperRef.current) {
//             wrapperRef.current.classList.remove('dragover');
//         }
//         const newFiles = Array.from(e.dataTransfer.files);
//         const updatedList = [...fileList, ...newFiles];
//         setFileList(updatedList);
//         props.onFileChange(updatedList);
//     };

//     const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newFiles = Array.from(e.target.files || []);
//         const updatedList = [...fileList, ...newFiles];
//         setFileList(updatedList);
//         props.onFileChange(updatedList);
//     };

//     const fileRemove = (file: File) => {
//         const updatedList = fileList.filter(f => f !== file);
//         setFileList(updatedList);
//         props.onFileChange(updatedList);
//     };

//     const uploadToMLModel = (file: File) => {
//         // Implement your logic to upload the file to the ML model here
//         // You can use libraries like axios to make HTTP requests to the ML model endpoint
//         // Example:
//         // axios.post('https://your-ml-model-endpoint', file)
//         //     .then(response => {
//         //         // Handle the response from the ML model
//         //     })
//         //     .catch(error => {
//         //         // Handle any errors that occur during the upload
//         //     });
//     };

//     return (
//         <>
//             <div
//                 ref={wrapperRef}
//                 className="drop-file-input"
//                 onDragEnter={onDragEnter}
//                 onDragLeave={onDragLeave}
//                 onDragOver={(e) => e.preventDefault()}
//                 onDrop={onDrop}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                     if (e.key === 'Enter') {
//                         e.preventDefault();
//                         // Handle keyboard event if necessary
//                     }
//                 }}
//             >
//                 <div className="drop-file-input__label">
//                     <Image src="/assets/cloud-upload-regular-240.png" alt="Image" width={100} height={100} />
//                     <p>Drag & Drop your files here</p>
//                 </div>
//                 <input type="file" onChange={onFileDrop} />
//             </div>
//             {fileList.length > 0 && (
//                 <div className="drop-file-preview">
//                     <p className="drop-file-preview__title">Ready to upload</p>
//                     {fileList.map((item) => (
//                         <div key={item.name} className="drop-file-preview__item">
//                             <img
//                                 src={`/assets/${item.type.split('/')[1]}.png`}
//                                 alt="Preview"
//                                 width={50}
//                                 height={50}
//                             />
//                             <div className="drop-file-preview__item__info">
//                                 <p>{item.name}</p>
//                                 <p>{item.size}B</p>
//                             </div>
//                             <span
//                                 className="drop-file-preview__item__del"
//                                 onClick={() => fileRemove(item)}
//                                 role="button"
//                                 tabIndex={0}
//                                 onKeyDown={(e) => {
//                                     if (e.key === 'Enter') {
//                                         e.preventDefault();
//                                         fileRemove(item);
//                                     }
//                                 }}
//                             >
//                                 x
//                             </span>
//                             <button onClick={() => uploadToMLModel(item)}>Upload to ML Model</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// };

// export default Service;

import React from 'react'

const Service = () => {
  return (
    <div>
        <iframe className='z-20' src="http://localhost:8501/" width="100%" height="600px" />
    </div>
  )
}

export default Service