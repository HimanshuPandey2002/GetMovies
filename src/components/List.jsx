import React from 'react'
import Movie from './Movie';
import MadMax from "../assets/images/mad max.jpg"
import '../css/list.css'

function List({heading}) {
    return (
      <div className="Movie-List">
        <div className="topbar">
          <div className="heading">{heading}</div>
          <div className="extend">See All</div>
        </div>
        <div className="movies">
          <Movie img_src={MadMax} title="Mad Max" rating="8.3" />
          <Movie img_src={MadMax} title="Mad Max" rating="8.3" />
          <Movie img_src={MadMax} title="Mad Max" rating="8.3" />
          <Movie img_src={MadMax} title="Mad Max" rating="8.3" />
          <Movie img_src={MadMax} title="Mad Max" rating="8.3" />
          <Movie img_src={MadMax} title="Mad Max" rating="8.3" />
          <Movie img_src={MadMax} title="Mad Max" rating="8.3" />
        </div>
      </div>
    );
}

export default List
