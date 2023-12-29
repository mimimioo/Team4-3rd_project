import React from 'react';
import styled from 'styled-components';


const StyledCommunityList = styled.div`
  h2 {
    margin-bottom: 10px; /* h2 요소의 아래 여백 조절 */
  }

  ul {
    list-style: none;
    padding: 0; /* 기본 패딩 제거 */
    margin: 0; /* 기본 마진 제거 */
  }

  li {
    margin-bottom: 20px;
    display: block;
    margin-right: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px; /* 테두리를 둥글게 만듦 */
    background-color: #f8f8f8; /* 배경색 설정 */
  }
  
  strong {
    display: block; 
  }

  p {
    text-align: center; 
  }
`;
const CommunityList = ({ posts }) => {
  return (
      <StyledCommunityList>
    <div>
      <h2>글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
      </StyledCommunityList>
  );
};

export default CommunityList;