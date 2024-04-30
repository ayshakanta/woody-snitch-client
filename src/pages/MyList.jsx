import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../providers/AuthProvider";
import MyListCard from "../components/MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [user]);

  const handleFilter = (e) => {
    const form = e.target.value;
    const customization = form.customization.value;
    setFilter(customization);
    if (customization === "") {
      setItems(items);
    } else {
      const filtered = items.filter(
        (item) => item.customization === customization
      );
      setFilter(filtered);
      setItems(filter);
    }
  };

  return (
    <div className="space-y-3 mx-10 mt-20 mb-20 ">
      <label>Customization</label>
      <form onSubmit={handleFilter}>
        <select
          className="select select-bordered w-full max-w-xs input "
          name="customization"
          type="text"
          placeholder="customization"
          required
        >
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </form>
      <div className=" grid grid-cols-1 lg:grid-cols-3">
        {items.map((item) => (
          <MyListCard
            key={item._id}
            item={item}
            items={items}
            setItems={setItems}
          ></MyListCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
