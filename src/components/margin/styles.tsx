import styled from "styled-components/native";

interface IProps {
    top?: number
    right?: number
    bottom?: number
    left?: number
}

export const DynamicMargin = styled.View<IProps>`
    ${({ top }) => top && `margin-top: ${top}px`};
    ${({ right }) => right && `margin-right: ${right}px`};
    ${({ bottom }) => bottom && `margin-bottom: ${bottom}px`};
    ${({ left }) => left && `margin-left: ${left}px`};
`;