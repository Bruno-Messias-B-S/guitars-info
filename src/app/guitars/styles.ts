import style from "styled-components";

export const Container = style.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        justify-content:center;
        align-items: center;
        list-style-type: none;
        background-color: transparent;
        gap: 100px;
        border-bottom: 1px solid white;
        height:70px;
        width:600px;
        margin-top: 20px;
    }

    button {
        background-color: transparent;
    }
`;

export const GuitarsContainer = style.div`

`;
