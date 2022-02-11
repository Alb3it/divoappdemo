import { useEffect, useState } from "react";
import { React, Dimensions, ScrollView, TouchableOpacity, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styled from "styled-components/native";
import BottomTab from "../components/BottomTab";
import CustomCarousel from "../components/MainSnap";
import HeaderTab from "../components/HeaderTab";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const M = "Montserrat";

export default function MainScreen({ navigation }) {
  return (
    <S.RootContainer width={WIDTH} height={HEIGHT}>
      <HeaderTab />
      <S.MainTopView>
        <S.MainTopHi>안녕하세요</S.MainTopHi>
        <S.MainTopUserNameContainer>
          <S.MainTopTouchableOpacity activeOpacity={0.8}>
            <S.MainTopUserName>모던돔베</S.MainTopUserName>
          </S.MainTopTouchableOpacity>
          <S.MainTopSir>님</S.MainTopSir>
        </S.MainTopUserNameContainer>
      </S.MainTopView>
      <CustomCarousel/>
      <BottomTab navigation={navigation} category="Main" />
      <StatusBar style="dark" />
    </S.RootContainer>
  );
}

const S = {};

S.RootContainer = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  align-items: center;
`;

S.MainScrollContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: blue;
  align-items: center;
  height: 180px;
`;

S.MainTopView = styled.View`
  display: flex;
  justify-content: center;
  height: 80px;
  margin-left: 50px;
`;

S.MainTopTouchableOpacity = styled.TouchableOpacity`
`;

S.MainTopHi = styled.Text`
  font-size: 13px;
  margin-left: 3px;
  font-family: "${M}";
`;

S.MainTopUserName = styled.Text`
  font-size: 23px;
  font-family: "${M}";
`;

S.MainTopSir = styled.Text`
  font-size: 13px;
  font-family: "${M}";
  margin-bottom: 2px;
`;

S.MainTopUserNameContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: ${WIDTH}px;
  align-items: flex-end;
`;
