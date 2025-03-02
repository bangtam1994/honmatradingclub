import { useState } from "react";
import Slider from "react-slick";
import { testimonials } from "@/utils/testimonials";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const TestimonialsBanner = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      // id="testimonials-section"
      className="relative w-full max-w-[1400px] m-auto overflow-hidden p-6 md:p-16"
    >
      {/* <img
        // src={Background}
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-[-1] bg-black"
        alt="Background"
      /> */}
      <MotionWrapper>
        <div className="flex justify-center">
          <motion.h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-700 bg-clip-text text-transparent text-center py-10 mb-2 md:mb-10">
            Témoignages{" "}
          </motion.h1>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-2">
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="cursor-pointer transition-transform transform hover:scale-105 text-center rounded-[20px] flex justify-center items-center"
                    onClick={() => setActiveImage(testimonial.image)}
                  >
                    <img
                      className="w-full md:w-[440px] object-cover  rounded-2xl md:h-[440px]"
                      alt={testimonial.image}
                      src={`${import.meta.env.BASE_URL}${testimonial.image}`}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="border-none focus-within:outline-none">
                  <img
                    src={activeImage || ""}
                    alt="Fullscreen Testimonial"
                    className="scale-100 md:scale-125 rounded-2xl border-none hover:scale-150 transition-transform duration-200"
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </Slider>
      </MotionWrapper>
    </div>
  );
};

export default TestimonialsBanner;
