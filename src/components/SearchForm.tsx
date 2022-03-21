import React, { useState } from 'react';
import {
    Button,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import Locations, { Location } from '../constants/Locations';
import SpaceBetweenColumn from './SpaceBetweenColumn'


interface Props {
    onSubmit: (location: Location, searchInput: string) => any;
}

const SearchForm = (props: Props) => {
    const [location, setLocation] = useState(Object.values(Locations)[0]);
    const [searchInput, setSearchInput] = useState('');

    return (
        <Grid container>
            <Grid item xs={8} flex={1}>
                <FormLabel>Select A Location</FormLabel>
                <RadioGroup
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(e) => setLocation(Locations[e.target.value])}
                    value={location.getFullName()}
                >
                    {Object.keys(Locations).map((locationName) => {
                        return (
                            <FormControlLabel
                                key={locationName}
                                value={locationName}
                                control={<Radio />}
                                label={locationName}
                            />
                        );
                    })}
                </RadioGroup>
            </Grid>
            <Grid item xs={4} flex={1}>
                <SpaceBetweenColumn>
                    <TextField
                        label="Search"
                        variant="standard"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    >
                    </TextField>
                    <Button
                        variant="contained"
                        onClick={() => props.onSubmit(location, searchInput)}
                    >
                        Search
                    </Button>
                </SpaceBetweenColumn>
            </Grid>
        </Grid>
    );
};

export default SearchForm;
