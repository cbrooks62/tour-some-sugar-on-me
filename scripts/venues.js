import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

export const venuesList = () => {
    let html = "<article>";

    for (const venue of venues) {
        html += `<h2 id="venues-${venue.id}">${venue.name}</h2>
        <ul id= "venue-details">
        <li>Venue Address: ${venue.address}</li>
        <li>Square Footage: ${venue.squareFootage}</li>
        <li>Max Occupancy: ${venue.maxOccupancy}</li>
        </ul>`
    }

    html += "</article>";
    return html
}

