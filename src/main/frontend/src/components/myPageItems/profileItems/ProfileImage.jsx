import React, {useContext, useRef, useState} from 'react';
import styled from "styled-components";
import { uploadProfileImage } from '../../firebase/UploadImage';
import {useSelector} from "react-redux";


const ProfileImage = (props) => {
    const fileInputRef = useRef(null);
    const userInfo = useSelector(state => state.user)

    const addImage = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }
    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            try {
                props.setImgAddress(await uploadProfileImage(selectedFile, userInfo.userEmail));
            } catch (error) {
                console.error('Image upload failed:', error);
            }
        }
    };

    return (
        <ImageWrapper>
            <Image src={props.imgAddress}/>
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
  border: 2px solid #000;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 65%;
  left: 65%;
  background: url("/image/picture_icon.png") center/cover no-repeat #fff;
  cursor: pointer;
`