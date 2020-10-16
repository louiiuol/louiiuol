import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Introduction from './introduction/Introduction';
import ExperienceTable from './experience/Experience';
import Skills from './skills/Skills';

import 'react-tabs/style/react-tabs.css';
import './Presentation.css';

function Presentation() {
    return (
        <Tabs id='presentation' className='container'>
            <TabList>
                <Tab>Introduction</Tab>
                <Tab>Expérience & Diplômes</Tab>
                <Tab>Compétences</Tab>
            </TabList>
            <TabPanel>
                    <Introduction />
            </TabPanel>
            <TabPanel>
                <ExperienceTable />
            </TabPanel>
            <TabPanel>
                <Skills />
            </TabPanel>
        </Tabs>
    );
} export default Presentation;