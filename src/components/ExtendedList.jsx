import "../css/list.css";
import ExtendedCard from "./ExtendedCard";
import Card from './Card'

function ExtendedList({ array }) {
  if (array == null || array.length == 0)
    return (
      <div className="not-found">
        <h1>No Results!!</h1>
      </div>
    );
  return (
    <div className="extended-list">
      {array != null
        ? array.map((item) => (
            <Card
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


export default ExtendedList;