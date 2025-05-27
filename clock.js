const { DateTime } = luxon;

const cities = [
  { city: "New York, USA", zone: "America/New_York" },
  { city: "London, UK", zone: "Europe/London" },
  { city: "Tokyo, Japan", zone: "Asia/Tokyo" },
  { city: "Nairobi, Kenya", zone: "Africa/Nairobi" },
  { city: "Moscow, Russia", zone: "Europe/Moscow" },
  { city: "Rio de Janeiro, Brazil", zone: "America/Sao_Paulo" },
  { city: "Sydney, Australia", zone: "Australia/Sydney" },
  { city: "Dubai, UAE", zone: "Asia/Dubai" },
  { city: "Delhi, India", zone: "Asia/Kolkata" },
  { city: "Beijing, China", zone: "Asia/Shanghai" },
  { city: "Berlin, Germany", zone: "Europe/Berlin" },
  { city: "Toronto, Canada", zone: "America/Toronto" },
  { city: "Los Angeles, USA", zone: "America/Los_Angeles" },
  { city: "Cape Town, South Africa", zone: "Africa/Johannesburg" },
  { city: "Bangkok, Thailand", zone: "Asia/Bangkok" },
  { city: "Seoul, South Korea", zone: "Asia/Seoul" },
  { city: "Jakarta, Indonesia", zone: "Asia/Jakarta" },
  { city: "Mexico City, Mexico", zone: "America/Mexico_City" },
  { city: "Buenos Aires, Argentina", zone: "America/Argentina/Buenos_Aires" },
  { city: "Wellington, New Zealand", zone: "Pacific/Auckland" },
];

function updateClocks() {
  const container = document.getElementById("clockContainer");
  container.innerHTML = "";

  cities.forEach(({ city, zone }) => {
    const now = DateTime.now().setZone(zone);
    const card = document.createElement("div");
    card.className = "alarm-card";
    card.innerHTML = `
      <p class="time">${now.toFormat("hh:mm:ss a")}</p>
      <p class="label">${city}</p>
      <p class="repeat">${zone}</p>
    `;
    container.appendChild(card);

    card.setAttribute("style", "animation: pulse 1s ease-in-out");
  });
}

updateClocks();
setInterval(updateClocks, 1000);
