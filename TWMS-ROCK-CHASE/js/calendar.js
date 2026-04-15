const API_KEY = "AIzaSyCylXCUfF56J8zpzpTucr0cHfPhV0XPtVs";
const CALENDAR_ID = "demasterchase@gmail.com";

function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
      ],
    })
    .then(function () {
      listUpcomingEvents();
    })
    .catch(function (error) {
      displayError(error);
    });
}

function listUpcomingEvents() {
  gapi.client.calendar.events
    .list({
      calendarId: CALENDAR_ID,
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
      // Include attachments in the event data
      fields: "items(summary,start,end,location,description,attachments)",
    })
    .then(function (response) {
      console.log("Response from Google Calendar API:", response);
      const events = response.result.items;
      const calendarElement = document.getElementById("calendar");
      if (events.length > 0) {
        events.forEach((event) => {
          const start = new Date(event.start.dateTime || event.start.date);
          const end = new Date(event.end.dateTime || event.end.date);

          const formatDate = (date) => {
            const options = {
              weekday: "long",
              day: "numeric",
              month: "long",
            };
            const formattedDate = date.toLocaleString("en-US", options);
            const [day, number, month] = formattedDate.split(" ");

             
            return ` ${month} ${day}`;
          };

          const formatTime = (date) => {
            return date.toLocaleString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });
          };

          const dayAsNum = formatDate(start);
          const Month = start.toLocaleString("en-US", { month: "long" });
          const startTime = formatTime(start);
          const endTime = formatTime(end);

          const eventElement = document.createElement("div");
          eventElement.classList.add("event");
          eventElement.innerHTML = `
            <h3>${Month} ${dayAsNum} </h3>
            <p>${startTime} - ${endTime}</p><br/>
            <p><strong>	 ${event.summary}</p></strong>
            <p><i class="fas fa-map-marker-alt"></i> ${event.location || "N/A"}</p>
            <p><i class="fas fa-info-circle"></i> ${event.description || "No description"}</p>
          
          `;

          // // Image rendering logic
          // if (event.attachments && event.attachments.length > 0) {
          //   event.attachments.forEach((attachment) => {
          //     if (attachment.mimeType.startsWith("image/")) {
          //       const fileId = attachment.fileUrl.match(/id=([^&]+)/)[1];
          //       const imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

          //       const imageElement = document.createElement("img");
          //       imageElement.src = imageUrl;
          //       imageElement.alt = attachment.title;
          //       imageElement.style.maxWidth = "100%";
          //       eventElement.appendChild(imageElement);
          //     }
          //   });
          // }

          calendarElement.appendChild(eventElement);
        });
      } else {
        calendarElement.innerHTML = "No upcoming events found.";
      }
    })
    .catch(function (error) {
      displayError(error);
    });
}


function displayError(error) {
  const errorElement = document.getElementById("error");
  if (error.result && error.result.error) {
    const errorMessage = error.result.error.message;
    errorElement.innerHTML = `Error: ${errorMessage}`;
  } else {
    errorElement.innerHTML = "An unknown error occurred.";
  }
}

function loadGapiClient() {
  gapi.load("client", initClient);
}

loadGapiClient();
