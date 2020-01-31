import React from 'react'

function DisplayedItems (props) {
  return (
    <div className="displayBox">
      <h2 className="indexNumber">{props.data.id}/25</h2>
      <div className="personName">
        {props.data.name.first} {props.data.name.last}
      </div>
      <div className="firstList">
        <li>From: {props.data.city}, {props.data.country}</li>
        <li>Job Title: {props.data.title}</li>
        <li>Employer: {props.data.employer}</li>
      </div>
      <div className="secondList">
        Favorite Movies:
        <li>{props.data.favoriteMovies[0]}</li>
        <li>{props.data.favoriteMovies[1]}</li>
        <li>{props.data.favoriteMovies[2]}</li>
      </div>
    </div>
  )
}

export default DisplayedItems