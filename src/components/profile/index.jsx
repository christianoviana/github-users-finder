import React from 'react';
import { UserWrapper, UserAvatar, UserInformations, UserInformation, CounterWrapper } from './styles';
import useGitHub from './../../hooks/github';

const Profile = () => {
    const { githubData } = useGitHub();
    const { user } = githubData;

    return (
        <UserWrapper>
            <UserAvatar src={user.avatar_url} />
            <UserInformations>
                <h2>{user.name}</h2>

                <UserInformation>
                    <h5>Username: </h5>
                    <a href={user.html_url} target='_blank' rel="noreferrer">{user.login}</a>                
                </UserInformation>

                <UserInformation>
                    <h5>Company:</h5>
                    <p>{user.company ? user.company : '(empty)'}</p>              
                </UserInformation>           

                <UserInformation>
                   <h5>Location: </h5>
                   <p>{user.location ? user.location : '(empty)'}</p>              
                </UserInformation>   

                <UserInformation>
                   <h5>Blog: </h5>
                   {user.blog ? (
                        <a href={user.blog} target='_blank' rel="noreferrer">{user.blog}</a>              
                   ):(
                        <p>{user.blog ? user.blog : '(empty)'}</p>   
                   )}
                 
                </UserInformation>  

                <CounterWrapper>
                    <div>
                        <h5>Followers</h5>
                        <p>{user.followers}</p>
                    </div>

                    <div>
                        <h5>Followings</h5>
                        <p>{user.following}</p>
                    </div>

                    <div>
                        <h5>Gists</h5>
                        <p>{user.public_gists}</p>
                    </div> 

                    <div>
                        <h5>Repositories</h5>
                        <p>{user.public_repos}</p>
                    </div>              
                </CounterWrapper>
            </UserInformations>          
        </UserWrapper>        
    )
}

export default Profile;
