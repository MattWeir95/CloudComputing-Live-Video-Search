//Resets the below states to bring the application back to the begining

export default function ResetButton(props) {
  if (
    props.pastGigs ||
    props.showArtists ||
    (!props.pastGigs && props.showGigs)
  ) {
    return (
      <button
        className="fixed mt-5 ml-8 border-2 p-2 px-12 py-8 border-black rounded bg-red-200 hover:bg-gray-400 transition duration-1000 ease-in-out "
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
