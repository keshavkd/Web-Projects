import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

export default class Search extends Component {

    state = {
        trackTitle: '',
    }

    findTrack = (dispatch, e) => {
        e.preventDefault()
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${ 
            this.state.trackTitle }&page_size=10&page=1&s_track_rating=desc&apikey=${
             process.env.REACT_APP_KEY }`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                })
                // this.setState({ track_list: res.data.message.body.track_list })
            })
            .catch(err => console.log(err)) 
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <Consumer>
                { value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body mb-4 p-4 shadow-sm">
                            <h1 className="display-4 text-center search-4">Search For A Song</h1>
                            <p className="lead text-center"><i className="fas fa-music"></i> Get the lyrics to any song!</p>
                            <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                <div className="form-group my-3">
                                    <div className="input-group">
                                        <input className="form-control form-control-lg mx-auto" 
                                        type="text"
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange.bind(this)}
                                        placeholder="Enter the song title..." ></input>
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-info">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
