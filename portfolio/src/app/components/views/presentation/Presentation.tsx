import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Introduction from './introduction/Introduction';
import ExperienceTable from './experience/ExperienceTable';
import SkillsBoard from './skills/SkillsBoard';

const Presentation = () => {

    return (
        <Tabs id='presentation' className='container'>
            <TabList className='react-tabs__tab-list animate__animated animate__fadeInDown'>
                <Tab className='is-primary'>Profil</Tab>
                <Tab className='is-primary'>Expériences</Tab>
                <Tab className='is-primary'>Compétences</Tab>
            </TabList>
            <TabPanel> <Introduction /> </TabPanel>
            <TabPanel> <ExperienceTable /> </TabPanel>
            <TabPanel> <SkillsBoard /> </TabPanel>
        </Tabs>
    );

}; export default Presentation;