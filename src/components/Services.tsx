import { Smartphone, Wifi, Building2, Plus, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Plans",
      description:
        "Unlimited calls, texts, and high-speed data with 5G coverage nationwide.",
      features: ["5G Network", "Unlimited Data", "International Roaming"],
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: Wifi,
      title: "Internet",
      description:
        "Fiber-optic internet with blazing fast speeds for homes and businesses.",
      features: ["Fiber Optic", "Up to 1Gbps", "24/7 Support"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: "Corporate Solutions",
      description:
        "Enterprise-grade connectivity and communication solutions for businesses.",
      features: ["Enterprise Grade", "Custom Solutions", "Dedicated Support"],
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: Plus,
      title: "Add-ons",
      description:
        "Enhance your experience with premium services and additional features.",
      features: ["Premium Services", "Entertainment", "Security"],
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover comprehensive telecom solutions designed to meet all your
            connectivity needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 card-hover flex flex-col h-full"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow text-sm sm:text-base">
                {service.description}
              </p>

              <ul className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-xs sm:text-sm text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.jo.zain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 sm:py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl border border-cyan-400/20 mt-auto text-sm sm:text-base"
              >
                Learn More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Zain Difference?
            </h3>
            <p className="text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Join millions of satisfied customers who trust Zain for their
              connectivity needs
            </p>
            <a
              href="https://www.jo.zain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-cyan-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-cyan-400/30"
            >
              Visit Zain Official Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
