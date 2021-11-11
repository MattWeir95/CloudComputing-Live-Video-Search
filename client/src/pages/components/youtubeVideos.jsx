import React from "react";

//Waits for there to be youtube videos in the state and then displays them in imbedded form
export default function ImbededYoutubeVideos(props) {
  var SRC = "https://www.youtube.com/embed/";

  if (!props.videos.error && props.videos.data) {
    return (
      <div className="flex flex-wrap mt-10 border-black border-2 p-4 mx-5 rounded items-center justify-center bg-white">
        {/* Mapping of all the videos */}
        {props.videos.data.data.items.map((item, index) => (
          // I frame to be shown on screen, imbedes a usable youtube video onto the screen
          <iframe
            title={index}
            key={index}
            className="mx-2 my-5"
            width="560"
            height="315"
            src={SRC + item.id.videoId}
            allowFullScreen
          ></iframe>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
