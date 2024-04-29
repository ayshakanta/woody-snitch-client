import { useEffect } from "react";
import { Link } from "react-router-dom";

const MyList = () => {
  useEffect(() => {
    fetch(`http://localhost:5000/myList/`);
  }, []);
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
