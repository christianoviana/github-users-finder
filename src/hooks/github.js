import { useContext } from 'react';
import { GithubContext } from '../providers/github'

const useGitHub = () => {

    const { githubData, getUser, getUserRepos, getUserStarred } = useContext(GithubContext);

    return { githubData, getUser, getUserRepos, getUserStarred };
}

export default useGitHub;