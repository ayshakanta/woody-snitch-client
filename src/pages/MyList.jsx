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
      {items.map((item) => (
        <MyListCard key={item._id} item={item}></MyListCard>
      ))}
    </div>
  );
};

export default MyList;
