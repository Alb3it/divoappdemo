import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { React, Dimensions, Text, View, TouchableHighlight, TouchableOpacity, TextInput, Image } from 'react-native';
import * as Location from 'expo-location';
import styled from 'styled-components/native';
import { handleLogin } from '../exports/Api';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginScreen({navigation}) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const [ok, setOk] = useState(false);
    const [Id, setId] = useState("");
    const [Pw, setPw] = useState("");

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
        console.log(text);
        setId(text);
    }

    const WritePw = (event) => {
        const {eventCount, target, text} = event.nativeEvent;
        console.log(text);
        setPw(text);
    }

    useEffect(() => {
        firstAsk();
    }, [])

    return (
        <L.RootContainer width={WIDTH} height={HEIGHT}>
        {
          ok ?
            <L.Login>
              <L.LoginHeader source={require('../icons/DIV0.png')} />
              <L.LoginContainer>
                <L.LoginIDTitle source={require('../icons/id.png')} />
                <L.LoginIDInput value={Id} onChange={WriteId} placeholder="email address" placeholderTextColor="#4f556e" />
              </L.LoginContainer>
              <L.LoginContainer>
                <L.LoginPWTitle source={require('../icons/pw.png')} />
                <L.LoginPWInput value={Pw} onChange={WritePw} secureTextEntry={true}  placeholder="password" placeholderTextColor="#4f556e" />
              </L.LoginContainer>
              <L.LoginButtons>
                <L.LoginButton onPress={() => handleLogin(Id,Pw, setId, setPw)} underlayColor="#4f556e" activeOpacity={0.5}>
                  <L.LoginButtonText>Login</L.LoginButtonText>
                </L.LoginButton>
                <L.SignUpButton>
                  <L.SignUpButtonText>Sign Up</L.SignUpButtonText>
                </L.SignUpButton>
              </L.LoginButtons>
            </L.Login>
            :
            <L.FirstDisplay>
              <Text>FirstDisplay</Text>
            </L.FirstDisplay>
        }
        <StatusBar style="light" />
      </L.RootContainer>
    );
}


const L = {};

L.RootContainer = styled.View`
  display: flex;
  background-color: white;
  color: black;
  align-items: center;  
  justify-content: center;
  background-color: #363b4e;
`;

L.FirstDisplay = styled.View`
  background-color: blue;
  display: flex; 
`;

L.Login = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

L.LoginHeader = styled.Image`
  margin-top: 40%;
  margin-bottom: 20%;
  width: 40%;
  height: 20%;
`;

L.LoginContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 5%;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: white;
  border-bottom-width: 1px;
`;

L.LoginIDTitle = styled.Image`
    width: 7%
    height: 45%;
    margin-right: 5%;
    margin-bottom: -1%;
`;

L.LoginPWTitle = styled.Image`
    width: 5.5%
    height: 68%;
    margin-right: 5%;
`;

L.LoginIDInput = styled.TextInput`
  width: 80%;
`;

L.LoginPWInput = styled.TextInput`
  width: 80%;
  padding-left: 1.5%;
`;


L.LoginButtons = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

L.LoginButton = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: white;
  width: 30%;
  height: 23%
  border-radius: 10px;
  margin-top: 8%
  margin-right: 35%;
`;

L.LoginButtonText = styled.Text`
  color: white
  font-size: 20px;
`;

L.SignUpButton = styled.TouchableOpacity`
  margin-top: -8.5%;
  margin-right: 18%;
`;

L.SignUpButtonText = styled.Text`
color: white
font-size: 17px;
`;