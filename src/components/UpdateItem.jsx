import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  const { _id, name, imageUrl, price, rating, stockStatus } = item;
  console.log(_id);
  return (
    <div>
      <h2>update your item: {name}</h2>
    </div>
  );
};

export default UpdateItem;
