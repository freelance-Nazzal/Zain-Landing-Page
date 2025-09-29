import { Gift, Clock, Star, Percent, Zap } from "lucide-react";

const Promotions = () => {
  const promotions = [
    {
      icon: Percent,
      title: "50% Off First 3 Months",
      description: "New customers save big on premium mobile plans",
      validUntil: "Valid until Dec 31, 2025",
      color: "from-purple-600 to-purple-700",
      badge: "Limited Time",
    },
    {
      icon: Gift,
      title: "Free Router & Installation",
      description: "Get premium fiber internet with zero setup costs",
      validUntil: "Valid until Jan 15, 2025",
      color: "from-teal-500 to-cyan-500",
      badge: "Popular",
    },
    {
      icon: Star,
      title: "Student Discount 30%",
      description: "Special rates for students with valid ID",
      validUntil: "Academic year 2024-2025",
      color: "from-indigo-600 to-purple-600",
      badge: "Students",
    },
  ];

  return (
    <section
      id="promotions"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Zain Bubble Images as Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/zain bubble 2.png"
          alt="Zain Bubble"
          className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 opacity-25 animate-float-1 drop-shadow-sm object-cover"
          style={{
            top: "15%",
            left: "8%",
            animationDelay: "1s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/assets/zain bubble 3.png"
          alt="Zain Bubble"
          className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-30 animate-float-2 drop-shadow-sm object-cover"
          style={{
            top: "25%",
            right: "12%",
            animationDelay: "4s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/assets/zain bubble 4.png"
          alt="Zain Bubble"
          className="absolute w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-20 animate-float-3 drop-shadow-sm object-cover"
          style={{
            bottom: "20%",
            left: "5%",
            animationDelay: "7s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/assets/zain bubble 5.png"
          alt="Zain Bubble"
          className="absolute w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-22 animate-float-4 drop-shadow-sm object-cover"
          style={{
            bottom: "15%",
            right: "8%",
            animationDelay: "10s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/assets/zain bubble 1.png"
          alt="Zain Bubble"
          className="absolute w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 opacity-18 animate-float-5 drop-shadow-sm object-cover"
          style={{
            top: "70%",
            left: "75%",
            animationDelay: "13s",
            objectPosition: "center center",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full text-purple-800 font-semibold mb-4 text-sm sm:text-base">
            <Gift className="w-4 h-4 mr-2" />
            Special Offers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Promotions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Take advantage of our limited-time offers and save on premium
            services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {promotions.map((promotion, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden card-hover flex flex-col h-full"
            >
              {/* Badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <span
                  className={`bg-gradient-to-r ${promotion.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {promotion.badge}
                </span>
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${promotion.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <promotion.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {promotion.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                {promotion.description}
              </p>

              <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                <Clock className="w-4 h-4 mr-2" />
                {promotion.validUntil}
              </div>

              <a
                href="https://www.jo.zain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 sm:py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl border border-cyan-400/20 mt-auto text-sm sm:text-base"
              >
                Claim Offer
              </a>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Zain 5G Network Section */}
        <div className="mt-16 sm:mt-20 relative overflow-hidden">
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-400 rounded-full filter blur-2xl animate-pulse animation-delay-4000"></div>
              {/* Zain Logo Background */}
              <div className="absolute top-1/2 right-1/4 opacity-5 transform -translate-y-1/2">
                <img
                  src="/assets/Zain.jpeg"
                  alt="Zain Logo"
                  className="w-80 h-80 object-contain filter blur-sm"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
              {/* Content */}
              <div>
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                  5G Network
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Experience the Power of
                  <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                    Zain 5G
                  </span>
                </h3>

                <p className="text-purple-100 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Jordan's fastest and most reliable 5G network. Download,
                  stream, and connect at lightning speed with coverage across
                  the kingdom.
                </p>

                {/* Features */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-purple-100 text-sm sm:text-base">
                      Up to 1Gbps download speeds
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    <span className="text-purple-100 text-sm sm:text-base">
                      99% network coverage across Jordan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-purple-100 text-sm sm:text-base">
                      Ultra-low latency for gaming and video calls
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.jo.zain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-cyan-400/30 text-sm sm:text-base"
                >
                  Explore 5G Plans
                </a>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-pulse">
                      <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      5G Speed Test
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 text-sm sm:text-base">
                          Download Speed
                        </span>
                        <span className="text-cyan-300 font-bold text-sm sm:text-base">
                          1.2 Gbps
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 text-sm sm:text-base">
                          Upload Speed
                        </span>
                        <span className="text-teal-300 font-bold text-sm sm:text-base">
                          850 Mbps
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-200 text-sm sm:text-base">
                          Latency
                        </span>
                        <span className="text-purple-300 font-bold text-sm sm:text-base">
                          8ms
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-400/20 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-400/20 rounded-full animate-bounce animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
