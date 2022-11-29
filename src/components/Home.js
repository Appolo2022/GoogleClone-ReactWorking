import React from 'react';

import AppsIcon from '@material-ui/icons/Apps'; 
import AvatarIcon from '@material-ui/core/Avatar';
/*import { ListItemSecondaryAction } from '@material-ui/core'; */
/*import { FullscreenExit } from '@material-ui/icons';*/
//import { Button} from '@material-ui/core';

//import { Search } from '@material-ui/icons';
import styled from 'styled-components';
import Search  from './Search.js';   //changed *8*


/*import { Displays } from 'formiojs';
import { findByLabelText } from '@testing-library/react';
import { Column } from '@formio/react';
import { Container } from '@material-ui/core';*/

const HomeContainer =styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
`
    const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    align-items: center;
`
    const Header = styled.div`
        display: flex;
        align-items: center;
        p {
            margin-right: 20px;
            font-size: 15px;
        }
        .left-margin {
            margin-left: 20 px;
        }
 `
    const BodyContainer = styled.div`
        flex:1;
        display: flex;
        margin-top: 10%;
        flex-direction: column;
        img { 
            object-fit: contain;
            height: 100px;
            margin-bottom: 5px;
        }
`
 const Home = () => {
    
    return (
        <HomeContainer> 
            <HeaderContainer>
                <Header>
                <p> About </p>
                <p> Store </p>
                </Header>

                <Header>
                <p> Gmail</p>
                <p> Images</p>

                <AppsIcon className='left-margin'/>
                <AvatarIcon className='left-margin'/>
        </Header>
        </HeaderContainer>

    <BodyContainer>            
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" 
    alt="google-logo" />  

<div> 
        <Search /> 
</div>
   </BodyContainer>
</HomeContainer>
    )
}
export default Home;