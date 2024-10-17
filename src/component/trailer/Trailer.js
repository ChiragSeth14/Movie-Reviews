import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () => {

    let params = useParams();
    const key = params.ytTrailerId;
    return (
        <div>
            {
                (key != null) ?
                    <ReactPlayer controls="true" playing={true} url={`https://youtube.com/watch?v=${key}`}
                        height="100%" weight="100%" />
                    : null
            }
        </div>
    );
}

export default Trailer;