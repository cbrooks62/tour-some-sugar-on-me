import { bandsList } from "./bands.js";
import { venuesList } from "./venues.js";
import { bookingsList } from "./bookings.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>

<article class="bookings">
    <h2>Bookings</h2>
    ${bookingsList()}
</article>
<article class="details">

    <section class="detail--column list details__venues">
    <h2>Venues</h2>
    ${venuesList()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${bandsList()}
    </section>
</article>

`;

mainContainer.innerHTML = applicationHTML;
