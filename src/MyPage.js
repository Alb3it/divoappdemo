import { useEffect, useState } from "react";
import { React, Dimensions, View } from "react-native";
import { S } from "./styles";
import styled from "styled-components/native";
import BottomTab from "../components/BottomTab";

export default function MyPageScreen({ navigation }) {
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  return (
    <S.RootContainer width={WIDTH} height={HEIGHT}>
      <M.Test>My Page</M.Test>
      <View><S.LoginButton onPress={() => navigation.navigate("EditProfile")} activeOpacity={0.5}>
        <S.LoginButtonText>Edit Profile</S.LoginButtonText>
      </S.LoginButton></View>
      <BottomTab navigation={navigation} category="MyPage" />
    </S.RootContainer>
  );
}

const M = {};

M.Test = styled.Text`
  color: black;
  font-size: 35px;
`;
