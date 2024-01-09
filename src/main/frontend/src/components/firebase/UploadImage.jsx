import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import storage from "./firebaseconfig";

// 프로필 이미지 업로드 함수
export const uploadProfileImage = (file, userEmail) => {
    const storageRef = ref(storage, `propfileImg/${userEmail}`);
    const uploadTask = uploadBytes(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask
            .then((snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('File available at', url);
                resolve(url);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
};
