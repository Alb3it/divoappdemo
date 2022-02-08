import styled from '../node_modules/styled-components'
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from 'react-native';

export const S = {};
const LOGO_COLOR = "#363b4e"
const PLACEHOLDER_COLOR = "#4f556e"
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

S.RootLoginContainer = styled(SafeAreaView)`
  display: flex;
  width: ${DEVICE_WIDTH}px;
  height: ${DEVICE_HEIGHT}px;
  background-color: ${LOGO_COLOR};
  color: black;
  align-items: center;  
  justify-content: center;
`;

S.RootContainer = styled(SafeAreaView)`
display: flex;
flex-direction: column;
width: ${DEVICE_WIDTH}px;
height: ${DEVICE_HEIGHT}px;
background-color: white;
color: black;
align-items: center;  
justify-content: space-between;
`;

S.FirstDisplay = styled(SafeAreaView)`
  background-color: blue;
  display: flex; 
`;

S.Login = styled.View`
  display: flex;
  margin-bottom: ${(props) => props.keyboardHeight}px;
  width: 100%;
  height: 100%;
  align-items: center;
`;

S.LoginHeader = styled.Image`
  margin-top: 40%;
  margin-bottom: 20%;
  width: 40%;
  height: 20%;
`;

S.LoginContainer = styled.View`
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

S.LoginIDTitle = styled.Image`
    width: 7%
    height: 45%;
    margin-right: 5%;
    margin-bottom: -1%;
`;

S.LoginPWTitle = styled.Image`
    width: 5.5%
    height: 68%;
    margin-right: 5%;
`;

S.LoginIDInput = styled.TextInput.attrs({
  placeholderTextColor: PLACEHOLDER_COLOR,
})`
  width: 80%;
  color: white;
`;

S.LoginPWInput = styled.TextInput.attrs({
  placeholderTextColor: PLACEHOLDER_COLOR,
})`
  width: 80%;
  padding-left: 1.5%;
  color: white;
`;


S.LoginButtons = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

S.LoginButton = styled.TouchableHighlight`
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

S.LoginButtonText = styled.Text`
  color: white
  font-size: 20px;
`;

S.SignUpButton = styled.TouchableOpacity`
  margin-top: -8.5%;
  margin-right: 18%;
`;

S.SignUpButtonText = styled.Text`
color: white
font-size: 17px;
`;