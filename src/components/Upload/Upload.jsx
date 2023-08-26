import { FaFileAlt, } from 'react-icons/fa';
import img from '../../assets/cloud-upload.png';
import { useRef, useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileInputClick = () => {
        fileInputRef.current.click();
    }


    const uploadFile = e => {
        const formData = new FormData();
        const filesUp = e.target.files;
        setFiles([...filesUp]);
        console.log(filesUp);

        for (let i = 0; i < filesUp.length; i++) {
            formData.append(`files`, filesUp[i])
        }

        axios.post('https://task-react-server-60sqq2egv-emon1995.vercel.app/upload', formData)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="upload-box">
            <p>Upload your file</p>
            <form>
                <input type="file" name="file" className="file-input" hidden ref={fileInputRef} onChange={uploadFile} multiple />
                <div className="icon" onClick={handleFileInputClick}>
                    <img src={img} alt="img" />
                </div>
                <p>Browse File to upload</p>

            </form>
            {
                <section className="loading-area">
                    {
                        Array.isArray(files) && files.length > 0 && files.map((file, index) => (
                            <li key={index} className="row">
                                <FaFileAlt className='i' />
                                <div className="content">
                                    <div className="details">
                                        <div className="name">
                                            {`${file.name.length > 12 ? `${file.name.substring(0, 13)}... ${file.name.split('.')[1]}` : file.name} - uploading`}
                                        </div>
                                    </div>

                                </div>
                            </li>
                        ))
                    }

                </section>

            }

        </div>
    );
};

export default Upload;