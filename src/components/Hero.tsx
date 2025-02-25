import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Mockup {
  title: string;
  image: string;
  alt: string;
}

const mockups: Mockup[] = [
  {
    title: 'homeImage1',
    image: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483603/mommy/vvwpw9kly65ycybfnycj.png',
    alt: 'MOMMYcare+ Home Screen'
  },
  {
    title: 'homeImage2',
    image: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483611/mommy/xdgrldbxhzsd1rgwblea.png',
    alt: 'MOMMYcare+ Library Screen'
  },
  {
    title: 'homeImage3',
    image: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483604/mommy/vnp0icnteqxdhdfbswqp.png',
    alt: 'MOMMYcare+ Features Screen'
  }
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white background-page">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Supporting Your Journey Through Motherhood
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8">
              A postpartum wellness app designed to support moms in their recovery journey, mental health, and newborn care.
            </p>
          </motion.div>

          {/* Right Side - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="w-full mx-auto home-pic-section"
            >
              {mockups.map((mockup) => (
                <SwiperSlide key={mockup.title}>
                  <img
                    src={mockup.image}
                    alt={mockup.alt}
                    className="w-full h-auto sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
