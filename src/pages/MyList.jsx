import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../providers/AuthProvider";
import MyListCard from "../components/MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [user]);
  return (
    <div>
      <label>Customization</label>
      <select
        className="select select-bordered w-full max-w-xs input  "
        name="customization"
        type="text"
        placeholder="customization"
        required
      >
        <option value="yes">yes</option>
        <option value="no">no</option>
      </select>
      {items.map((item) => (
        <MyListCard
          key={item._id}
          item={item}
          items={items}
          setItems={setItems}
        ></MyListCard>
      ))}
    </div>
  );
};

export default MyList;
