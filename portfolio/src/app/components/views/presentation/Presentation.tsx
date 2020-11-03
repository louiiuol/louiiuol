import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Profil, Experiences, Skills } from '.';

export const Presentation = () => {

    return (
        <Tabs id='presentation' className='container'>
            <TabList className='react-tabs__tab-list animate__animated animate__fadeInDown'>
                <Tab className='is-primary'>Profil</Tab>
                <Tab className='is-primary'>Expériences</Tab>
                <Tab className='is-primary'>Compétences</Tab>
            </TabList>
            <TabPanel> <Profil /> </TabPanel>
            <TabPanel> <Experiences /> </TabPanel>
            <TabPanel> <Skills /> </TabPanel>
        </Tabs>
    );

}