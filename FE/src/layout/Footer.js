import React from "react";
import styled from 'styled-components'
import logo from "../svgs/logo.svg"
const Footer = () => {
    return (
        <WrapperComponent>
            Footer
        </WrapperComponent>
    )
}
export default Footer
const WrapperComponent = styled.div`
    position: absolute;
    bottom: 0;
    height: 100px;
    text-align: center;
    background-color: gray;
    width: 100%;
`