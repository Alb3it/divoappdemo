import styled from '../node_modules/styled';

export const S = {};
const PLACEHOLDER_COLOR="#4f556e"

S.RootContainer = styled.View`
  display: flex;
  background-color: white;
  color: black;
  align-items: center;  
  justify-content: center;
  background-color: #363b4e;
`;

S.FirstDisplay = styled.View`
  background-color: blue;
  display: flex; 
`;

S.Login = styled.View`
  display: flex;
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
`;

S.LoginPWInput = styled.TextInput.attrs({
  placeholderTextColor: PLACEHOLDER_COLOR,
})`
  width: 80%;
  padding-left: 1.5%;
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