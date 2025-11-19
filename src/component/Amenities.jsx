import "./Amenities.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function Amenities() {
  const data = [
  {
    name: "Swimming Pool",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  },
  {
    name: "Gym",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png",
  },
  {
    name: "Parking",
    icon: "https://cdn-icons-png.flaticon.com/512/854/854929.png",
  },
  {
    name: "24/7 Security",
    icon: "https://cdn-icons-png.flaticon.com/512/1047/1047694.png",
  },
  {
    name: "CCTV Surveillance",
    icon: "https://cdn-icons-png.flaticon.com/512/71/71621.png",
  },
  {
    name: "Kids Play Area",
    icon: "https://cdn-icons-png.flaticon.com/512/3076/3076820.png",
  },
  {
    name: "Garden & Landscaping",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    name: "Club House",
    icon: "https://cdn-icons-png.flaticon.com/512/3190/3190572.png",
  },
  // {
  //   name: "Power Backup",
  //   icon: "https://cdn-icons-png.flaticon.com/512/3106/3106794.png",
  // },
  // {
  //   name: "Indoor Games",
  //   icon: "https://cdn-icons-png.flaticon.com/512/3081/3081871.png",
  // },
  // {
  //   name: "Jogging Track",
  //   icon: "https://cdn-icons-png.flaticon.com/512/85/85344.png",
  // },
  // {
  //   name: "Lift / Elevator",
  //   icon: "https://cdn-icons-png.flaticon.com/512/2665/2665034.png",
  // },
];

  return (
    <section className="container my-5 pt-4" id="amenities">
      <h2 className="text-center fw-bold mb-4">Amenities</h2>

      <div className="row g-4">
        {data.map((item) => (
          <div className="col-6 col-md-3 text-center" key={item.name}>
            <div className="amenity-box">
              <img src={item.icon} width="55" alt={item.name} />
              <p className="mt-2 fw-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      
     <Swiper
  modules={[Autoplay, Pagination, EffectFade]}
  autoplay={{ delay: 2500 }}
  effect="fade"
  pagination={{ clickable: true }}
  loop={true}
  className="amenities-swiper mt-4"
>

  {/* Swimming Pool */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Swimming Pool</h5>
  </SwiperSlide>

  {/* Gym */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Gym & Fitness</h5>
  </SwiperSlide>

  {/* Parking */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/235226/pexels-photo-235226.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Parking</h5>
  </SwiperSlide>

  {/* 24/7 Security */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/33116233/pexels-photo-33116233.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">24/7 Security</h5>
  </SwiperSlide>

  {/* CCTV Surveillance */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">CCTV Surveillance</h5>
  </SwiperSlide>

  {/* Kids Play Area */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/163077/pexels-photo-163077.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Kids Play Area</h5>
  </SwiperSlide>

  {/* Garden & Landscaping */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Garden & Landscaping</h5>
  </SwiperSlide>

  {/* Club House */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Club House</h5>
  </SwiperSlide>

  {/* Power Backup */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/1169101/pexels-photo-1169101.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Power Backup</h5>
  </SwiperSlide>

  {/* Indoor Games */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/163064/playroom-children-inside-toys-163064.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Indoor Games</h5>
  </SwiperSlide>

  {/* Jogging Track */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/371539/pexels-photo-371539.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Jogging Track</h5>
  </SwiperSlide>

  {/* Lift / Elevator */}
  <SwiperSlide>
    <img src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg" className="img-fluid w-100 rounded shadow-lg" />
    <h5 className="slide-caption">Lift / Elevator</h5>
  </SwiperSlide>

</Swiper>


    </section>
  );
}

export default Amenities;
