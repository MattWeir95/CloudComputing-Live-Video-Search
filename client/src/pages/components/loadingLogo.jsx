//When the loading state is true this shows
export default function LoadingScreen(props) {
  if (props.loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <button
          type="button"
          className="bg-rose-600 border border-white rounded shadow-xl text-white p-4 animate-bounce"
        >
          Loading
        </button>
      </div>
    );
  } else {
    return null;
  }
}
