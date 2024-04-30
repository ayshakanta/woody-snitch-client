import { useLoaderData } from "react-router-dom";
import CraftItem from "../components/CraftItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../assets/images/slidea.jpg";
import slide2 from "../assets/images/slideb.jpg";
import slide3 from "../assets/images/slidec.jpg";

const Home = () => {
  const craftItems = useLoaderData();
  return (
    <div>
      <h2>this is home</h2>

      <div>
        <h2>Banner section</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={slide1} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold"></h1>
                  <p className="py-6"></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={slide2} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold"></h1>
                  <p className="py-6"></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={slide3} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold"></h1>
                  <p className="py-6"></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={slide1} className="w-1/2 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold"></h1>
              <p className="py-6"></p>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={slide1} className="w-1/2 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold"></h1>
              <p className="py-6"></p>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={slide1} className="w-1/2 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold"></h1>
              <p className="py-6"></p>
            </div>
          </div>
        </div> */}
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
