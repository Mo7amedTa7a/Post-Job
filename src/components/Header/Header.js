import { Box, Button, Grid ,Typography} from '@mui/material';
import React from 'react';

const Header = (props) => {
    return (
        <Box bgcolor={`${`secondary.main`}`} color={'white'} py={10}>
            <Grid container justifyContent={'center'}>
                <Grid item xs={10}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant='h5'>Open job listing</Typography>
                        <Button onClick={props.openModel} color='primary' variant='contained' disableElevation>Post A Job</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;