import { Link } from "react-router-dom";

const CraftItem = ({ item }) => {
  const { _id, name, imageUrl, price, rating, stockStatus } = item;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80" src={imageUrl} alt="craft" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Stock Status: {stockStatus}</p>
          <p>Rating: {rating}</p>

          <div className="card-actions justify-end">
            <Link to={`viewDetails/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;
