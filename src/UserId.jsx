import { useParams } from "react-router-dom";

function UserId(){
    let {userName} = useParams();
    return(
        <div>
            <a className='user__button' href="/users">Back</a>
            <h1 className='user'>User: {userName}</h1>
        </div>
    )

}

export default UserId;