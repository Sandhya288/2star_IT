import React from 'react';
import './Careers.css';
function ImageGallery() {
  return (
    <div className="gallery-wrapper" id='careers'>
      <h1 className="header">CAREERS</h1>
      <div className="gallery">
        <figure className="image-container">
          <img src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg" alt="Image 01" className="image" />
        </figure>
        <figure className="image-container">
          <img src="https://www.shutterstock.com/image-photo/black-woman-working-office-futuristic-600nw-2312841725.jpg" alt="Image 02" className="image" />
        </figure>
        <figure className="image-container">
          <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg" alt="Image 03" className="image" />
        </figure>
        <figure className="image-container">
          <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" alt="Image 04" className="image" />
        </figure>
       
      </div>
    </div>
  );
}

export default ImageGallery;
