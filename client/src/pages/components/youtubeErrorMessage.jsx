//To be shown if the youtube API has any errors

export default function YoutubeErrorMessage(props) {
  if (props.error) {
    return (
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
        <p>{props.message}</p>
      </div>
    );
  } else {
    return null;
  }
}
