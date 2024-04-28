import { useLoaderData } from "react-router-dom";
import CraftItem from "../components/CraftItem";

const Home = () => {
  const craftItems = useLoaderData();
  return (
    <div>
      <h2>this is home</h2>

      <div>
        <h2>Banner section</h2>
      </div>
      <div>
        <h2>Craft items section : {craftItems.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {craftItems.slice(0, 6).map((item) => (
            <CraftItem key={item._id} item={item}></CraftItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
