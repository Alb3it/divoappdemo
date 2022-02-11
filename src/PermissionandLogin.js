import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Keyboard, React, Text, View, TouchableHighlight, TouchableOpacity, TextInput, Image } from 'react-native';
import * as Location from 'expo-location';
import {S} from './styles';
import { handleLogin } from '../exports/Api';


export default function LoginScreen({navigation}) {
    const [ok, setOk] = useState(false);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [kh, setKh] = useState(0);

    const firstAsk = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (granted) {
            setOk(true);
        } else {
            return;
        }
    }

    const writeId = (event) => {
        const {eventCount, target, text} = event.nativeEvent;
        setId(text);
    }

    const writePw = (event) => {
        const {eventCount, target, text} = event.nativeEvent;
        setPw(text);
    }

    useEffect(() => {
        firstAsk();
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }, [])

    _keyboardDidShow = (e) => {
      setKh(e.endCoordinates.height);
    };
  
    _keyboardDidHide = () => {
      setKh(0);
    };

    return (
        <S.RootLoginContainer>
        {
          ok ?
            <S.Login keyboardHeight={kh}>
              <S.LoginHeader source={require('../icons/DIV0.png')} />
              <S.LoginContainer>
                <S.LoginIDTitle source={require('../icons/id.png')} />
                <S.LoginIDInput value={id} onChange={writeId} placeholder="email address" />
              </S.LoginContainer>
              <S.LoginContainer>
                <S.LoginPWTitle source={require('../icons/pw.png')} />
                <S.LoginPWInput value={pw} onChange={writePw} secureTextEntry={true}  placeholder="password" />
              </S.LoginContainer>
              <S.LoginButtons>
                <S.LoginButton onPress={() => handleLogin(id,pw, setId, setPw, navigation)} activeOpacity={0.5}>
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
      </S.RootLoginContainer>
    );
}