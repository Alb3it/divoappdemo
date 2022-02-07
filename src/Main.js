import { useEffect, useState } from 'react';
import { React, Dimensions, Text, View, TouchableHighlight, TouchableOpacity, TextInput, Image } from 'react-native';
import styled from 'styled-components/native';

export default function MainScreen({route, navigation}) {
    const token = route.params.token;
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    return (
        <M.RootContainer width={WIDTH} height={HEIGHT}>
            <M.Test>Token: {token}</M.Test>
        </M.RootContainer>

    );
}

const M = {};

M.RootContainer = styled.View`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

M.Test = styled.Text`
    color: black;
    font-size: 35px;
`;