import React, {useState} from "react";
import styled from 'styled-components'
import logo from "../svgs/logo.svg"
import notify from "../svgs/notify.svg"
import search from "../svgs/search.svg"
import {colors} from "../styles/constants"
import avatar from "../images/avatar.png"
import {Button} from "../components/Button"
const Header = () => {
    const [isLogin, setLogin] = useState(true);
    return (
        <WrapperComponent>
            <Logo src={logo}/>
            <WrapperSearch>
                <SearchBar />
                <SearchIcon src={search} placeholder="Search..."/>
            </WrapperSearch>
            <RightSize>
                {
                    !isLogin ? <Button onClick={()=>setLogin(true)}>Login</Button>
                    : <Logged>
                        <Notify>
                            <IconNotify src={notify}/>
                            <Counter>99+</Counter>
                        </Notify>
                        <Author>
                            <Avatar src={avatar}/>
                            <Name>Đạt Fix</Name>
                        </Author>
                    </Logged>
                }
            </RightSize>
        </WrapperComponent>
    )
}
export default Header
const Logged = styled.div`
    display: flex;
    flex-direction: row;
`
const Notify = styled.div`
    cursor: pointer;
    position: relative;
    margin-right: 30px;
    margin-left: 20px;
    display: flex;
    align-items: center;
`
const IconNotify = styled.img`
    width: 40px;
    height: 40px;
`
const Counter = styled.div`
    position: absolute;
    left: 22px;
    top: -5px;
    font-size: 13px;
    color: white;
    background-color: red;
    border-radius: 30px;
    padding: 2px 5px 2px 5px;
    font-weight: bold;
`
const RightSize = styled.div``
const Author = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
`
const Avatar = styled.img`
    margin-right: 15px;
`
const Name = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
`
const WrapperComponent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 100px;
    justify-content: space-between;
    height: 90px;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid ${colors.white2};
`
const WrapperSearch = styled.div`
    max-width: 500px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const SearchIcon = styled.img`
    width: 25px;
    height: 25px;
    position: absolute;
    right: 10px;
`
const SearchBar = styled.input`
    outline: none;
    padding: 0 45px 0 10px;
    font-size: 20px;
    max-width: 500px;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid ${colors.teriary};
    border-radius: 5px;
`
const Logo = styled.img`
    width: 100px;
    height: 50px;
    
    cursor: pointer;
`