import { useLoaderData } from "react-router-dom";
import CraftItem from "../components/CraftItem";
import { useTypewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRegLightbulb, FaRegPaperPlane } from "react-icons/fa";

import slide1 from "../assets/images/slidea.jpg";
import slide2 from "../assets/images/slideb.jpg";
import slide3 from "../assets/images/slidec.jpg";
import contact from "../assets/images/contact.png";
import { GoPeople } from "react-icons/go";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Custom Wood Works For Your Custom Test"],
    loop: 0,
  });

  const craftItems = useLoaderData();
  return (
    <div className="mx-5 lg:mx-20 md:mx-10  ">
      {/* slider section */}
      <div className="bg-amber-100 p-6  mt-20 mb-20">
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
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={slide1} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">
                    Unique Handcrafted Creations
                  </h1>
                  <p className="py-6">
                    Explore a diverse range of jute and wooden crafts, each
                    meticulously handcrafted by skilled artisans, offering
                    unique and one-of-a-kind items for your home or gifting
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={slide2} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">Artisanal Tradition</h1>
                  <p className="py-6">
                    Immerse yourself in the rich heritage of artisanal
                    craftsmanship, celebrating age-old techniques passed down
                    through generations, resulting in high-quality and authentic
                    pieces that reflect cultural heritage.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={slide3} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">
                    Customization and Personalization
                  </h1>
                  <p className="py-6">
                    Tailor your purchases to your preferences with customization
                    options available, allowing you to create bespoke pieces
                    that resonate with your individual taste and lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* craft item section */}
      <div className="bg-amber-50 mt-20 mb-20 items-center rounded-md">
        <h2 className="text-2xl font-bold text-center p-6">
          Our Art And Crafts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {craftItems.slice(0, 6).map((item) => (
            <CraftItem key={item._id} item={item}></CraftItem>
          ))}
        </div>
      </div>

      {/* Art and craft categories section */}

      <div></div>

      {/* why chose us  */}

      <div className="lg:flex justify-between mt-10 mb-10 pt-10 pb-10 space-y-4 gap-4 bg-amber-50 p-5">
        <div className="flex-1">
          <h2 className="font-bold text-amber-700 mb-5">Why Chose Us</h2>
          <h1 className="text-3xl font-bold text-amber-900 mb-5">{text}</h1>
          <div className="">
            <div className="flex gap-2 mb-3">
              <FaRegPaperPlane className="w-14" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Years Experience</h2>
                <p>
                  With 10 years of experience in the industry, we have honed our
                  craft and expertise in curating the finest selection of jute
                  and wooden crafts, ensuring top-notch quality and customer
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <GoPeople className="w-14" />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Professional Staffs
                </h2>
                <p>
                  Our dedicated team of artisans and craftsmen are highly
                  skilled professionals who are passionate about their work.
                  They bring years of expertise and attention to detail to every
                  piece they create, ensuring that each item meets the highest
                  standards of craftsmanship.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <FaRegLightbulb className="w-14" />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Affordable Prices
                </h2>
                <p>
                  We believe that everyone should have access to beautiful and
                  sustainable jute and wooden crafts without breaking the bank.
                  That is why we strive to offer our products at affordable
                  prices, making them accessible to customers from all walks of
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={slide3} alt="" />
        </div>
      </div>

      {/* contact with us  */}
      <div className="lg:flex justify-between gap-5 mt-10 p-10">
        <div className="pt-5 items-center justify-center">
          <h2 className="font-bold text-amber-700 mb-5">Contact</h2>
          <h1 className="text-3xl font-bold text-amber-900 mb-5">
            Get In touch
          </h1>
          <p>
            Have a question or want to learn more about our products and
            services? Do not hesitate to reach out to us! Our friendly and
            knowledgeable team is here to assist you with any inquiries you may
            have.
          </p>
          <div className="flex justify-between mt-5 ">
            <div>
              <h2 className="text-amber-700">Address</h2>
              <p>Woody Snitch Studio</p>
              <p>323, Valley Lane, Austin</p>
            </div>
            <div>
              <div>
                <h2 className="text-amber-700">Contact</h2>
                <p>woodysnitch@gmail.com</p>
                <p>+1 234 678 908</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={contact} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
