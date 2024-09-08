import type { FC } from 'react';
import { useRef, useState } from 'react';
import Image from 'next/image';
// Importing the CSS file
import './Service.css';

// Importing necessary configurations and assets
import type { ImageConfigType } from '../dashboard/ImageConfig';
import uploadImg from '..\..\assets\cloud-upload-regular-240.png';

// Defining the props interface
interface ServiceProps {
    onFileChange: (files: File[]) => void;
}

// Assuming ImageConfig is an object with string keys
const ImageConfig: ImageConfigType = {
    default: uploadImg,
    pdf: uploadImg,
    png: uploadImg,
    css: uploadImg,
};

const Service: React.FC<ServiceProps> = (props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [fileList, setFileList] = useState<File[]>([]);

    const onDragEnter = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.add('dragover');
        }
    };

    const onDragLeave = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.remove('dragover');
        }
    };

    const onDrop = () => {
        if (wrapperRef.current) {
            wrapperRef.current.classList.remove('dragover');
        }
    };

    const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files?.[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    };

    const fileRemove = (file: File) => {
        const updatedList = fileList.filter(f => f !== file);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    };

    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                role="button" tabIndex={0} // Ensure the div is focusable
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        // Handle keyboard event if necessary
                    }
                }}
            >
                <div className="drop-file-input__label">
                <Image src={uploadImg} alt="Image" />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" onChange={onFileDrop} />
            </div>
            {fileList.length > 0 && (
                <div className="drop-file-preview">
                    <p className="drop-file-preview__title">Ready to upload</p>
                    {fileList.map((item) => (
                        <div key={item.name} className="drop-file-preview__item">
                            <img
                                src={
                                    (ImageConfig[item.type.split('/')[1] as keyof ImageConfigType]).src
                                }
                                alt="Preview"
                            />
                            <div className="drop-file-preview__item__info">
                                <p>{item.name}</p>
                                <p>{item.size}B</p>
                            </div>
                            <span
                                className="drop-file-preview__item__del"
                                onClick={() => fileRemove(item)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        fileRemove(item);
                                    }
                                }}
                            >
                                x
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Service;
