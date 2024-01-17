import { Avatar, Box, Button, Tab, Tabs, TextField, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

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
                <Box sx={{ p: 3 }}>
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

const PersonalSettings = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box
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
                    <Tab label="Personal Details" style={{ backgroundColor: value === 0 ? 'rgba(227, 243, 255, 1)' : 'transparent', borderRadius: '10px', paddingInline: '50px', marginInline: '20px' }} {...a11yProps(0)} />
                    <Tab label="Other" style={{ backgroundColor: value === 1 ? 'rgba(227, 243, 255, 1)' : 'transparent', borderRadius: '10px', paddingInline: '50px', marginInline: '20px' }} {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', gap: '30px', paddingTop: '30px', }}>
                        <Box sx={{ position: 'relative' }}>
                            <Avatar
                                alt=""
                                src=""
                                sx={{ width: 80, height: 80, backgroundColor: 'rgba(227, 243, 255, 1)', color: 'rgba(49, 83, 205, 1)' }}
                            />
                            <Typography sx={{ fontWeight: '300', fontSize: '14px', color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center', position: 'absolute', top: '-30px', width: 'max-content' }}>Profile Picture</Typography>

                            <Box
                                style={{
                                    position: 'absolute',
                                    width: '25px',
                                    height: '25px',
                                    borderRadius: '50%',
                                    bottom: -10,
                                    right: 26,
                                    border: '1px solid rgb(175, 175, 175)',
                                }}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.625 3.9375H12.6759L11.7176 2.50031C11.6662 2.42336 11.5967 2.36025 11.5151 2.31659C11.4336 2.27293 11.3425 2.25006 11.25 2.25H6.75C6.65749 2.25006 6.56642 2.27293 6.48486 2.31659C6.4033 2.36025 6.33377 2.42336 6.28242 2.50031L5.32336 3.9375H3.375C2.92745 3.9375 2.49822 4.11529 2.18176 4.43176C1.86529 4.74822 1.6875 5.17745 1.6875 5.625V13.5C1.6875 13.9476 1.86529 14.3768 2.18176 14.6932C2.49822 15.0097 2.92745 15.1875 3.375 15.1875H14.625C15.0726 15.1875 15.5018 15.0097 15.8182 14.6932C16.1347 14.3768 16.3125 13.9476 16.3125 13.5V5.625C16.3125 5.17745 16.1347 4.74822 15.8182 4.43176C15.5018 4.11529 15.0726 3.9375 14.625 3.9375ZM11.5312 9.28125C11.5312 9.78188 11.3828 10.2713 11.1047 10.6875C10.8265 11.1038 10.4312 11.4282 9.96867 11.6198C9.50614 11.8114 8.99719 11.8615 8.50618 11.7639C8.01516 11.6662 7.56414 11.4251 7.21014 11.0711C6.85613 10.7171 6.61506 10.2661 6.51739 9.77507C6.41972 9.28406 6.46985 8.77511 6.66143 8.31258C6.85301 7.85006 7.17745 7.45473 7.59371 7.17659C8.00997 6.89846 8.49937 6.75 9 6.75C9.67133 6.75 10.3152 7.01668 10.7899 7.49139C11.2646 7.96609 11.5312 8.60992 11.5312 9.28125Z" fill="#3153CD" />
                                </svg>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>Your Name</Typography>
                            <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='Jane Cooper' />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>Personal Email</Typography>
                            <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='janecooper@gmail.com' />
                        </Box>

                        <Button sx={{ marginRight: 'auto' }} variant="outlined">Change Password</Button>

                    </Box>

                </TabPanel>

                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </Box>
        </Box>
    )
}

export default PersonalSettings