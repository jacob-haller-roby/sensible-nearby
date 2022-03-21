import React, { useState } from 'react'
import { Location } from '../constants/Locations'
import PaperGridContainer from '../components/PaperGridContainer'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { Grid } from '@mui/material'

export default () => {
    const [location, setLocation] = useState<Location>();
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (location: Location, searchInput: string) => {
        setLocation(location);
        setSearchInput(searchInput);
    };

    return (
        <PaperGridContainer spacing={10}>
            <Grid item xs={12}>
                <SearchForm onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={12}>
                <SearchResults location={location} searchInput={searchInput} />
            </Grid>
        </PaperGridContainer>
    );
};
