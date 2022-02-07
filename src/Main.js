import { useEffect, useState } from 'react';
import { React, Dimensions, Text, View, TouchableHighlight, TouchableOpacity, TextInput, Image } from 'react-native';
import styled from 'styled-components/native';

export default function MainScreen({route, navigation}) {
    const Id = route.params.ID;
    const Pw = route.params.PW;
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    return (
        <M.RootContainer width={WIDTH} height={HEIGHT}>
            <M.Test>ID: {Id}</M.Test>
            <M.Test>PW: {Pw}</M.Test>
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