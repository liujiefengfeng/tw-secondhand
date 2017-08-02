import * as React from 'react';
import './ImageUploader.css';
const arrowUpUpload = require('./arrow_up_upload.png');

interface ImageProps {
  uploadImage: (fileData: string) => void;
}

const upload = (e, callback) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    callback(reader.result);
  };
  reader.readAsText(file);
};
　
export const ImageUploader = (props: ImageProps) => (
  <div className="ImageUploader">
    <label htmlFor="file-input">
      <p>点击上传图片</p>
      <img src={arrowUpUpload} />
    </label>
    <input id="file-input" type="file" accept='image/*' onChange={(e) => upload(e, props.uploadImage)} />
  </div>
);
