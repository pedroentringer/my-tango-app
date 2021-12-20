import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const RowColumn = styled.View`
    flex-direction: column;
`;