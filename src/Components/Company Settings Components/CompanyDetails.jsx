import { Box, TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import styled from 'styled-components';

// const ScrollableBox = styled(Box)`

//     ::-webkit-scrollbar {
//         width: 10px;
//     }

//     ::-webkit-scrollbar-thumb {
//         background-color: rgba(217, 217, 217, 1);
//         border-radius: 5px;
//     }

//     ::-webkit-scrollbar-track {
//         background-color: #f1f1f1;
//     }
// `;

const CompanyDetails = () => {
    return (
        <Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', gap: '30px', height: '375px', overflowY: 'scroll' }}>

                <Typography sx={{ fontWeight: '300', fontSize: '14px', color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center', padding: 0, width: 'max-content' }}>Company Logo</Typography>


                <Box sx={{ position: 'relative' }}>

                    <Box sx={{ backgroundColor: 'rgba(227, 243, 255, 1)', width: '188px', height: '90px', borderRadius: '10px', position: 'relative', }}>
                        <Box sx={{ position: 'absolute', left: '45%', top: '40%' }}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8125 2.125H3.1875C2.90571 2.125 2.63546 2.23694 2.4362 2.4362C2.23694 2.63546 2.125 2.90571 2.125 3.1875V13.8125C2.125 14.0943 2.23694 14.3645 2.4362 14.5638C2.63546 14.7631 2.90571 14.875 3.1875 14.875H13.8125C14.0943 14.875 14.3645 14.7631 14.5638 14.5638C14.7631 14.3645 14.875 14.0943 14.875 13.8125V3.1875C14.875 2.90571 14.7631 2.63546 14.5638 2.4362C14.3645 2.23694 14.0943 2.125 13.8125 2.125ZM3.1875 3.1875H13.8125V8.32602L12.1729 6.68578C11.9737 6.48667 11.7035 6.37483 11.4219 6.37483C11.1402 6.37483 10.8701 6.48667 10.6708 6.68578L3.5441 13.8125H3.1875V3.1875ZM5.3125 6.375C5.3125 6.16486 5.37481 5.95943 5.49156 5.78471C5.60831 5.60998 5.77425 5.4738 5.9684 5.39338C6.16255 5.31296 6.37618 5.29192 6.58228 5.33292C6.78839 5.37391 6.97771 5.47511 7.1263 5.6237C7.27489 5.77229 7.37609 5.96161 7.41708 6.16772C7.45808 6.37382 7.43704 6.58745 7.35662 6.7816C7.2762 6.97575 7.14002 7.14169 6.96529 7.25844C6.79057 7.37519 6.58514 7.4375 6.375 7.4375C6.09321 7.4375 5.82296 7.32556 5.6237 7.1263C5.42444 6.92704 5.3125 6.65679 5.3125 6.375Z" fill="#3153CD" />
                            </svg>
                        </Box>
                    </Box>

                    <Box
                        style={{
                            position: 'absolute',
                            width: '25px',
                            height: '25px',
                            borderRadius: '50%',
                            bottom: -10,
                            right: '43%',
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
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>Company Name</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='Enter Company Name' />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>Street Name</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='ABC Street' />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>City</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='Enter City Name' />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>Zip</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='Enter Pincode' />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>State</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='Enter State' />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>Phone Number</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='Enter a Working phone Number' />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: '300', fontSize: '14px', paddingLeft: '3px' }}>Website</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" sx={{ width: '600px' }} placeholder='Enter Website Link' />
                </Box>

            </Box>
        </Fragment>
    )
}

export default CompanyDetails