import React from "react";
import styled from 'styled-components'
import {colors} from "../styles/constants"
export const Button = ({children, ...props}) => {
    return (
        <WrapperComponent {...props}>
            <Children>{children}</Children>
        </WrapperComponent>
    )
}
const WrapperComponent = styled.button`
    min-width: 150px;
    cursor: pointer;
    height: 50px;
    font-size: 20px;
    width: 100%;
    padding: 0 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: ${colors.white};
    color: ${colors.dark};
    border: 1px solid ${colors.teriary};
    box-sizing: border-box;
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        background-color: ${colors.white1};
    }
    &:active {
        transition: 0.2s;
        background-color: ${colors.dark2};
        color: ${colors.white};
    }
`
const Children = styled.div`
    width: 100%;
`