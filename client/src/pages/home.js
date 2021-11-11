import React, { useState } from "react";
import Header from "./components/heading";
import SearchBar from "./components/searchBar";
import PastGigs from "./components/pastGigs";
import ResetButton from "./components/resetButton";
import ImbededYoutubeVideos from "./components/youtubeVideos";
import YoutubeErrorMessage from "./components/youtubeErrorMessage";
import ArtistList from "./components/artistList";
import ErrorMessage from "./components/apiRequestError";
import LoadingScreen from "./components/loadingLogo";

export default function Home() {
  const [bandInput, setBandInput] = useState(null);
  const [artistsList, setArtistList] = useState(null);
  const [showArtists, setShowArtists] = useState(null);
  const [pastGigs, setPastGigs] = useState(null);
  const [showGigs, setShowGigs] = useState(null);
  const [youtubeVideos, setYoutubeVideos] = useState({
    error: null,
    message: "",
    data: "",
  });
  const [loading, setLoading] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [error, setError] = useState({ error: null, message: null });

  return (
    <div className="bg-gradient-to-t from-blue-200 to-blue-400 w-full h-screen font-serif">
      {/* Resets all state on click and reverts back to the mains screen */}
      <ResetButton
        setShowGigs={setShowGigs}
        showGigs={showGigs}
        pastGigs={pastGigs}
        showArtists={showArtists}
        setShowArtists={setShowArtists}
        setArtistList={setArtistList}
        setYoutubeVideos={setYoutubeVideos}
        setPastGigs={setPastGigs}
        setShowSearchBar={setShowSearchBar}
        setBandInput={setBandInput}
        setError={setError}
        setLoading={setLoading}
      />
      <div className="flex flex-col justify-center items-center pt-10">
        <Header />

        {/* Gets the users input and sets the Artists List using the API */}
        <SearchBar
          setLoading={setLoading}
          gigSet={setPastGigs}
          setShowSearchBar={setShowSearchBar}
          showSearchBar={showSearchBar}
          input={bandInput}
          setBandInput={setBandInput}
          setArtistList={setArtistList}
          setShowArtists={setShowArtists}
          setError={setError}
        />
      </div>

      {/* Gets the users input and sets the Past Gigs using the API */}
      <ArtistList
        showArtists={showArtists}
        setShowArtists={setShowArtists}
        artistsList={artistsList}
        setShowGigs={setShowGigs}
        setPastGigs={setPastGigs}
        setLoading={setLoading}
        setError={setError}

      />

      <div className="mx-10 transition duration-1000 ease-in-out">
        {/*Displays a map using the LeafletJS API, Gets the users input and sets the Youtube Videos using the API */}
        <PastGigs
          gigs={pastGigs}
          setShowGigs={setShowGigs}
          showGigs={showGigs}
          bandInput={bandInput}
          setYoutubeVideos={setYoutubeVideos}
          setLoading={setLoading}
   

        />
      </div>

      {/*  If the youtbe videos state is set this will return a div of imbedded youtube videos for the user*/}
      <ImbededYoutubeVideos videos={youtubeVideos} />

      {/* If there is an error with the youtube api, most likely the api limit has been reached this will display */}
      <YoutubeErrorMessage
        error={youtubeVideos.error}
        message={youtubeVideos.message}
      />

      {/* Shows if an error is set, and displays the message */}
      <ErrorMessage error={error} />

      {/*  While the loading state is true this displays */}
      <LoadingScreen loading={loading} />
    </div>
  );
}
