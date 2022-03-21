export const fetchGoogleNearby = async (
    keyword: string,
    latitude: number,
    longitude: number
) => {
    const response = await fetch(
        `/api/places?keyword=${keyword}&location=${latitude}%2C${longitude}`
    );
    return await response.json();
};
