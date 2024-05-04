const database = {
bands: [{
        id: 1,
        name: "Wipes Around",
        members: 6,
        genre: "pop punk",
        yearFormed: 2009,
    },
    {
        id: 2,
        name: "The Pink Apricot",
        members: 3,
        genre: "folk",
        yearFormed: 2020,
    },
    {
        id: 3,
        name: "Butterfly Affect",
        members: 4,
        genre: "indie rock",
        yearFormed: 2015,
    },
    {
        id: 4,
        name: "The Rowan Trees",
        members: 2,
        genre: "experimental",
        yearFormed: 2023,
    },
    {
        id: 5,
        name: "Evvy Goes Round",
        members: 3,
        genre: "children's music",
        yearFormed: 2018,
    },
    {
        id: 6,
        name: "The Jim Jams",
        members: 1,
        genre: "americana",
        yearFormed: 2012,
    },
    {
        id: 7,
        name: "Poppy and The Kids",
        members: 4,
        genre: "country rock",
        yearFormed: 2015,
    },
    {
        id: 8,
        name: "Lavender Wind",
        members: 5,
        genre: "alternative rock",
        yearFormed: 2007,
    },
    {
        id: 9,
        name: "The Chargers",
        members: 4,
        genre: "k-pop",
        yearFormed: 2019,
    },
    {
        id: 10,
        name: "Backpack Fools",
        members: 9,
        genre: "jazz fusion",
        yearFormed: 2021,
    }],

bookings :[
    {id: 1, bandId: 1, venueId: 1, date: "June 2, 2024"},
    {id: 2, bandId: 2, venueId: 2, date: "June 25, 2024"},
    {id: 3, bandId: 3, venueId: 3, date: " July 12, 2024"},
    {id: 4, bandId: 4, venueId: 4, date: "August 4, 2024"},
    {id: 5, bandId: 5, venueId: 1, date: "June 2, 2024"},
    {id: 6, bandId: 6, venueId: 2, date: "June 25, 2024"},
    {id: 7, bandId: 7, venueId: 3, date: " July 12, 2024"},
    {id: 8, bandId: 8, venueId: 4, date: "August 4, 2024"},
    {id: 9, bandId: 9, venueId: 1, date: "June 2, 2024"},
    {id: 10, bandId: 10, venueId: 2, date: "June 25, 2024"}
],
venues: [
    {
        id: 1,
        name: "Hillview",
        address: "65 North West Street South",
        squareFootage: 2250,
        maxOccupancy: 200,
    },
    {
        id: 2,
        name: "Journey's End",
        address: "455 Main Street",
        squareFootage: 2000,
        maxOccupancy: 150,
    },
    {
        id: 3,
        name: "Red Escape",
        address: "1423 15th Street",
        squareFootage: 1000,
        maxOccupancy: 85,
    },
    {
        id: 4,
        name: "Mushroom Inn",
        address: "79 Caterpillar Lane",
        squareFootage: 1100,
        maxOccupancy: 100,
    }]    
}


export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}