
import { Link } from "react-router-dom";
import './null.scss';
//*import './cards/card.scss';
import { useEffect, useState } from 'react';

//fetch запрос не работает ссылка

export const NewYear = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('	https://api.itbook.store/1.0/').then((res) => {
      return res.json()
    }).then((json) => {
      setItems(json);
      console.log(items);
    });
  }, []);

  return (
    <div className="card2">

      {items.map((props) => (
        <div >


          <div className="cardContent2"  >
            <img src={props.image} alt="" />
            <div className="cardContentText2">
              <h1><Link>{props.books.title}</Link></h1>
              <Link className="cardContentShot2">{props.books.subtitle}</Link>
              <p>{props.books.price}</p>
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}
