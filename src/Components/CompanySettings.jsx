import { Avatar, Box, Button, Tab, Tabs, TextField, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CompanyDetails from './Company Settings Components/CompanyDetails';
import UnitPreference from './Company Settings Components/UnitPreference';
import PriceCityPreference from './Company Settings Components/PriceCityPreference';
import BidPage from './Company Settings Components/BidPage';
import QuoteLetter from './Company Settings Components/QuoteLetter';
import ProjectStages from './Company Settings Components/ProjectStages';
import UserManagement from './Company Settings Components/UserManagement';


function TabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, width: '100%' }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ScrollableBox = styled(Box)`

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(217, 217, 217, 1);
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
`;

const CompanySettings = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabLabels = [
        "Company Details",
        "User Management",
        "Unit Preference",
        "Price-city Preference",
        "Bid Page",
        "Quote Letter",
        "Project Stages"
    ];

    const tabs = tabLabels.map((label, index) => (
        <Tab
            key={index}
            label={label}
            style={{
                backgroundColor: value === index ? 'rgba(227, 243, 255, 1)' : 'transparent',
                borderRadius: '10px',
                paddingInline: '30px',
                marginInline: '20px',
                width:'max-content'
            }}
            {...a11yProps(index)}
        />
    ));

    return (
        <Box>
            <ScrollableBox
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 420, borderTop: 1, borderTopColor: 'divider', }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{
                        borderRight: 1, borderColor: 'divider',
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                        paddingTop: '30px',
                    }}
                >
                    {tabs}

                </Tabs>
                <TabPanel value={value} index={0} >
                    <CompanyDetails></CompanyDetails>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <UserManagement/>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <UnitPreference></UnitPreference>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <PriceCityPreference></PriceCityPreference>
                </TabPanel>


                <TabPanel value={value} index={4}>
                    <BidPage></BidPage>
                </TabPanel>


                <TabPanel value={value} index={5}>
                    <QuoteLetter></QuoteLetter>
                </TabPanel>

                <TabPanel value={value} index={6}>
                    <ProjectStages></ProjectStages>
                </TabPanel>
            </ScrollableBox>
        </Box>
    )
}

export default CompanySettings