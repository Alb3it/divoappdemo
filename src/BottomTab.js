import React from "react";
import { useState } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {S} from './styles';

const array = [
  {
    id: 0,
    mytegory: "Main",
    src: require("../icons/bottomBar_home.png"),
    text: "Main",
  },
  {
    id: 1,
    mytegory: "MyPage",
    src: require("../icons/bottomBar_mypage.png"),
    text: "MyPage",
  },
];

export default BottomTab = ({ navigation, category}) => {
  return (
    <S.BottomTabContainer>
      {array.map((list) => (
        <S.BottomTabButton key={list.id} onPress={() => {navigation.navigate(list.mytegory);}}>
          <S.BottomTabGradient category= {category} mytegory= {list.mytegory} colors={ category === list.mytegory ? ["#e66465", "#FFC8CD"] : ["#ffffff", "#ffffff"]}>
            <S.BottomTabImage source={array[list.id].src}/>
            <S.BottomTabText>{list.text}</S.BottomTabText>
          </S.BottomTabGradient>
        </S.BottomTabButton>
      ))}
    </S.BottomTabContainer>
  );
};