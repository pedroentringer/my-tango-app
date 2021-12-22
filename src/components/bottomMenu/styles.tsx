import styled from "styled-components/native";
import { SafeAreaView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 24px;
    elevation: 1;
    shadow-opacity: 1;
    shadow-radius: 5px;
    shadow-color: ${(props) => props.theme.colors.gray[200]};
    shadow-offset: 0px 0px;

    flex-direction: row;
    justify-content: space-between;
`;

export const SafeArea = styled(SafeAreaView)`
    background-color: ${(props) => props.theme.colors.secondary};
`;