import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="styledFooter">
            <p><strong>(주)낚시의민족낚았소</strong></p>
            <Link to={"/contact"}>문의 | contact@it4.io</Link>
            <p>© Copyrights IT4 corp.</p>
        </div>
    );
};

export default Footer;