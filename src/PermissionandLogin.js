import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { React, Dimensions, Text, View, TouchableHighlight, TouchableOpacity, TextInput, Image } from 'react-native';
import * as Location from 'expo-location';
import {S} from './styles';
import { handleLogin } from '../exports/Api';
import {NavigationContainer} from '@react-navigation/native';


export default function LoginScreen({navigation}) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const [ok, setOk] = useState(false);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const firstAsk = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (granted) {
            setOk(true);
        } else {
            return;
        }
    }

    const WriteId = (event) => {
        const {eventCount, target, text} = event.nativeEvent;
        setId(text);
    }

    const WritePw = (event) => {
        const {eventCount, target, text} = event.nativeEvent;
        setPw(text);
    }

    useEffect(() => {
        firstAsk();
    }, [])

    return (
        <S.RootContainer width={WIDTH} height={HEIGHT}>
        {
          ok ?
            <S.Login>
              <S.LoginHeader source={require('../icons/DIV0.png')} />
              <S.LoginContainer>
                <S.LoginIDTitle source={require('../icons/id.png')} />
                <S.LoginIDInput value={id} onChange={WriteId} placeholder="email address" />
              </S.LoginContainer>
              <S.LoginContainer>
                <S.LoginPWTitle source={require('../icons/pw.png')} />
                <S.LoginPWInput value={pw} onChange={WritePw} secureTextEntry={true}  placeholder="password" />
              </S.LoginContainer>
              <S.LoginButtons>
                <S.LoginButton onPress={() => handleLogin(Id,Pw, setId, setPw, navigation)} activeOpacity={0.5}>
                  <S.LoginButtonText>Login</S.LoginButtonText>
                </S.LoginButton>
                <S.SignUpButton>
                  <S.SignUpButtonText>Sign Up</S.SignUpButtonText>
                </S.SignUpButton>
              </S.LoginButtons>
            </S.Login>
            :
            <S.FirstDisplay>
              <Text>FirstDisplay</Text>
            </S.FirstDisplay>
        }
        <StatusBar style="light" />
      </S.RootContainer>
    );
}