import React, { Fragment } from 'react';
import { Profile, Repository, Header, Message } from '../../components';
import useGitHub from './../../hooks/github';
import { HomeWrapper } from './styles';

const Home = () => {
  const styles = {
    textAlign:'center',
    margin: '10px',
    textShadow: '2px 2px 5px rgba(25, 118, 210, 0.9)'
  };

  const {githubData} = useGitHub();

  return (
    <HomeWrapper>      
      <Header/>
      {githubData.user ? <>
      {githubData.loading ? <div><h4 style={styles}>Loading...</h4></div> : (         
        <Fragment>  
            {githubData.user.login ? <>         
              <Profile></Profile>
              <Repository></Repository>    
            </>:
            <><Message>Username was not found</Message></>}       
        </Fragment>           
      )}</>: <>
        <Message>Please, make a search to find a github user</Message>
      </>} 
    </HomeWrapper>
  )
}
  

  
 


export default Home;