import { useEffect, useState } from 'react';
import { React, Dimensions } from 'react-native';
import {S} from './styles';
import styled from 'styled-components/native';
import BottomTab from './BottomTab';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function MainScreen({ navigation }) {
    return (
        <S.RootContainer width={WIDTH} height={HEIGHT}>
            <M.Test>MainScreen</M.Test>
            <BottomTab navigation={navigation} category="Main" />
        </S.RootContainer>
    );
}

const M = {};

M.Test = styled.Text`
    color: black;
    font-size: 35px;
`;