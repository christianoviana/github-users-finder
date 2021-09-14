import React from 'react';
import { MessageWrapper , Text} from './styles';

const Message = ({children}) =>  {
    return (
        <>
            <MessageWrapper>
                <Text>{children}</Text>
            </MessageWrapper>
        </>
    )
}

export default Message
