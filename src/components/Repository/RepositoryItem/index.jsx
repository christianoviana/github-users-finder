import React from 'react';
import { RepositoryItemWrapper } from './styles';

const RepositoryItem = ({name, fullName, link, description}) => {  
    return (
        <RepositoryItemWrapper>
            <h4>{name}</h4>
            <p>Full Name:</p>
            <a target='_blank' rel="noreferrer" href={link}>{fullName}</a>
            <p>{description}</p>
        </RepositoryItemWrapper>
    )
}

export default RepositoryItem;
