//Fetches the artist ids from the server api
export default function GetArtists(input, e, setLoading, setError, setArtistList) {
    
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
    e.preventDefault();
    if (input) {
      fetch("http://" + host + ":" + server_port+"/songKick/artists/" + input)
        .then((res) => {
          if (res.status === 404) {
    setLoading(false);

            setError({
              error: true,
              message: "Arist not found, Please reset.",
            });
          }
          if (res.status === 405) {
            setLoading(false);
                    setError({
                      error: true,
                      message: "Arist not found, Please reset.",
                    });
                  }
          
          if (res.status === 500) {
    setLoading(false);

            setError({
              error: true,
              message: "Bad input, Please reset.",
            });
          }
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          if (data) {
            setLoading(false);
            setArtistList(data);
          }
        })
        .catch((e) => {
          setLoading(false);

          setError({ error: true, message: e.message });
        });
    }
  }