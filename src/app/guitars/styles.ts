import style from "styled-components";

export const Container = style.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba( 0, 0, 0, 0.7);

    .container {
        display: flex;
        justify-content:center;
        align-items: center;
        list-style-type: none;
        background-color: rgba( 0, 0, 0, 0.7);
        gap: 20px;
        border-bottom: 1px solid white;
        height:70px;
        width:600px;
        clip-path: polygon(0 0, 100% 0, 90% 90%, 10% 90%);
    }

    button {
        background-color: transparent;
        border: none;
        padding: 7px 12px;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        font-size: 15px;
        width:150px;
        transition: all ease-in-out 0.1s;
    }

    button:hover {
        font-size: 17px;
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
        
        .container-name-desc {
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 100%;
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
                background-color: white;
                border-radius: 5px;
            }

            .guitar-desc {
                font-size: 17px;
                line-height: 27px;
            }
        }

        .container-img {
            transform: rotate(270deg);
            transition: all ease-in-out 0.5;

            img {
                width: 500px;
            }
        }
    }
`;
