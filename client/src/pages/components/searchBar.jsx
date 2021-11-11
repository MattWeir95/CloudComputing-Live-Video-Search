import React from "react";
import GetArtists from "../apiFunctions/getArtistList";
//Recieves the users input and gets a list of artist ids from the api which are set in the state
export default function SearchBar(props) {
  
  if (props.showSearchBar) {
    return (
      <div className="mt-10 w-1/2">
        <form
          className="flex flex-col items-center"
          onSubmit={(e) => {
            if (props.input) {
              GetArtists(props.input, e, props.setLoading, props.setError, props.setArtistList);
              props.setShowSearchBar(false);
              props.setShowArtists(true);
            }
          }}
        >
          <label
            className="text-center text-2xl pb-2 text-white"
            htmlFor="BandSearch"
          >
            Search the band
          </label>
          <input
            id="BandSearch"
            className="border-2 border-blue-400 rounded pb-2 w-full"
            type="text"
            onChange={(e) => {
              props.setBandInput(e.target.value);
            }}
          ></input>

          <button
            type="Submit"
            className="rounded mt-5 py-1 bg-blue-200 hover:bg-green-200 border-2 border-black w-3/12 py-4 animate-pulse"
          >
            Search
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }

  
}
