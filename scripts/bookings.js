import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

const findBand = (booking, bands) => {
    let bookingBand = ""
    for ( const band of bands ) {
        if (band.id === booking.bandId){
            bookingBand = band
        }
    }
 return bookingBand
        
}

const findVenue = (booking, venues) => {
    let bookingVenue = ""
    for ( const venue of venues ) {
        if (venue.id === booking.venueId){
            bookingVenue = venue
        }
    }
 return bookingVenue
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
    if (itemClicked.dataset.type === "booking") {
        const bookingId = itemClicked.dataset.id

            for (const booking of bookings){
                if (booking.id === parseInt(bookingId)) {
                    const bookingBands = ()

                    window.alert(`${bookingBands}`)
                } 
            }

        }
    }
)


export const bookingsList = () => {
    let html = "<article>";

    for (const booking of bookings) {

        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li data-type="booking"
                     data-id="${booking.id}"                       
                >${band.name} are playing at ${venue.name} on ${booking.date}</li>`
        
    }

    html += "</article>";
    return html

}
