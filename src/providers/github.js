import React, { createContext, useCallback, useState } from 'react';
import api from './../services/githubApi';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repos: [],
    starred: []
});

const GithubProvider = ({children}) => {
    const [githubData, setGithubData] = useState({
        loading: false,
        user: undefined,
        repos: undefined,
        starred: undefined
    });

    const getUser = (username) => {
        setGithubData((prevState) => ({
            ...prevState,
            user: { avatar_url: undefined, login: undefined, name: undefined, html_url: undefined, company: undefined, blog:undefined, location:undefined, followers:0, following:0, public_gists: 0, public_repos: 0},
            loading: true          
        }));
   
        api.get(`users/${username}`).then(({ data }) => {
            console.log(data);
            setGithubData((prevState) => ({
                ...prevState,
                user: { avatar_url: data.avatar_url, login: data.login, name: data.name, html_url: data.html_url, company: data.company, blog:data.blog, location:data.location, followers:data.followers, following:data.following, public_gists: data.public_gists, public_repos: data.public_repos},
                loading: false          
            }));
        }).catch((error) => {
            setGithubData((prevState) => ({
                ...prevState,
                user: { avatar_url: undefined, login: undefined, name: undefined, html_url: undefined, company: undefined, blog:undefined, location:undefined, followers:0, following:0, public_gists: 0, public_repos: 0},
                loading: false          
            }));
        })
    }

    const getUserRepos = (username) => {   
        api.get(`users/${username}/repos?per_page=100`).then(({data}) => {
            setGithubData((prevState) => ({
                ...prevState,
                repos: data         
            }));          
        }).catch((error) => {
           
        })
    }

    const getUserStarred = (username) => {   
        api.get(`users/${username}/starred`).then(({data}) => {
            setGithubData((prevState) => ({
                ...prevState,
                starred: data         
            }));          
        }).catch((error) => {
           
        })
    }

    const contextValue = { 
        githubData,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), [])
    };

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider
