import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Rating,
    Typography,
} from '@mui/material';
import { GoogleResult } from '../constants/types';

interface Props {
    place: GoogleResult;
}

const PlaceCard = (props: Props) => {
    return (
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.place.photoUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.place.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.place.vicinity}
                    </Typography>
                    <Rating
                        name="simple-controlled"
                        value={props.place.rating}
                        precision={0.1}
                        readOnly={true}
                    />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default PlaceCard;
