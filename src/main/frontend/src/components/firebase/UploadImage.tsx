// import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
// import { storage } from "./firebase";
// import { useState } from "react";
// import React from 'react';


// const UploadImage = ({ setImage }: { setImage: (p: string) => void }) => {
//   const [imageURL, setImageURL] = useState<string>("");

//   const onImageChange = (
//     e: React.ChangeEvent<EventTarget & HTMLInputElement>
//   ) => {
//     e.preventDefault();
//     const file = e.target.files;
//     if (!file) return null;

//     const storageRef = ref(storage, `usedmarket/${file[0].name}`);
//     const uploadTask = uploadBytes(storageRef, file[0]);

//     uploadTask.then((snapshot) => {
//       e.target.value = "";
//       getDownloadURL(snapshot.ref).then((downloadURL) => {
//         console.log("File available at", downloadURL);
//         setImageURL(downloadURL);
//         setImage(downloadURL);
//       });
//     });
//   };

//   // 나머지 컴포넌트 코드
// };

// export default UploadImage;
