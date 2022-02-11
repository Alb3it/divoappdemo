import { useEffect, useState } from 'react';
import { React, Dimensions } from 'react-native';
import { S } from './styles';
import styled from 'styled-components/native';
import BottomTab from '../components/BottomTab';

export default function EditProfileScreen({navigation}) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    return (
        <S.RootContainer width={WIDTH} height={HEIGHT}>
            <M.Test>Edit your profile</M.Test>
                <S.LoginButton onPress={() => navigation.navigate('MyPage')} activeOpacity={0.5}>
                  <S.LoginButtonText>Go Back</S.LoginButtonText>
                </S.LoginButton>
            <BottomTab navigation={navigation} category="MyPage"/>
        </S.RootContainer>
    );
}

const M = {};

M.Test = styled.Text`
    color: black;
    font-size: 35px;
`;