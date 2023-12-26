import React from 'react';
import {Link} from "react-router-dom";

const Test = () => {
    return (
        <div>
            라우터 테스트 성공
            <Link to={"/"}>메인으로 가기</Link>
        </div>
    );
};

export default Test;