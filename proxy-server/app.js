var express = require('express');
var logger = require('morgan');
const fetch = require('node-fetch');
require('dotenv').config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const makeGoogleNearbyUrl = (keyword, location, radius, type) =>
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${
        process.env.API_KEY
    }&keyword=${keyword}&location=${location}&radius=${radius}${
        type ? '&type=' + type : ''
    }`;

const fetchGoogleNearby = async (keyword, location) =>
    fetch(makeGoogleNearbyUrl(keyword, location, 150000));

app.get('/api/places', async (req, res, next) => {
    const response = await fetchGoogleNearby(
        req.query.keyword,
        req.query.location
    );
    const places = await response.json();
    const placesWithPhotos = await Promise.all(
        places.results.map(async (place) => {
            if (place.photos?.[0]?.photo_reference) {
                const photo = await fetch(
                    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos?.[0]?.photo_reference}&key=${process.env.API_KEY}`
                );
                return {
                    ...place,
                    photoUrl: photo?.url,
                };
            } else {
                return {
                    ...place,
                    photoUrl:
                        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2Fq%2FL%2FP%2FY%2Ft%2F6%2Fno-image-available-hi.png&f=1&nofb=1',
                };
            }
        })
    );
    res.send(placesWithPhotos);
});
module.exports = app;
