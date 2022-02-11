import React from "react";
import { useState } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {S} from '../src/styles';

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

const move = (c, n) => {
  if(c==='Main') {
    n.navigate('MyPageNavigator');
  } else {
    n.navigate('Main');
  }
}

export default BottomTab = ({ navigation, category}) => {
  return (
    <S.BottomTabContainer>
      {array.map((list) => (
        <S.BottomTabButton key={list.id} onPress={() => {
          move(category, navigation);
        }}>
          <S.BottomTabGradient category= {category} mytegory= {list.mytegory} colors={ category === list.mytegory ? 
            ["#8E2DE2", "#4A00E0"] : ["#ffffff", "#ffffff"]}>
            <S.BottomTabImage source={array[list.id].src}/>
            <S.BottomTabText>{list.text}</S.BottomTabText>
          </S.BottomTabGradient>
        </S.BottomTabButton>
      ))}
    </S.BottomTabContainer>
  );
};