import { Link, useLoaderData } from "react-router-dom";

const AllItem = () => {
  const allCraftItems = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Stock Status</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allCraftItems.map((item) => (
              <tr key={item._id}>
                <th></th>
                <td>{item.name}</td>
                <td>{item.stockStatus}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/details/${item._id}`}>
                    <button>Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItem;
