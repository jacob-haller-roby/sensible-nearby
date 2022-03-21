import React, { useEffect, useState } from 'react';
import PaperGridContainer from './PaperGridContainer';
import { Location } from '../constants/Locations';
import { fetchGoogleNearby } from '../actions/GoogleNearby';
import { GoogleResult } from '../constants/types';
import PlaceCard from './PlaceCard';
import LoadingWrapper from './LoadingWrapper'
import { Grid, Typography } from '@mui/material'

interface Props {
    location?: Location;
    searchInput: string;
}

const SearchResults = (props: Props) => {
    const [googleResults, setGoogleResults] = useState<GoogleResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        if (props.searchInput && props.location) {
            setIsLoading(true);
            fetchGoogleNearby(
                props.searchInput,
                props.location.latitude,
                props.location.longitude
            ).then((results) => {
                if (isMounted) {
                    setGoogleResults(results);
                    setIsLoading(false);
                }
            });
        }

        return () => {
            isMounted = false;
        };
    }, [props.searchInput, props.location]);


    return <LoadingWrapper isLoading={isLoading}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography>Results for "{props.searchInput}" near {props.location?.getFullName()}</Typography>
                </Grid>
                {googleResults.map((result, i) => <PlaceCard place={result} key={i}/>)}
            </Grid>
        </LoadingWrapper>;
};

export default SearchResults;
