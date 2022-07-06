import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`

    background: rgba(255, 144, 0, 1);
    height: 56px;
    border-radius: 18px;
    border: 0;
    padding: 0 16px;
    color: rgba(255, 255, 255, 1);
    width: 100%;
    font-family: 500;
    margin-top: 16px;
    transition: background-color 0.2;
    &:hover {
        background-color: ${shade(0.1, 'rgba(255, 144, 255, 1)')};
    }

`;