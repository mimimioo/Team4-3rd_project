import React, { useState }  from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import CommunityToastEditor from '../components/CommunityPageItem/CommunityToastEditor'
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





    return (
        <div>
            <BackgroundVideo />
            <Nav/>
            <StyledContentWrapper>
            <h1>글작성</h1>
                <CommunityToastEditor />
                <button>작성</button>
                </StyledContentWrapper>
        </div>
    );
};

export default CommunityForm;