import styled from "styled-components/native";

import { MaterialIcons } from '@expo/vector-icons';

export const IconPrimary = styled(MaterialIcons).attrs((props) => ({
    size: 24,
    color: props.theme.colors.primary
}))``;

export const Icon = styled(MaterialIcons).attrs((props) => ({
    size: 24,
    color: props.theme.colors.gray[500]
}))``;

export const Text = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[500]};
    font-weight: bold;
`;

export const TextPrimary = styled(Text)`
    color: ${({ theme }) => theme.colors.primary};
`;

export const TextBlack = styled(Text)`
    color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Default = styled.TouchableOpacity.attrs((props) => ({
    activeOpacity: 0.7
}))`
    background-color: ${({ theme }) => theme.colors.gray[200]};
    padding: 7px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    align-self: baseline;
    flex-direction: row;
`;

export const Primary = styled(Default)`
    background-color: ${({ theme }) => theme.colors.primary}1c;
`;

export const Transparent = styled.TouchableOpacity.attrs((props) => ({
    activeOpacity: 0.7
}))`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: baseline;
`;