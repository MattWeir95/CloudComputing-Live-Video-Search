import React from "react";
import GetArtists from "../apiFunctions/getArtistList";
//Recieves the users input and gets a list of artist ids from the api which are set in the state
export default function SearchBar(props) {
  
  if (props.showSearchBar) {
    return (
      <div className="mt-20 w-1/2 bg-white p-10 rounded-lg shadow-lg">
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
            className="text-center text-2xl pb-2 text-black mb-4"
            htmlFor="BandSearch"
          >
            Search the band
          </label>
          <input
            id="BandSearch"
            className="border border-black rounded pb-2 w-full"
            type="text"
            onChange={(e) => {
              props.setBandInput(e.target.value);
            }}
          ></input>

          <button
            type="Submit"
            className="border border-black shadow rounded mt-5 py-1 bg-blue-200 hover:bg-blue-400 hover:text-white border-2 w-3/12 py-1 text-black text-lg"
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
