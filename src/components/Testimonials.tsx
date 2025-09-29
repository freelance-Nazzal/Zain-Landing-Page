import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Business Owner",
      location: "Amman",
      content:
        "Zain's corporate solutions have transformed our business operations. The reliability and speed are unmatched.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      name: "Omar Hassan",
      role: "Student",
      location: "Irbid",
      content:
        "The student discount made premium internet affordable. Perfect for online classes and research projects.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      name: "Layla Mahmoud",
      role: "Freelancer",
      location: "Zarqa",
      content:
        "Consistent 5G coverage everywhere I go. Essential for my remote work and client communications.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Zain Bubble Images as Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/zain bubble 3.png"
          alt="Zain Bubble"
          className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 opacity-25 animate-float-1 drop-shadow-sm object-cover"
          style={{
            top: "12%",
            left: "6%",
            animationDelay: "4s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/assets/zain bubble 4.png"
          alt="Zain Bubble"
          className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-30 animate-float-2 drop-shadow-sm object-cover"
          style={{
            top: "22%",
            right: "8%",
            animationDelay: "7s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/assets/zain bubble 5.png"
          alt="Zain Bubble"
          className="absolute w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-22 animate-float-3 drop-shadow-sm object-cover"
          style={{
            bottom: "22%",
            left: "4%",
            animationDelay: "10s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/assets/zain bubble 1.png"
          alt="Zain Bubble"
          className="absolute w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-28 animate-float-4 drop-shadow-sm object-cover"
          style={{
            bottom: "12%",
            right: "12%",
            animationDelay: "13s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/assets/zain bubble 2.png"
          alt="Zain Bubble"
          className="absolute w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 opacity-20 animate-float-5 drop-shadow-sm object-cover"
          style={{
            top: "65%",
            left: "85%",
            animationDelay: "16s",
            objectPosition: "center center",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join thousands of satisfied customers who trust Zain for their
            connectivity needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden card-hover flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-20">
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed relative z-10 flex-grow text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Millions
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Join the growing community of satisfied Zain customers across
              Jordan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                5M+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Active Users
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                4.8/5
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">App Rating</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                99.9%
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
