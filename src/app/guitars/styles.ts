import style from "styled-components";

export const Container = style.div`
    width: 100vw;
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
        gap: 20px;
        height:70px;
        width:600px;
        border-top: 3px solid black;
    }

    .line-nav {
        width: 500px;
        height: 2px;
        border-radius: 5px;
        background-color: black;
    }

    button {
        background-color: transparent;
        border: none;
        padding: 7px 12px;
        border-radius: 5px;
        cursor: pointer;
        color: black;
        font-size: 16px;
        width:150px;
        transition: all ease-in-out 0.1s;
    }

    button:hover {
        font-size: 18px;
        color: blue;
    }
`;

export const GuitarsContainer = style.div`
    width: 100vw;
    height: 100vh;

    .container-all {
        margin: auto;
        width: 75%;
        height: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 60px;
        
        .container-name-desc {
            margin-top: 80px;
            height: 500px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 50%;
            gap: 20px;
            margin-bottom: 100px;

            .guitar-name {
                font-size: 40px;
            }

            .line {
                width: 100px;
                height: 2px;
                margin-top:-15px;
                margin-left: 15px;
                background-color: black;
                border-radius: 5px;
            }

            .guitar-desc {
                font-size: 17px;
                line-height: 27px;
                min-height:250px;
            }
        }

        .container-img {
            transition: all ease-in-out 0.5;

            img {
                width: 300px;
            }
        }
    }
`;
