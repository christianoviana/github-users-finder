import React, {useState} from 'react';
import { HeaderWrapper } from './styles';
import useGitHub from './../../hooks/github';

const Header = () => {

    const { getUser } = useGitHub();
    const [username, setUsername] = useState('');

    const findUserRepositories = () => {     
        if(username === '') return;

        getUser(username);
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            if(username === '') return;
            getUser(username);
        }
    }

    return (
        <header>
            <HeaderWrapper>
                <input 
                    type='text'
                    placeholder='Github Username'
                    onChange = {(e) => setUsername(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button type='submit' onClick={findUserRepositories}>FIND</button>
            </HeaderWrapper>
        </header>
    )
}

export default Header;
