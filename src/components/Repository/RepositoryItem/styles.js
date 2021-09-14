import styled from 'styled-components';

export const RepositoryItemWrapper = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    width: 230px;
    height: 100px;
    padding: 16px;

    h4, p{
        margin-bottom: 5px;
    }

    a{
        color: blue;
    }
`;