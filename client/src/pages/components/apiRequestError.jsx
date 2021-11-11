export default function ErrorMessage(props){
    if(props.error.error){
        return(
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl" >
            <p>{props.error.message}</p>
        </div>
        )
    }else{
        return null
    }
   
}