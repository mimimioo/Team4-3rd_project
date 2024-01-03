import React, {useRef, useState} from 'react';
import styled from "styled-components";

const ProfileImage = () => {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const addImage = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            console.log(selectedFile);
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <ImageWrapper>
            {selectedImage? <Image src={selectedImage} /> : <Image />}
            <EditImageBtn onClick={addImage}/>
            <InputImage
                type={"file"}
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}/>
        </ImageWrapper>
    );
};
export default ProfileImage;

const ImageWrapper = styled.div`
  position: relative;
`
const Image = styled.img`
  border: 1px solid #000;
  width: 100px;
  max-width: 200px;
  height: 100px;
  border-radius: 50%;
`
const InputImage = styled.input`
  display: none;
`
const EditImageBtn = styled.button`
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 65%;
  left: 65%;
  background-color: dodgerblue;
  cursor: pointer;
`