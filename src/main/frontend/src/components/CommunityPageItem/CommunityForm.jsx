import React, { useState } from 'react';

const CommunityList = ({ onAddPost }) => {
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const handleAddPostClick = () => {
        // 여기에서 글 작성 로직을 추가하면 됩니다.
        console.log('새 글 정보:', newPost);

        // 글 작성 후 다른 화면으로 전환 또는 다른 작업 수행
        // 예: alert('글이 작성되었습니다.') 또는 history.push('/write') 등
        onAddPost();
    };

    return (
        <div>
        </div>
    );
};

export default CommunityList;
