import { useTheme } from '@emotion/react';
import { Box, Button, Typography, Modal, Paper, Tabs, Tab } from '@mui/material'
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import PersonalSettings from './PersonalSettings';
import CompanySettings from './CompanySettings';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

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

const SoftwareSettings = () => {

  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Fragment>
      <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Open Modal
        </Button>

        <Modal open={open} onClose={handleClose}>
          <Paper style={{ ...style, width: '989px' }}>
            <Typography variant='h4' fontWeight={'600'} textAlign={'center'} paddingBlock='40px' paddingInline={5} >Software Settings</Typography>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              TabIndicatorProps={{
                style: {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Tab
                label={
                  <Box sx={{ display: 'flex', gap: '10px', alignItems:'center', justifyContent:'center' }}>
                    <Box>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4329 12.2497C12.481 10.6041 11.0142 9.42412 9.30229 8.86475C10.1491 8.36066 10.8069 7.59255 11.1749 6.67837C11.5429 5.76419 11.6006 4.7545 11.3392 3.80435C11.0778 2.85419 10.5117 2.01612 9.7279 1.41883C8.94408 0.821532 7.98587 0.498047 7.00041 0.498047C6.01496 0.498047 5.05674 0.821532 4.27293 1.41883C3.48911 2.01612 2.92304 2.85419 2.66163 3.80435C2.40022 4.7545 2.45793 5.76419 2.82591 6.67837C3.19388 7.59255 3.85177 8.36066 4.69854 8.86475C2.98666 9.4235 1.51979 10.6035 0.567913 12.2497C0.533006 12.3067 0.509853 12.37 0.499819 12.436C0.489785 12.502 0.493074 12.5694 0.509491 12.6341C0.525908 12.6988 0.555122 12.7596 0.595408 12.8128C0.635694 12.8661 0.686237 12.9107 0.744054 12.9441C0.801871 12.9775 0.865791 12.999 0.932043 13.0073C0.998295 13.0156 1.06554 13.0105 1.1298 12.9924C1.19407 12.9743 1.25405 12.9435 1.30622 12.9018C1.35838 12.8601 1.40168 12.8084 1.43354 12.7497C2.61104 10.7147 4.69229 9.49975 7.00041 9.49975C9.30854 9.49975 11.3898 10.7147 12.5673 12.7497C12.5992 12.8084 12.6424 12.8601 12.6946 12.9018C12.7468 12.9435 12.8068 12.9743 12.871 12.9924C12.9353 13.0105 13.0025 13.0156 13.0688 13.0073C13.135 12.999 13.199 12.9775 13.2568 12.9441C13.3146 12.9107 13.3651 12.8661 13.4054 12.8128C13.4457 12.7596 13.4749 12.6988 13.4913 12.6341C13.5078 12.5694 13.511 12.502 13.501 12.436C13.491 12.37 13.4678 12.3067 13.4329 12.2497ZM3.50041 4.99975C3.50041 4.30751 3.70568 3.63082 4.09027 3.05525C4.47485 2.47968 5.02148 2.03108 5.66102 1.76617C6.30056 1.50126 7.0043 1.43195 7.68323 1.567C8.36216 1.70205 8.9858 2.03539 9.47529 2.52487C9.96477 3.01436 10.2981 3.638 10.4332 4.31693C10.5682 4.99586 10.4989 5.6996 10.234 6.33914C9.96908 6.97868 9.52048 7.52531 8.94491 7.90989C8.36934 8.29448 7.69265 8.49975 7.00041 8.49975C6.07246 8.49875 5.1828 8.12969 4.52664 7.47353C3.87047 6.81736 3.50141 5.9277 3.50041 4.99975Z"
                          fill={tabValue === 0 ? 'white' : 'black'} />
                      </svg>
                    </Box>
                    <Box>Personal Settings</Box>
                  </Box>
                }
                value={0}
                style={{
                  backgroundColor: tabValue === 0 ? '#1565c0' : 'transparent',
                  color: tabValue === 0 ? 'white' : '#1565c0',
                  boxShadow: tabValue === 0 ? 'none' : '0px 2px 9px 0px rgba(0, 0, 0, 0.15) inset',
                  borderRadius: '40px 0 0 40px',
                  paddingInline: '40px'
                }}
              />
              <Tab
                label={
                  <Box sx={{ display: 'flex', gap: '10px', alignItems:'center', justifyContent:'center'  }}>
                    <Box>
                      <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 11.9999H14V4.99992C14 4.7347 13.8946 4.48035 13.7071 4.29281C13.5196 4.10527 13.2652 3.99992 13 3.99992H9V0.999918C9.00012 0.818832 8.95106 0.641114 8.85807 0.48573C8.76507 0.330347 8.63163 0.203131 8.47199 0.117661C8.31234 0.0321918 8.13248 -0.00832371 7.95161 0.000439372C7.77073 0.00920245 7.59564 0.0669152 7.445 0.167418L2.445 3.49992C2.30784 3.59143 2.19543 3.71544 2.11779 3.86091C2.04015 4.00637 1.99969 4.16878 2 4.33367V11.9999H1C0.867392 11.9999 0.740215 12.0526 0.646447 12.1464C0.552678 12.2401 0.5 12.3673 0.5 12.4999C0.5 12.6325 0.552678 12.7597 0.646447 12.8535C0.740215 12.9472 0.867392 12.9999 1 12.9999H15C15.1326 12.9999 15.2598 12.9472 15.3536 12.8535C15.4473 12.7597 15.5 12.6325 15.5 12.4999C15.5 12.3673 15.4473 12.2401 15.3536 12.1464C15.2598 12.0526 15.1326 11.9999 15 11.9999ZM13 4.99992V11.9999H9V4.99992H13ZM3 4.33367L8 0.999918V11.9999H3V4.33367ZM7 5.99992V6.99992C7 7.13253 6.94732 7.2597 6.85355 7.35347C6.75979 7.44724 6.63261 7.49992 6.5 7.49992C6.36739 7.49992 6.24021 7.44724 6.14645 7.35347C6.05268 7.2597 6 7.13253 6 6.99992V5.99992C6 5.86731 6.05268 5.74013 6.14645 5.64636C6.24021 5.5526 6.36739 5.49992 6.5 5.49992C6.63261 5.49992 6.75979 5.5526 6.85355 5.64636C6.94732 5.74013 7 5.86731 7 5.99992ZM5 5.99992V6.99992C5 7.13253 4.94732 7.2597 4.85355 7.35347C4.75979 7.44724 4.63261 7.49992 4.5 7.49992C4.36739 7.49992 4.24021 7.44724 4.14645 7.35347C4.05268 7.2597 4 7.13253 4 6.99992V5.99992C4 5.86731 4.05268 5.74013 4.14645 5.64636C4.24021 5.5526 4.36739 5.49992 4.5 5.49992C4.63261 5.49992 4.75979 5.5526 4.85355 5.64636C4.94732 5.74013 5 5.86731 5 5.99992ZM5 9.49992V10.4999C5 10.6325 4.94732 10.7597 4.85355 10.8535C4.75979 10.9472 4.63261 10.9999 4.5 10.9999C4.36739 10.9999 4.24021 10.9472 4.14645 10.8535C4.05268 10.7597 4 10.6325 4 10.4999V9.49992C4 9.36731 4.05268 9.24013 4.14645 9.14636C4.24021 9.0526 4.36739 8.99992 4.5 8.99992C4.63261 8.99992 4.75979 9.0526 4.85355 9.14636C4.94732 9.24013 5 9.36731 5 9.49992ZM7 9.49992V10.4999C7 10.6325 6.94732 10.7597 6.85355 10.8535C6.75979 10.9472 6.63261 10.9999 6.5 10.9999C6.36739 10.9999 6.24021 10.9472 6.14645 10.8535C6.05268 10.7597 6 10.6325 6 10.4999V9.49992C6 9.36731 6.05268 9.24013 6.14645 9.14636C6.24021 9.0526 6.36739 8.99992 6.5 8.99992C6.63261 8.99992 6.75979 9.0526 6.85355 9.14636C6.94732 9.24013 7 9.36731 7 9.49992Z"
                          fill={tabValue === 1 ? 'white' : 'black'} />
                      </svg>
                    </Box>
                    <Box>Company Settings</Box>
                  </Box>
                }
                value={1}
                style={{
                  backgroundColor: tabValue === 1 ? '#1565c0' : 'transparent',
                  color: tabValue === 1 ? 'white' : '#1565c0',
                  boxShadow: tabValue === 1 ? 'none' : '0px 2px 9px 0px rgba(0, 0, 0, 0.15) inset',
                  borderRadius: '0px 40px 40px 0px',
                  paddingInline: '40px'
                }}
              />
            </Tabs>
            <Box sx={{paddingTop:'40px'}}>
              {tabValue === 0 && (
                <PersonalSettings></PersonalSettings>
              )}
              {tabValue === 1 && (
                <CompanySettings></CompanySettings>
              )}
            </Box>
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </Box>
          </Paper>
        </Modal>
      </div>
    </Fragment>
  )
}

export default SoftwareSettings