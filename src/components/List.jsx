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
            title={item.title}
            img_src={item.poster_path}
            rating={item.vote_average}
          />
        ))}
      </div>
    </div>
  );
}


export function ExtendedList() {
  return (
    <div className="extended-list">
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
      <ExtendedCard overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?" />
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
      <ExtendedCard
        img_src={image}
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias deserunt dolorem unde vitae at inventore ipsa, facilis cupiditate quod, iure laudantium in distinctio? Eum veniam deserunt tenetur dolorem provident, sint repellat ut quae in assumenda ratione animi, id minima neque est maiores ducimus. Delectus, corrupti? Exercitationem est quas reiciendis?"
      />
    </div>
  );
}