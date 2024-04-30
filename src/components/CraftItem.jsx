import { Link } from "react-router-dom";

const CraftItem = ({ item }) => {
  const { _id, name, imageUrl, price, rating, stockStatus } = item;
  return (
    <div>
      <div className="card card-compact w-96 md:w-80 lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80" src={imageUrl} alt="craft" />
        </figure>
        <div className="card-body text-amber-900">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="text-lg font-bold">Price: </span>
            {price}
          </p>
          <p>
            <span className="text-lg font-bold">Stock Status: </span>
            {stockStatus}
          </p>
          <p>
            <span className="text-lg font-bold">Rating: </span>
            {rating}
          </p>

          <div className="card-actions justify-end">
            <Link to={`viewDetails/${_id}`}>
              <button className="btn   bg-amber-700 border-none text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;
