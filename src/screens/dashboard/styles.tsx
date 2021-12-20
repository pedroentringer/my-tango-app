import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollView = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
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

export const PlansInfo = styled.ScrollView.attrs(props => ({
    horizontal: true,
    alwaysBounceHorizontal: true,
    bounces: true,
    decelerationRate: "fast",
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 200,
    pagingEnabled: true,
    contentContainerStyle: {
        paddingHorizontal: 24
      }
  }))`
  padding-top: 10px;
  padding-bottom: 10px;
`;


export const Default = styled.View``;