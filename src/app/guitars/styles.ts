import style from "styled-components";

export const Container = style.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container {
        display: flex;
        justify-content:center;
        align-items: center;
        list-style-type: none;
        background-color: transparent;
        gap: 100px;
        border-bottom: 1px solid white;
        height:70px;
        width:600px;
    }

    button {
        background-color: transparent;
        border: none;
        border: 1px solid white;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
`;

export const GuitarsContainer = style.div`
    width: 100%;
    height: 100vh;

    .container-all {
        margin: auto;
        width: 70%;
        height: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
        
        .container-name-desc {
            height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 400px;
            gap: 20px;
            margin-bottom: 100px;

            .guitar-name {
                font-size: 40px;
            }

            .guitar-desc {
                font-size: 17px;
            }
        }

        .container-img {
            transform: rotate(270deg);
            transition: all ease-in-out 0.5;
        }
    }
`;
