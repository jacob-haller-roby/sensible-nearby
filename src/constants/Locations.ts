export class Location {
    name: string;
    state: string;
    longitude: number;
    latitude: number;
    constructor(
        name: string,
        state: string,
        latitude: number,
        longitude: number
    ) {
        this.name = name;
        this.state = state;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    getFullName() {
        return `${this.name}, ${this.state}`;
    }
}

const l: Location[] = [
    new Location('Snowmass', 'CO', 39.213, -106.9378),
    new Location('Malibu', 'CA', 34.0259, -118.7798),
    new Location('Catskill', 'NY', 42.2146, -73.9595),
    new Location('Grand Teton National Park', 'WA', 43.7904, -110.6818),
    new Location('Columbia River Gorge', 'OR', 45.7253, -121.73),
];

const Locations: Record<string, Location> = l.reduce((acc, cur) => {
    return { ...acc, [cur.getFullName()]: cur };
}, {});
export default Locations;
