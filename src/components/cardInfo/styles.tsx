import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';

import {Row} from '../../global/styles'

interface IPropsGradient {
    gradient?: boolean
}

export const RowStyled = styled(Row)`
    align-items: flex-end;
`;

export const Title = styled.Text<IPropsGradient>`
    color: ${(props) => props.gradient ? props.theme.colors.gradient.text : props.theme.colors.gray[900]}
    opacity: 0.7;
`;

export const Value = styled.Text<IPropsGradient>`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.gradient ? props.theme.colors.gradient.text : props.theme.colors.gray[900]}
`;

export const ValueComplement = styled(Value)`
    font-size: 14px;
    margin-left: 5px;
`;

export const Button = styled.TouchableOpacity.attrs((props) => ({
    activeOpacity: 0.7
}))`
    margin-top: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs((props) => ({
    size: 24,
    color: props.theme.colors.gray[900]
}))``;

export const IconGradient = styled(MaterialIcons).attrs((props) => ({
    size: 24,
    color: props.theme.colors.gradient.text
}))``;

export const Card = styled.View`
    width: 150px;
    height: 260px;
    margin-right: 20px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 16px;
    justify-content: space-between;
    elevation: 1;
    shadow-opacity: 1;
    shadow-radius: 5px;
    shadow-color: ${(props) => props.theme.colors.gray[200]};
    shadow-offset: 0px 0px;
`;

export const Gradient = styled(LinearGradient).attrs(props => ({
    colors: [
        props.theme.colors.gradient.start, 
        props.theme.colors.gradient.end
    ]
}))`
    width: 150px;
    height: 260px;
    border-radius: 16px;
    margin-right: 20px;
    padding: 16px;
    justify-content: space-between;
`;

