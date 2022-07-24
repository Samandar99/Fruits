import { CategoryItem } from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="P-block">
    
      {/* <button className="P-Button">Vegetable</button> */}
      {/* <img src="" alt="" /> */}
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
      
    </div>
  );
}

export { CategoryList };
