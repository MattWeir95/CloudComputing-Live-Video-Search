 // Sets the pastgigs state with an array of events
 export default function GetPastGigs(artistId, setLoading, setError, setPastGigs) {

  //Environment variables, if they arent set, set them to these default values
  var server_port = process.env.REACT_APP_NODE_SERVER_PORT;
  var host = process.env.REACT_APP_SERVER_HOST_NAME;
  if(!server_port){
    server_port = 8000;
  }
  if(!host){
    host = "localhost";
  }
  setLoading(true);
  if (artistId) {
    fetch("http://" + host + ":" + server_port+"/songKick/pastGig/" + artistId)
      .then((res) => {
        if (res.status === 405) {
          setLoading(false);
      
                  setError({
                    error: true,
                    message: "No Gigs found, Please reset",
                  });
                }
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setLoading(false);

        if(data){
          setPastGigs(data.resultsPage.results.event);

        }
      })
      .catch((e) => {
        setLoading(false);

        console.log(e);
      });
  }
}
