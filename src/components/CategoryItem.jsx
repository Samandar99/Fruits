import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;

  return (
    <div id="CategoryItem" className="P-box">
      <button className="P-Button">Vegetable</button>
      {/* {idCategory} */}

      <div className="img-box-P"></div>
      
      <img className="P-img" src={strCategoryThumb} alt="" />

      <div className="P-footer">
        <span className="P-name">{strCategory}</span>
        <hr className="drow" />
        <div className="P-price">
          <div>
            <span className="P-price-text">$ 25.00 USD</span>
            <span className="cost">$ 21.00 USD</span>
          </div>
          <div className="P-stars">
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CategoryItem };
