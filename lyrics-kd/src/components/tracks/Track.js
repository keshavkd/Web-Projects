import React from 'react'
import { Link } from 'react-router-dom'

export default function Track(props) {

    const { track } = props

    return (
        <div className="col-md-6 col-sm-12">
            <div className="card-new mb-4 shadow">
                <div className="card-body">
                    <h5>{track.track_name}</h5>
                    <p className="card-text">
                        <i className="fas fa-user"></i>Artist: {track.artist_name}
                        <br/>
                        <i className="fas fa-compact-disc"></i>Album: {track.album_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-light btn-block">
                        View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}
