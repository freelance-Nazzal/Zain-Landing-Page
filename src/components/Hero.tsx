import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const openModal = () => {
    setIsVideoModalOpen(true);
    setIsModalAnimating(true);
  };

  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setIsVideoModalOpen(false);
    }, 300);
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>

        {/* Zain Bubble Images */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Zain Bubble 1 - Large central bubble with dynamic diagonal movement */}
          <img
            src="/src/assets/zain bubble 1.png"
            alt="Zain Bubble"
            className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 animate-float-1 opacity-90 drop-shadow-lg object-cover"
            style={{
              top: "20%",
              left: "10%",
              animationDelay: "0s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 2 - Medium bubble with circular motion */}
          <img
            src="/src/assets/zain bubble 2.png"
            alt="Zain Bubble"
            className="absolute w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 animate-float-2 opacity-85 drop-shadow-md object-cover"
            style={{
              top: "60%",
              right: "15%",
              animationDelay: "3s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 3 - Small bubble with pulsing effect */}
          <img
            src="/src/assets/zain bubble 3.png"
            alt="Zain Bubble"
            className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-float-3 opacity-80 drop-shadow-md object-cover"
            style={{
              top: "30%",
              right: "30%",
              animationDelay: "6s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 4 - Additional floating bubble with shimmer effect */}
          <img
            src="/src/assets/zain bubble 4.png"
            alt="Zain Bubble"
            className="absolute w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 animate-float-4 opacity-70 drop-shadow-sm object-cover"
            style={{
              top: "70%",
              left: "5%",
              animationDelay: "9s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 5 - Small decorative bubble */}
          <img
            src="/src/assets/zain bubble 5.png"
            alt="Zain Bubble"
            className="absolute w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 animate-float-5 opacity-65 drop-shadow-sm object-cover"
            style={{
              top: "10%",
              right: "5%",
              animationDelay: "12s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 1 - Medium floating bubble */}
          <img
            src="/src/assets/zain bubble 1.png"
            alt="Zain Bubble"
            className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 animate-float-6 opacity-75 drop-shadow-md object-cover"
            style={{
              top: "50%",
              left: "70%",
              animationDelay: "15s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 2 - Small decorative bubble */}
          <img
            src="/src/assets/zain bubble 2.png"
            alt="Zain Bubble"
            className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-float-7 opacity-50 drop-shadow-sm object-cover"
            style={{
              top: "15%",
              left: "60%",
              animationDelay: "18s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 3 - Small floating bubble */}
          <img
            src="/src/assets/zain bubble 3.png"
            alt="Zain Bubble"
            className="absolute w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 animate-float-8 opacity-60 drop-shadow-sm object-cover"
            style={{
              top: "80%",
              right: "25%",
              animationDelay: "21s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 4 - Tiny decorative bubble */}
          <img
            src="/src/assets/zain bubble 4.png"
            alt="Zain Bubble"
            className="absolute w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 animate-float-9 opacity-45 drop-shadow-sm object-cover"
            style={{
              top: "45%",
              left: "85%",
              animationDelay: "24s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 5 - Additional small bubble */}
          <img
            src="/src/assets/zain bubble 5.png"
            alt="Zain Bubble"
            className="absolute w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 animate-float-10 opacity-40 drop-shadow-sm object-cover"
            style={{
              top: "75%",
              left: "40%",
              animationDelay: "27s",
              objectPosition: "center center",
            }}
          />
        </div>

        {/* Zain Logo Background */}
        <div className="absolute top-1/2 right-1/4 opacity-10 transform -translate-y-1/2">
          <img
            src="/assets/Zain.jpeg"
            alt="Zain Logo"
            className="w-96 h-96 object-contain filter blur-sm"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8 mt-12 sm:mt-16 md:mt-20 lg:mt-16 xl:mt-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
              Jordan's Leading Network Provider
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Connect to the
            <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Future of Telecom
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Experience lightning-fast mobile networks, reliable internet
            connections, and innovative solutions that power your digital life
            across Jordan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 px-4">
            <a
              href="https://www.jo.zain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-cyan-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Explore Plans
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <button
              onClick={openModal}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center hover:border-white/40 w-full sm:w-auto"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Watch Zain 5G
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                98%
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">
                Coverage
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                5G
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">
                Speed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">
                Support
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                5M+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">
                Customers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300 ease-out ${
            isModalAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onClick={closeModal}
        >
          {/* Zain Logo Background in Modal */}
          <div className="absolute inset-0 opacity-5">
            <img
              src="/assets/Zain.jpeg"
              alt="Zain Logo"
              className="w-full h-full object-contain filter blur-2xl"
            />
          </div>
          <div
            className={`relative w-full max-w-4xl mx-2 sm:mx-4 transition-all duration-300 ease-out ${
              isModalAnimating
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute -top-8 sm:-top-12 right-0 text-white hover:text-cyan-300 transition-all duration-300 z-10 ${
                isModalAnimating
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Video Container */}
            <div
              className={`relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-out ${
                isModalAnimating
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              <iframe
                src="https://www.youtube.com/embed/DtW-QSv4nIY?autoplay=1&vq=hd1080&rel=0&modestbranding=1"
                title="Zain 5G Network"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Title */}
            <div
              className={`text-center mt-4 sm:mt-6 transition-all duration-300 ease-out ${
                isModalAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Experience Zain 5G
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Discover the power of Jordan's fastest 5G network
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
