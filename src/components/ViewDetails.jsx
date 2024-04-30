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
    <div className="w-full mt-10 mb-10  items-center flex flex-col justify-center ">
      <div className="w-2/3 ">
        <div className=" w-full bg-base-100 shadow-xl">
          <figure>
            <img className=" w-full" src={imageUrl} alt="craft" />
          </figure>
          <div className="card-body   text-amber-900">
            <h2 className="text-3xl font-bold mb-4">{name}</h2>
            <h2 className="card-title mb-2">{subcategory}</h2>
            <p className="font-bold">{description}</p>
            <p>
              <span className="font-bold mb-3">Customization: </span>{" "}
              {customization}
            </p>
            <p>
              <span className="font-bold mb-3">Price: </span> {price}
            </p>
            <p>
              <span className="font-bold mb-3">Stock Status: </span>{" "}
              {stockStatus}
            </p>
            <p>
              <span className="font-bold mb-3">Making Time: </span> {time}
            </p>
            <p>
              <span className="font-bold mb-3">Rating: </span> {rating}
            </p>
            <p>
              <span className="font-bold mb-3">User Nme: </span>
              {userName}
            </p>
            <p>
              <span className="font-bold mb-3">User Email:</span> {userEmail}
            </p>
            <p className="mt-5">
              Want to add your craft item?
              <br />
              <Link to="/addArtAndCraft">
                <button className="font-bold">Click Here</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
