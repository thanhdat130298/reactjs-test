import React from "react";
import styled from 'styled-components'
import Header from "./Header"
import Footer from "./Footer"
const Layout = ({children}) => {
    return (
        <WrapperComponent>
            <Header/>
            {children}
            <Footer/>
        </WrapperComponent>
    )
}
export default Layout
const WrapperComponent = styled.div``