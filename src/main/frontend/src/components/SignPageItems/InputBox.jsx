import React, {useState} from 'react';
import styled from "styled-components";

const InputBox = (props) => {
    const inputBasicStyle = {
        border: "1px solid #aaa",
        boxShadow: "none"
    };
    const inputBasicTextStyle = {
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#aaa",
        fontSize: "14px"
    };
    const inputStyle = {
        border: "1px solid rgba(0, 0, 0, 0)",
        boxShadow: "0 0 3px 2px dodgerblue"
    };
    const inputTextStyle = {
        left: "5px",
        top: "-15%",
        transform: "translateY(0)",
        color: "dodgerblue",
        fontSize: "10px"
    };
    const inputBlurStyle = {
        border: "1px solid #aaa",
        boxShadow: "0 0 3px 2px #aaa"
    };
    const inputBlurTextStyle = {
        left: "5px",
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
            <Input onChange={setInputData} onFocus={setInputData} onBlur={setInputData} style={inputDynamicStyle}/>
            <InputText style={inputDynamicTextStyle}>{props.message}</InputText>
        </InputWrapper>
    );
};
export default InputBox;

const InputWrapper = styled.div`
    position: relative;
    margin: 0 auto 20px;
    width: 70%;
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
    color: #aaa;
    position: absolute;
    background-color: #fff;
    border-radius: 3px;
    padding: 1px;
    z-index: 10;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    margin-left: 10px;
    transition: 0.5s ease;
    font-size: 14px;
`