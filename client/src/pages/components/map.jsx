import L from "leaflet";
import { useEffect } from "react";
const API_KEY =  "pk.eyJ1IjoibWstd2VpciIsImEiOiJja3QxNG91cXEwM2RhMnVwYzlwMmhueGc0In0.JpFjeMtqIaWgQe8CZb4Vyw"

export default function Map(props) {

    

  useEffect(() => {
    if (props.gigs) {
      var eventArray = props.gigs;

      if (eventArray[0].location.lat && eventArray[0].location.lng) {
        var mymap = L.map("mapid").setView(
          [eventArray[0].location.lat, eventArray[0].location.lng],
          1
        );
      }

      //Gets the tiles from the mapbox API
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: API_KEY,
        }
      ).addTo(mymap);

      //For every event a marker is displayed on the map that can be clicked on to display the name of event
      for (var i = 0; i < eventArray.length; i++) {
        var item = props.gigs[i];
        if (item.location.lat && item.location.lng) {
          var popup = L.popup().setContent(
            "<b class='text-center' >" + item.displayName + "</b>"
          );

          L.marker([item.location.lat, item.location.lng])
            .addTo(mymap)
            .bindPopup(popup);
        }
      }
    }
  }, [props.gigs]);

  return (
    <div className="">
      <div className="text-center text-white text-4xl mt-10 ">
        Event locations
      </div>
      <div className="flex justify-center items center mt-4 ">
        <div
          id="mapid"
          className="mx-5"
          style={{ height: "500px", width: "1000px" }}
        ></div>
      </div>
    </div>
  );
}
