import axios from "axios";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

const backend = 'https://www.divocorp.kr/api/';

export const logoutUrl = backend + 'auth/getauth/logout/';
export const loginUrl = backend + 'auth/getauth/login/';
export const ysUrl = backend + 'auth/cardsales/';
export const corpListUrl = backend + 'auth/corplist/';
export const corpInfoUrl = backend + 'auth/corpinfo/';
export const signupUrl = backend + 'auth/getauth/register/';
export const salesUrl = backend + 'auth/sales/info/';
export const reviewUrl = backend + 'reviewmanage/reviewlist/';
export const toggleUrl = backend + 'reviewmanage/togglecheck/';
export const toggleAllUrl = backend + 'reviewmanage/togglecheckall/';
export const corpAuthUrl = backend + 'auth/corpauth/';
export const rankUrl = backend + 'contentanalysis/';

export const searchChartUrl = backend + 'keywordtool/searchchart/';
export const searchTableUrl = backend + 'keywordtool/table/';
export const barRatioUrl = backend + 'keywordtool/barratio/';
export const pieRatioUrl = backend + 'keywordtool/pieratio/';
export const compKeyListUrl = backend + 'keywordtool/compkeylist/';
export const compKeyChangeUrl = backend + 'keywordtool/compkeychange/';
export const compKeyGraphUrl = backend + 'keywordtool/compkeygraph/';

const recieve = async(res) => {
    try {
        return {
            await AsyncStorage.setItem('token', res.data.key);
        Navigation.navigate('Main', {token: res.data.key};
        }
        
    } catch(e) {
        console.log("erorrr")
    }
}

export const handleLogin = async (id, pw, setId, setPw) => {
    const user = {
        email: id,
        password: pw
    }
    console.log(user);

    axios.post(loginUrl, user).then(
        (res)=> recieve(res)
    ).catch(e => {
        
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        setId('');
        setPw('');
    })
}