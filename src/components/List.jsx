import '../css/list.css'
import {Card,ExtendedCard} from "./Card";
import image from "../assets/images/1917.jpg";

export function List({heading, array}) {
  

  return (
    <div className="Movie-List">
      <div className="topbar">
        <div className="heading">{heading}</div>
        {/* <div className="extend">See All</div> */}
      </div>
      <div className="movies">
        {array.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            img_src={item.poster_path}
            rating={item.vote_average}
            
          />
        ))}
      </div>
    </div>
  );
}


export function ExtendedList({array}) {
  // if(array.length == 0)
  //   return (
  //     <div>
  //       <h1>No Results Found</h1>
  //     </div>
  //   )
  return (
    <div className="extended-list">
      {array != null
        ? array.map((item) => (
            <ExtendedCard
              key={item.id}
              id={item.id}
              img_src={item.poster_path}
              release_date={item.release_date}
              overview={item.overview}
              title={item.title}
              rating={item.vote_average}
            />
          ))
        : ""}
    </div>
  );
}