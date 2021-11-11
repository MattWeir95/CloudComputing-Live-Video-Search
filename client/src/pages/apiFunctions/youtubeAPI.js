//Gets an array of youtube videos from the API and sets the state
export default function getYoutubeVideos(
  keyword,
  setYoutubeVideos,
  setLoading, setError
) {

  //Environment variables, if they arent set, set them to these default values
  var server_port = process.env.REACT_APP_NODE_SERVER_PORT;
  var host = process.env.REACT_APP_SERVER_HOST_NAME;
  if(!server_port){
    server_port = 8000;
  }
  if(!host){
    host = "localhost";
  }
  const URL = "http://" + host + ":" + server_port+"/youtube/";

  if (keyword) {
    setLoading(true);
    fetch(URL + keyword)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);

        if (data.status === 403) {
          setError({error: true, message: "Error, Please try a different event."})
          return setYoutubeVideos({
            error: true,
            message: "Error, Youtube API Quota has been reached, Resets at 5pm",
            data: data,
          });
        }
        if(data.status === 404){
          return setYoutubeVideos({
            error: true,
            message: "Error, Please try a different event.",
            data: data,
          });
        }
        if (!data) {
          return setYoutubeVideos({
            error: true,
            message:
              "An error has occured with the youtube API, reset and try again or contact admin.",
            data: data,
          });
        } else {
          return setYoutubeVideos({
            error: false,
            message: "success",
            data: data,
          });
        }
      })
      .catch((e) => {
        setLoading(false);

        console.log("catch");
        console.log(e);
      });
  }
}
