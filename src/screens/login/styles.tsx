import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { DefaultButton } from '../../components/buttons'

import { MotiView } from 'moti'

export const PreName = styled.Text`
    font-size: 20px;
    font-family: 'Belgacon-UltraLight';
    color: #ffffff;
`;

export const Name = styled.Text`
    font-size: 40px;
    font-family: 'Belgacon-Bold';
    color: #ffffff;
`;

export const Container = styled(LinearGradient).attrs(props => ({
    colors: [
        props.theme.colors.gradient.start, 
        props.theme.colors.gradient.end
    ]
}))`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 24px;
`;

export const Logo = styled(MotiView).attrs({
    from:{
        opacity: 0,
        translateY: 40,
    },
    animate: {
        opacity: 1,
        translateY: 0,
    },
    transition: {
        type: 'timing',
        duration: 1000,
        delay: 100
    }
})`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 24px;
`;

export const Buttons = styled(MotiView).attrs({
    from:{
        opacity: 0,
        translateY: 40,
    },
    animate: {
        opacity: 1,
        translateY: 0,
    },
    transition: {
        type: 'timing',
        duration: 1000,
        delay: 800
    }
})`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const LoginButton = styled(DefaultButton)`
    width: 100%;
    margin-bottom: 16px;
    padding: 12px 0px;
`;

export const RegisterButton = styled(DefaultButton)`
    width: 100%;
    padding: 12px 0px;
`;

