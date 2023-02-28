import { useState } from "react";
import "./Card.css";

const Card = ({ languages }) => {
  const [clickedIndexes, setClickedIndexes] = useState([]);

  const handleClick = (index) => {
    if (clickedIndexes.includes(index)) {
      setClickedIndexes(clickedIndexes.filter((i) => i !== index));
    } else {
      setClickedIndexes([...clickedIndexes, index]);
    }
  };

  return (
    <div className="screen">
      {languages.map(({ name, img, options }, index) => (
        <div className="card" key={index} onClick={() => handleClick(index)}>
          {clickedIndexes.includes(index) ? (
            <div className="options">
              <ul>
                {options.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}

                {/* <li>{options[0]}</li>
                <li>{options[1]}</li>
                <li>{options[2]}</li> */}
              </ul>
            </div>
          ) : (
            <>
              <div className="photo">
                <img src={img} alt="" className="img" />
              </div>
              <div className="name">
                <p>{name}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
