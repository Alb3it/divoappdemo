import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Dimensions } from "react-native";
import styled from "styled-components/native";
import Carousel from "react-native-snap-carousel";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return year + "-" + month + "-" + date;
};

const exampleItems = [
  {
    title: "Brand 검색량",
    number: "1890",
    increment: "+2.5%",
  },
  {
    title: "View, Place 순위",
    number: "1890",
    increment: "+2.5%",
  },
  {
    title: "Brand 컨텐츠 발행량",
    number: "23",
    increment: "-1.1%",
  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => (
      <S.MainSnapTextContainer>
        <S.MainSnapTextBox>
          <S.MainSnapText sort="date">{getCurrentDate()}</S.MainSnapText>
        </S.MainSnapTextBox>
        <S.MainSnapTextBox>
          <S.MainSnapText sort="title">{item.title}</S.MainSnapText>
        </S.MainSnapTextBox>
        <S.MainSnapTextBox>
          <S.MainSnapText sort="number">{item.number}</S.MainSnapText>
        </S.MainSnapTextBox>
        <S.MainSnapTextBox>
          <S.MainSnapText sort="increment" isIncreased={item.increment.split("")[0] === "+" ? true : false}>
            {item.increment}
          </S.MainSnapText>
        </S.MainSnapTextBox>
      </S.MainSnapTextContainer>
    ),
    []
  );

  return (
    <S.CarouselView>
      <Carousel
        layout="default"
        loop={true}
        ref={ref}
        data={carouselItems}
        sliderWidth={DEVICE_WIDTH}
        itemWidth={DEVICE_WIDTH - 50}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </S.CarouselView>
  );
};

export default CustomCarousel;

const S = {};

S.CarouselView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

S.MainSnapTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  background-color: #fbfbfb;
  padding-left: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  elevation: 2;

`;

S.MainSnapTextBox = styled.View`
  display: flex;
  flex-direction: row;
`;

S.MainSnapText = styled.Text`
  ${(props) => {
    if (props.sort === "date") {
      return "font-size:15px;";
    } else if (props.sort === "title") {
      return "font-size:15px;";
    } else if (props.sort === "number") {
      return "font-size:30px;";
    } else {
      return "font-size:15px;";
    }
  }}
  font-family: "Montserrat";
  ${(props) => {
    if (props.sort === "increment") return props.isIncreased ? "color: red;" : "color: blue;";
  }};
`;
