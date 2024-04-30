import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const item = useLoaderData();

  const {
    _id,
    name,
    imageUrl,
    price,
    rating,
    stockStatus,
    subcategory,
    description,
    time,
    customization,
  } = item;
  console.log(_id);

  const handleUpdate = (event) => {
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

    const updatedItem = {
      name,
      subcategory,
      imageUrl,
      description,
      price,
      rating,
      customization,
      time,
      stockStatus,
    };
    console.log(updatedItem);

    fetch(`http://localhost:5000/myList/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your art & craft item updated Successfully!!",
            icon: "success",
            confirmButtonText: "Ok!",
          });
        }
      });
  };
  return (
    <div className="items-center text-center flex flex-col justify-center">
      <h1>Add Art And Craft Item</h1>
      <form onSubmit={handleUpdate} className=" w-2/3">
        <div className="w-full">
          <div className="md:flex  gap-2 w-full">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="Item Name "
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs input  "
                name="subcategory"
                defaultValue={subcategory}
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
                defaultValue={imageUrl}
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
                defaultValue={description}
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={customization}
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
                defaultValue={time}
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
                defaultValue={stockStatus}
                type="text"
                placeholder="Stock Status"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <input type="submit" value="Update" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
