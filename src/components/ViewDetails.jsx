import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const item = useLoaderData();
  const {
    name,
    subcategory,
    imageUrl,
    description,
    price,
    rating,
    customization,
    time,
    stockStatus,
    userName,
    userEmail,
  } = item;
  return (
    <div>
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-80" src={imageUrl} alt="craft" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h2 className="card-title">{subcategory}</h2>
            <p>{description}</p>
            <p>Customization: {customization}</p>
            <p>Price: {price}</p>
            <p>Stock Status: {stockStatus}</p>
            <p>Making Time: {time}</p>
            <p>Rating: {rating}</p>
            <p>User Nme: {userName}</p>
            <p>User Email: {userEmail}</p>
            <p>
              Want to add your craft item?
              <br />
              <Link to="/addArtAndCraft">
                <button>Click Here</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
