import GetPastGigs from "../apiFunctions/getPastGigs";
//Displays a a button for every artist that is within the ArtistList State, On click it retrieves that artists past gigs and sets the state
export default function ArtistList(props) {
  function handeClick(id) {
    GetPastGigs(id, props.setLoading, props.setError, props.setPastGigs);
    props.setShowGigs(true);
    props.setShowArtists(false);
  }

  function ArtistListDisplay(data) {
    return data.data.artist.map((artist, index) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center p-4"
      >
        <button
          onClick={(e) => {
            handeClick(artist.id);
          }}
          className="border border-black rounded text-black p-2 shadow bg-yellow-200"
          key={index}
        >
          {" "}
          {artist.displayName}
        </button>
      </div>
    ));
  }

  if (props.showArtists && props.artistsList) {
    return (
      <div className=" mt-10">
        <h1 className="text-3xl text-center">Choose your artist</h1>

        <div className="flex flex-wrap mt-10 mb-5 justify-center items-center border shadow border-black mx-5 bg-white rounded shadow">
          <ArtistListDisplay data={props.artistsList} />
        </div>
      </div>
    );
  } else {
    return null;
  }

}
