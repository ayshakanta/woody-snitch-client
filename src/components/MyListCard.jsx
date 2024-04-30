import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListCard = ({ item, items, setItems }) => {
  const { _id, name, imageUrl, price, rating, stockStatus } = item;
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myList/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft item has been deleted.",
                icon: "success",
              });
              const remaining = items.filter((item) => item._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };
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
          <Link to={`update/${_id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;
