import styled from 'styled-components';

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%; 
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
`;

export const UserAvatar = styled.img`
    object-fit: cover;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    padding: 2px;
    background-color: black;
`;

export const UserInformations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 450px;
    min-width: 350px;
    height: 220px;
    margin-left: 15px;
`;

export const UserInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    h5{
        margin-right: 5px;
    }

    a{
        color: blue;
        font-weight: bold;
    }
`;

export const CounterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    text-align:center;

    p {
        margin-top: 10px;
    }

    div:not(:last-child){        
        margin-right: 10px;
    }
`;
