import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';

import { Row } from '../../global/styles'

import { MotiView, MotiScrollView } from 'moti'

export const Container = styled(LinearGradient).attrs(props => ({
    colors: [
        props.theme.colors.gradient.start, 
        props.theme.colors.gradient.end
    ]
}))`
    flex: 1;
    justify-content: space-between;
    padding: 24px;
`;

export const ListRow = styled(Row)`
    padding: 20px 0px;
    border-bottom-color: ${({ theme }) => theme.colors.background};
    border-bottom-width: 1px;
`;

export const Icon = styled(MaterialIcons).attrs((props) => ({
    size: 24,
    color: props.theme.colors.gray[500]
}))``;

export const CircleIcon = styled.View`
    width: 45px;
    height: 45px;
    border-radius: 22.5px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollView = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(MotiView).attrs({
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
    }
})`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};
`;

export const TitleUserName = styled(Title)`
    font-weight: bold;
`;

export const Profile = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

export const PlansInfo = styled(MotiScrollView).attrs(props => ({
    horizontal: true,
    alwaysBounceHorizontal: true,
    bounces: true,
    decelerationRate: "fast",
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 200,
    pagingEnabled: true,
    contentContainerStyle: {
        paddingHorizontal: 24
    },
    from:{
        opacity: 0,
        translateY: 20,
    },
    animate: {
        opacity: 1,
        translateY: 0,
    },
    transition: {
        type: 'timing',
        duration: 500,
        delay: 200
    }
  }))`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Card = styled.View`
    width: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 16px;
    elevation: 1;
    shadow-opacity: 1;
    shadow-radius: 5px;
    shadow-color: ${(props) => props.theme.colors.gray[200]};
    shadow-offset: 0px 0px;
`;