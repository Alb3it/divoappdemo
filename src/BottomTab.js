import React from "react";
import { useState } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { vw } from "react-native-expo-viewport-units";

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
    <View
      style={{
        width: vw(100),
        backgroundColor: "#FFFFFF",
        borderTopColor: "#d2d2d2",
        borderTopWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        shadowColor: "#d2d2d2",
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowOpacity: 0.55,
        shadowRadius: 1,
      }}
    >
      {array.map((list) => (
        <TouchableOpacity
          key={list.id}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          onPress={() => {
            navigation.navigate(list.mytegory);
          }}
        >
          <LinearGradient
            style={
              category === list.mytegory
                ? {
                    transform: [{ scale: 1.1 }, { translateY: -5 }],
                    padding: vw(3),
                    borderRadius: 15,
                  }
                : {}
            }
            colors={
              category === list.mytegory
                ? ["#e66465", "#FFC8CD"]
                : ["#ffffff", "#ffffff"]
            }
          >
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={array[list.id].src}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
                color: "#828282",
              }}
            >
              {list.text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};