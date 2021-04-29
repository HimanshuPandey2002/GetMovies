import '../css/list.css'
import Card from "./Card";

function List({heading, array}) {

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

export  default List