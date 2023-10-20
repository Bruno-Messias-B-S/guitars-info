import style from "styled-components";

export const Container = style.nav`
    color: white;
    width: 100%;
    height: 70px;

    div {
        width: 100%;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        gap: 55px;
        background-color: rgba(255, 255, 255, 0.1);
    }

    .li {
        background-color: transparent;
        text-decoration: none;
        color: white;
    }
`;
