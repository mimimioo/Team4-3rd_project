import React, {useState} from 'react';
import styled from "styled-components";

const InputBox = (props) => {
    const inputBasicStyle = {
        border: "1px solid #aaa",
        boxShadow: "none"
    };
    const inputBasicTextStyle = {
        left: "15px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#aaa",
        fontSize: "14px"
    };
    const inputStyle = {
        border: "1px solid rgba(0, 0, 0, 0)",
        boxShadow: "0 0 4px 1px dodgerblue"
    };
    const inputTextStyle = {
        left: "15px",
        top: "-15%",
        transform: "translateY(0)",
        color: "dodgerblue",
        fontSize: "10px"
    };
    const inputBlurStyle = {
        border: "1px solid #aaa",
        boxShadow: "0 0 4px 1px #aaa"
    };
    const inputBlurTextStyle = {
        left: "15px",
        top: "-15%",
        transform: "translateY(0)",
        color: "#aaa",
        fontSize: "10px"
    };
    const [inputDynamicStyle, setInputDynamicStyle] = useState(inputBasicStyle);
    const [inputDynamicTextStyle, setInputDynamicTextStyle] = useState(inputBasicTextStyle);
    const setInputData = (event) => {
        if(event.type === 'focus' || event.type === 'change') {
            if(event.target.value != null)
                props.onDataFromInput(props.type, event.target.value);
            setInputDynamicStyle(inputStyle);
            setInputDynamicTextStyle(inputTextStyle);
        } else {
            if(event.target.value !== '') {
                setInputDynamicStyle(inputBlurStyle);
                setInputDynamicTextStyle(inputBlurTextStyle);
            } else {
                setInputDynamicStyle(inputBasicStyle);
                setInputDynamicTextStyle(inputBasicTextStyle);
            }
        }
    }

    return (
        <InputWrapper>
            <Input
                type={props.type==='pw'? "password" : "text"}
                onChange={setInputData} onFocus={setInputData}
                onBlur={setInputData}
                style={inputDynamicStyle}/>
            <InputText style={inputDynamicTextStyle}>{props.message}</InputText>
        </InputWrapper>
    );
};
export default React.memo(InputBox);

const InputWrapper = styled.div`
    position: relative;
    margin: 0 auto 20px;
    width: 75%;
    text-align: center;
    max-width: 350px;
`
const Input = styled.input`
  outline: none;
  border-radius: 7px;
  border: 1px solid #aaa;
  width: calc(100% - 22px);
  max-width: 400px;
  padding: 10px;
  transition: 0.5s ease;
`
const InputText = styled.div`
    position: absolute;
    background-color: #fff;
    border-radius: 3px;
    pointer-events: none;
    margin-left: 10px;
    transition: 0.5s ease;
    font-size: 14px;
`