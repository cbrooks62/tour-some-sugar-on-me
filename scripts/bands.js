import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

export const bandsList = () => {
    let html = "<article>";

    for (const band of bands) {
        html += `<h2 id="bands-${band.id}"></h2>
        <li id= "band-details">
        ${band.name}
        </li>`
    }

    html += "</article>";
    return html
}

