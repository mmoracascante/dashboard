import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import './New.scss';
import { ChangeEvent, useState } from 'react';
import { User } from '../../formSource';

interface NewProps {
  inputs: User[];
  title: string;
}

export default function New({ inputs, title }: NewProps) {
  const [file, setFile] = useState<File>();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file) //preguntar porque no se puede usar un string como valor
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleInput}
                  style={{ display: 'none' }}
                />
              </div>
              {inputs.map((input: any) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button type="button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
//   if (!e.target.files) {
//     return;
//   }

//   const file = e.target.files[0];
//   onFileChange(file);
// };
