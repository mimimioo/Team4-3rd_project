import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div>
            메인입니다.
            <Link to={"/test"}>테스트</Link>
        </div>
    );
};

export default Main;