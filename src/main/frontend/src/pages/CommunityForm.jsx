import React, { useState }  from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import PostList from '../components/CommunityPageItem/CommunityList';
import Nav from "../components/Nav/Nav";
import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: white;
  padding: 20px; /* 내용의 패딩을 조절하세요 */
  margin: 50px; /* 내용의 여백을 조절하세요 */
`;




const CommunityForm = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: '더미1', content: '더미 내용1' },
        { id: 2, title: '더미2', content: '더미 내용2' },
    ]);

    const [newPost, setNewPost] = useState({ title: '', content: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({
            ...newPost,
            [name]: value,
        });
    };


    return (
        <div>
            <BackgroundVideo />
            <Nav/>
            <StyledContentWrapper>
            <h1>Community</h1>
                <PostList posts={posts} />
                </StyledContentWrapper>
        </div>
    );
};

export default CommunityForm;