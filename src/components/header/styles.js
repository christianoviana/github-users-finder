import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;

    button{
        width: 120px;
        padding: 8px;
        margin-left: 5px;

        border: 1px solid rgba(25, 118, 210, 0.5);
        border-radius: 4px;

        font-weight: bold;
        background-color: white;
        color: #1976d2;

        cursor: pointer;

        &:hover{
            box-shadow: 0px 0px 2px rgb(25, 118, 210);
            border: 1px solid rgba(25, 118, 210, 0.9);
        }

        &:focus{
            outline: none;
        }
    }

    input{
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 8px;
        font-size: 14px;
        text-align: center;

        &:focus{
            outline: none;
        }
    }
`;