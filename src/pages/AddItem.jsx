import Swal from "sweetalert2";

const AddItem = () => {
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
    const userEmail = form.userEmail.value;

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

    fetch("http://localhost:5000/addItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
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
    <div className="items-center text-center flex flex-col justify-center">
      <h1>Add Art And Craft Item</h1>
      <form onSubmit={handleAddItem} className=" w-2/3">
        <div className="w-full">
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
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <input
                name="subcategory"
                type="text"
                placeholder="Subcategory Name"
                className="input input-bordered w-full"
                required
              />
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
              type="email"
              placeholder="User Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <input type="submit" value="Add" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
