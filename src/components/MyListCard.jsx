import { Link } from "react-router-dom";

const MyListCard = ({ item }) => {
  const { _id, name, imageUrl, price, rating, stockStatus } = item;
  console.log(_id);
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
        </div>
        <div className="flex justify-between">
          <Link to="/update">
            <button>Update</button>
          </Link>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;
