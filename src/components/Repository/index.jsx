import React, {useEffect} from 'react';
import useGitHub from '../../hooks/github';
import RepositoryItem from './RepositoryItem';
import { TabsWrapper, TabWrapper, TabListWrapper, TabPanelWrapper } from './styles';

const Repository = (props) => {
    const { githubData, getUserRepos, getUserStarred } = useGitHub();

    useEffect(() => {
        if(githubData.user.login){
            getUserRepos(githubData.user.login); 
            getUserStarred(githubData.user.login); 
        }          
    }, [githubData.user.login])

    return (
    <>
    {githubData.repos ? (
        <TabsWrapper
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'    
        >
            <TabListWrapper>
                <TabWrapper>Repositories {githubData?.repos && <span>({githubData.repos.length})</span>}</TabWrapper>
                <TabWrapper>Starred {githubData?.starred && <span>({githubData.starred.length})</span>}</TabWrapper>
            </TabListWrapper>

            <TabPanelWrapper id='panel-list-1'>
                {githubData?.repos?.map((repo) => (
                      <RepositoryItem 
                      key={repo.id}
                      name={repo.name}
                      fullName={repo.full_name}
                      link={repo.html_url}
                      description={repo.description && repo.description.length > 25 ? repo.description.substring(0, 25).concat('...'): repo.description}
                  />
                ))}              
            </TabPanelWrapper>

            <TabPanelWrapper id='panel-list-2'>
                {githubData?.starred?.map((starred) => (
                      <RepositoryItem 
                      key={starred.id}
                      name={starred.name}
                      fullName={starred.full_name}
                      link={starred.html_url}
                      description={starred.description && starred.description.length > 25 ? starred.description.substring(0, 25).concat('...'): starred.description}
                  />
                ))}
            </TabPanelWrapper>
        </TabsWrapper>): (<></>)}
    </>
    )
}

export default Repository
