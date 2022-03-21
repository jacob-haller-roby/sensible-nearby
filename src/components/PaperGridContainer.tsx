import React from 'react';
import { Grid, Paper } from '@mui/material';

type Props = React.PropsWithChildren<{
    spacing?: number;
}>;

const PaperGridContainer = (props: Props) => {
    return (
        <Paper
            style={{
                margin: 5,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 50,
                paddingRight: 50,
            }}
        >
            <Grid container rowSpacing={props.spacing}>
                {props.children}
            </Grid>
        </Paper>
    );
};

export default PaperGridContainer;
