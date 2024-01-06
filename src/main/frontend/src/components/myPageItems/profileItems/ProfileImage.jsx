import React, {useContext, useRef, useState} from 'react';
import styled from "styled-components";
import UserContext from "../../../context/user/UserContext";
import { uploadProfileImage } from '../../firebase/UploadImage';


const ProfileImage = () => {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const {userInfo, dispatchUserInfo} = useContext(UserContext);
    const [imageUrl, setImageUrl] = useState(null);

    const addImage = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }
    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            try {
                setImageUrl(await uploadProfileImage(selectedFile, userInfo.userEmail));
                console.log('Image URL:', imageUrl);
                setSelectedImage(imageUrl);
            } catch (error) {
                console.error('Image upload failed:', error);
            }
        }
    };

    return (
        <ImageWrapper>
            <Image src={userInfo.userProfileImg}/>
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