import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddItem = () => {
  const { user } = useContext(AuthContext);

  const handleAddItem = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const imageUrl = form.imageUrl.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const stockStatus = form.stockStatus.value;
    const userName = form.userName.value;
    const userEmail = user.email;

    const newItem = {
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
    };
    console.log(newItem);

    fetch(
      " https://woody-snitch-server-1vh7dfyj0-ayshas-projects-55bed21a.vercel.app/addItem",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your art & craft item added Successfully!!",
            icon: "success",
            confirmButtonText: "Ok!",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="items-center text-center flex flex-col justify-center bg-amber-50 mt-20 mb-20 p-5">
      <h1 className="text-3xl font-bold p-10">Add Art And Craft Item</h1>
      <form onSubmit={handleAddItem} className=" w-2/3  ">
        <div className="w-full ">
          <div className="md:flex  gap-2 w-full">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Item Name "
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex-1 w-full">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <select
                className="select select-bordered w-full  input  "
                name="subcategory"
                type="text"
                placeholder="Subcategory Name"
                required
              >
                <option value="Wooden Furniture & Sculptures">
                  Wooden Furniture & Sculptures
                </option>
                <option value="Wooden Home Decor">Wooden Home Decor</option>
                <option value="Wooden Utensils and Kitchenware">
                  Wooden Utensils and Kitchenware
                </option>
                <option value="Jute Home Decor">Jute Home Decor</option>
                <option value="Jute Kitchenware & utensils">
                  Jute Kitchenware & utensils
                </option>
                <option value="Jute and wooden jewellery">
                  Jute and wooden jewellery
                </option>
              </select>
            </div>
          </div>
          <div className="md:flex w-full gap-2">
            <div className=" flex-1">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="imageUrl"
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex w-full gap-2">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                name="rating"
                type="text"
                placeholder="Rating "
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex w-full gap-2">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <input
                name="customization"
                type="text"
                placeholder="Yes/No"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                name="time"
                type="text"
                placeholder="Processing Time"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex w-full gap-2">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <input
                name="stockStatus"
                type="text"
                placeholder="Stock Status"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="userName"
                type="text"
                placeholder="User Name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              name="userEmail"
              defaultValue={user.email}
              type="email"
              placeholder="User Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <input
            type="submit"
            value="Add"
            className="btn btn-block mt-10 text-white mb-5 bg-amber-600"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
