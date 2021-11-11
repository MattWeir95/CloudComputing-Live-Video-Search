//Resets the below states to bring the application back to the begining

export default function ResetButton(props) {
  if (
    props.pastGigs ||
    props.showArtists ||
    (!props.pastGigs && props.showGigs)
  ) {
    return (
      <button
        className="text-white fixed mt-5 ml-6 border px-4 py-1 border-white rounded bg-red-600 hover:text-red-600 hover:bg-white"
        onClick={(e) => {
          props.setShowGigs(false);
          props.setYoutubeVideos({ error: null, message: "", data: "" });
          props.setPastGigs(null);
          props.setShowSearchBar(true);
          props.setBandInput("");
          props.setShowArtists(false);
          props.setArtistList(null);
          props.setError({ error: null, message: null });
          props.setLoading(false);
        }}
      >
        Reset
      </button>
    );
  } else {
    return null;
  }
}
