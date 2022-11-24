import { products } from './productsArray';
import { AiFillHeart } from "react-icons/ai";

import { Link, useParams } from "react-router-dom";
import '../null.scss';
import './card.scss';
import { useState } from 'react';



export const CardCategorie = (props) => {
  const [isLike, setIsLike] = useState(false);
  const onClickLike = () => {
    setIsLike(!isLike);
  }
  return (
    <div className="card">

      {products.map((props) => (
        <div >
                 
          <AiFillHeart onClick={onClickLike} className={isLike ? 'heartLike' : 'heartUnLike'}/>
                 
          <div className="cardContent" key={props.id} >
            <img src={props.img} alt='image of the book' />
            <div className="cardContentText">
              <Link className="cardContentAuthor">{props.author}</Link>
              <h1><Link>{props.name}</Link></h1>
              <Link className="cardContentShot">{props.aboutShot}</Link>
              <p>{props.price}<span> руб.</span></p>
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}


