import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

export const TabsWrapper = styled(Tabs)`
    margin-top: 16px;
    font-size:16px;
    font-weight: bold;
    box-sizing: border-box;

    p{
        font-weight: normal;
    }
`;

export const TabWrapper = styled(Tab)`
    border-radius: 16px;
    border: 1px solid black;    
    padding: 16px;
    user-select: none;    
   
    &:not(:last-child){
        margin-right: 10px;
    }

    &:hover{
        cursor:pointer;
    }

    &:focus{
        outline: none;
    }

    &.is-selected{
        border-bottom: 1px solid white;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        box-shadow: 0 0 4px black;
    }
`;
TabWrapper.tabsRole = 'Tab';

export const TabListWrapper = styled(TabList)`
    list-style-type:none;
    margin: 0px;
    display:flex;
    flex-direction:row;
    padding: 16px;
`;

export const TabPanelWrapper = styled(TabPanel)`
    display:none;
    min-height: 40vh;
    padding: 16px;

    &.is-selected{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    div{
        margin-right: 20px;
        margin-bottom: 20px;
    }
`;
TabPanelWrapper.tabsRole = 'TabPanel';


