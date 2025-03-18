import { motion } from 'framer-motion';
// import { ChatBubbleLeftRightIcon, HeartIcon, BookOpenIcon, ClipboardDocumentCheckIcon, SparklesIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
// import type { ComponentType } from 'react';
import { FaTelegramPlane } from "react-icons/fa";

interface Feature {
  // icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  imageSrc: string;
}

const features: Feature[] = [
  {
    // icon: ChatBubbleLeftRightIcon,
    title: 'AI Chat Support',
    description: 'Get personalized, 24/7 support for all your postpartum care needs. Our AI-driven chat assistant is always available to answer your questions and offer advice.',
    imageSrc: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483601/mommy/apryxyapg1wcqhnqutia.png'
  },
  {
    // icon: HeartIcon,
    title: 'EPDS Questionnaire',
    description: 'Easily assess your emotional well-being with the Edinburgh Postnatal Depression Scale (EPDS) questionnaire. Get insights into your mental health and access resources for support.',
    imageSrc: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483611/mommy/jw2ezhkpbmpyjrwndd4g.png'
  },
  {
    // icon: BookOpenIcon,
    title: 'Content Library',
    description: 'Explore a rich collection of articles, guides, and expert advice on postpartum care, newborn care, breastfeeding, and overall well-being.',
    imageSrc: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483611/mommy/xdgrldbxhzsd1rgwblea.png'
  },
  {
    // icon: ClipboardDocumentCheckIcon,
    title: 'Vaccination Records',
    description: 'Keep track of your baby\'s vaccination schedule with an easy-to-use digital record. Stay informed and ensure timely immunizations.',
    imageSrc: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483601/mommy/uekqvqa4or6ofejnfssb.png'
  },
  {
    // icon: SparklesIcon,
    title: 'Self-Care Tips',
    description: 'Discover daily self-care tips tailored for new mothers, including relaxation techniques, mindfulness exercises, and wellness advice to support your postpartum journey.',
    imageSrc: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483600/mommy/zqi4jmbkqhetr8d6ducu.png'
  },
  {
    // icon: ClipboardDocumentListIcon,
    title: 'To-Do List',
    description: 'Organize your postpartum and baby care tasks effortlessly with a built-in to-do list. Stay on top of important activities, from doctor\'s appointments to self-care routines.',
    imageSrc: 'https://res.cloudinary.com/deusrvfhd/image/upload/v1740483602/mommy/tut38vuuybuxszyrlegy.png'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">

<div className="flex items-center justify-center ">
      <div className="w-full max-w-4xl rounded-3xl bg-gradient-to-r from-[#1a1a2e] via-[#4a4a8f] to-[#8080ff] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        
        {/* Left Section: Logo and Branding */}
        <div className="flex items-center gap-6">
  <div className="bg-[#8080ff] rounded-full p-4 w-24 h-24 flex items-center justify-center overflow-hidden">
    <img
      src="https://res.cloudinary.com/deusrvfhd/image/upload/v1740483607/mommy/btjvdohym758x3dwwihm.jpg"
      alt="MOMMYcare+"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
  <h2 className="text-white text-2xl font-bold">MOMMYcare+</h2>
</div>

        <div className="flex flex-col items-center text-center ">
          
          <h2 className="text-2xl font-bold mb-2 text-white  md:text-2xl">Your Wellness Matters...Start Today!</h2>
        <p className="text-center mb-6 text-white">
          Download MOMMYCare+ and get expert-backed support for your recovery, mental well-being, and baby care - all in one place!
        </p>
      
<a
  href="#home"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-md flex items-center space-x-3 transform hover:scale-105 hover:shadow-lg duration-300"
>
  <img
    src="https://res.cloudinary.com/deusrvfhd/image/upload/v1740483602/mommy/al8xnisdribcgoifayqx.png"
    alt="Google Play"
    className="w-10 h-10 transition-transform duration-300 ease-in-out hover:scale-110"
  />
  <div className="flex flex-col items-start">
    {/* <span className="text-xs">GET IT ON</span> */}
    <span className="text-xs">Coming soon</span>
    <span className="text-lg font-semibold">Google Play</span>
  </div>
</a>



        </div>
      </div>
    </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything You Need
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive tools designed for your postpartum journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mb-4">
                <img 
                  src={feature.imageSrc} 
                  alt={feature.title} 
                  className="w-full h-20 object-cover rounded-lg fixed-size-image-f" 
                />
                {/* <feature.icon className="absolute top-4 right-4 h-12 w-12 text-primary-600" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <br />
      <div className="flex items-center justify-center ">
      <div className="w-full max-w-4xl rounded-3xl bg-gradient-to-r from-[#1a1a2e] via-[#4a4a8f] to-[#8080ff] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        
        {/* Left Section: Logo and Branding */}
        <div className="flex items-center gap-6">
          <div className="bg-[#8080ff] rounded-full p-4 w-24 h-24 flex items-center justify-center">
          <FaTelegramPlane className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-white text-2xl font-bold">MOMMYcare+</h2>
        </div>

        {/* Right Section: Text and Button */}
        <div className="flex flex-col items-center text-center ">
          <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
            Try out our AI-powered chatbot on<br />
            <span className="text-[#ddd]">Telegram and experience the future of<br />smart conversations.</span>
          </p>
          <a 
            href="https://t.me/MommyCarePlusBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-md"
          >
            Chat now
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}