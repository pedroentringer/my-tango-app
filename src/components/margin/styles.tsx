import styled from "styled-components/native";

interface IProps {
    top?: number
    right?: number
    bottom?: number
    left?: number
}

export const DynamicMargin = styled.View<IProps>`
    ${({ top }) => top && `margin-top: ${top}`};
    ${({ right }) => right && `margin-right: ${right}`};
    ${({ bottom }) => bottom && `margin-bottom: ${bottom}`};
    ${({ left }) => left && `margin-left: ${left}`};
`;