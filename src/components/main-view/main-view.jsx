import React from 'react';

class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Movie1', Description: 'TBD', ImagePath: '...'},
                { _id: 2, Title: 'Movie2', Description: 'TBD', ImagePath: '...'},
                { _id: 3, Title: 'Movie3', Description: 'TBD', ImagePath: '...'}
            ]
        }
    }

    render() {
        const movies = this.state.movies;
        if (movies.length === 0) {
            return <div className="main-view">
                The List is Empty
            </div>
        } else {
            return (
                <div className="main-view">
                    {movies.map((movie) => {
                        return <div>{movie.Title}</div>;
                    })}
                </div>
            );
        }
    }
}

export default MainView;