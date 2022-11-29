
import { AiFillHeart } from "react-icons/ai";

import { Link } from "react-router-dom";
import '../null.scss';
import './card.scss';
import { useState } from 'react';



export const CardCategorie = ({ id, img, author, name, aboutShot, price, onClickAdd, onClickFavorite }) => {

  const [isAdded, setIsAdded] = useState(false);

  const [isLike, setIsLike] = useState(false);

  const onClickLike = () => {
    onClickFavorite({ id, img, name, price });
    setIsLike(!isLike);
  };

  const onClickAddDrawer = () => {
    onClickAdd({ id, img, name, price });
    setIsAdded(!isAdded)
  }


  return (
    <div className="card">

      <AiFillHeart onClick={onClickLike} className={isLike ? 'heartLike' : 'heartUnLike'} />

      <div className="cardContent" key={id} >

        <img src={img} alt='image of the book' />

        <div className="cardContentText">
          <Link className="cardContentAuthor">{author}</Link>
          <h1><Link>{name}</Link></h1>
          <Link className="cardContentShot">{aboutShot}</Link>
          <p>{price}<span> руб.</span></p>
          <button onClick={onClickAddDrawer} >Добавить в корзину</button>

        </div>
      </div>


    </div>
  )
}


