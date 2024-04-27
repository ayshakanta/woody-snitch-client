import { Link } from "react-router-dom";

const MyList = () => {
  return (
    <div>
      <h2>My art and craft list </h2>
      <Link to="/update">
        <button>Update</button>
      </Link>
    </div>
  );
};

export default MyList;
