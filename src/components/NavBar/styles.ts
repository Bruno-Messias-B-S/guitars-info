import style from "styled-components";

export const Container = style.nav`
    width: 100vw;
    height: 70px;
    background-color: black;

    div {
        width: 100%;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        gap: 40px;
        background-color: rgba(200, 200, 200, 0.1);
    }

    .li {
        background-color: transparent;
        text-decoration: none;
        color: white;
        padding: 7px 20px;
        border-radius: 5px;
        transition: all ease-in-out .3s;
        font-size: 16px;
    }

    .li: hover {
        border-bottom: 1px solid blue;
    }
`;
