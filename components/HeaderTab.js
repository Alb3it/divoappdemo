import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faComment, faBell} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Dimensions, View, Text, Image} from 'react-native';
import styled from "styled-components";

const DEVICE_WIDTH = Dimensions.get("window").width;

export default HeaderTab = () => {
    return (
        <S.HeaderContainer>
            <S.HeaderContainerLeft>
            <S.HeaderIcon width={20} height={20} icon={faComment}/>
            <S.HeaderText>
                Divo
            </S.HeaderText>
            </S.HeaderContainerLeft>
            <S.HeaderContainerRight>
                <S.HeaderBell icon={faBell} width={20} height={20}/>
            </S.HeaderContainerRight>
        </S.HeaderContainer>
    );
}

const S = {};

S.HeaderContainer = styled.View`
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${DEVICE_WIDTH}px;
    background-color: white;
    margin-top: 5px;
`;

S.HeaderContainerLeft = styled.View`
    display: flex;
    flex-direction: row;
    margin-left: 15px;
`;

S.HeaderContainerRight = styled.View`
    margin-right: 15px;
`;

S.HeaderBell = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

S.HeaderText = styled.Text`
    font-size: 20px;
    margin-left: 2px;
    font-family: "Montserrat";
    letter-spacing: -0.8px;
`;

S.HeaderIcon = styled(FontAwesomeIcon)`
    margin-left: 10px;
    margin-top: 5px;
`;