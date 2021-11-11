import Map from "./map";
import GetYoutubeVideos from "../apiFunctions/youtubeAPI";

export default function PastGigs(props) {
  function handleClick(event) {
    var input = props.bandInput + " " + event.venue.displayName + " " + event.start.date;
    GetYoutubeVideos(input, props.setYoutubeVideos, props.setLoading, props.setError);
    props.setShowGigs(false);
  }

  function GigDisplay(data) {
    return data.data.map((event, index) => (
      <button
        key={index}
        className="mx-4 my-6"
        onClick={(e) => {
          handleClick(event);
        }}
      >
        <div className="border-2 text-center px-4 rounded-lg py-2 bg-white hover:bg-green-100 transition duration-500 ease-in-out">
          <p className="font-bold">Event Name</p>
          <p>{event.displayName}</p>
          <p className="font-bold">Location</p>
          <p> {event.location.city}</p>
          <p className="font-bold">Date</p>
          <p> {event.start.date}</p>
          <p className="font-bold">Venue</p>
          <p> {event.venue.displayName}</p>
        </div>
      </button>
    ));
  }

  if (props.gigs && props.showGigs) {
    return (
      <div className="mt-10">
        <h1 className="text-center font-bold text-3xl text-white">
          Pick an event
        </h1>
        <div className="mt-5 flex border-black border-2">
          <div
            id="pastGigs"
            className="flex flex-wrap items-center justify-center mr-5 overflow-y-scroll mt-10 mb-10"
            style={{ maxHeight: "550px", direction: "ltr" }}
          >
            <GigDisplay data={props.gigs} />
          </div>

          <Map
            gigs={props.gigs}
            setShowGigs={props.setShowGigs}
            
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
