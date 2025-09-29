import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Apple,
  Play,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press Center", href: "#press" },
    { name: "Investor Relations", href: "#investors" },
  ];

  const services = [
    { name: "Mobile Plans", href: "#mobile" },
    { name: "Internet Plans", href: "#internet" },
    { name: "Corporate Solutions", href: "#corporate" },
    { name: "Roaming Services", href: "#roaming" },
  ];

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Service Status", href: "#status" },
    { name: "Store Locator", href: "#stores" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/zainjordan/",
      label: "Facebook",
    },
    { icon: Twitter, href: "https://x.com/zainjo?lang=en", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/zainjo/?hl=en",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/zainjordan/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer id="contact" className="relative text-white overflow-hidden">
      {/* Hero Section Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>

        {/* Zain Bubble Images */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Zain Bubble 1 - Large central bubble */}
          <img
            src="/src/assets/zain bubble 1.png"
            alt="Zain Bubble"
            className="absolute w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 animate-float-1 opacity-20 drop-shadow-lg object-cover"
            style={{
              top: "15%",
              left: "8%",
              animationDelay: "0s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 2 - Medium bubble */}
          <img
            src="/src/assets/zain bubble 2.png"
            alt="Zain Bubble"
            className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-float-2 opacity-25 drop-shadow-md object-cover"
            style={{
              top: "25%",
              right: "12%",
              animationDelay: "3s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 3 - Small bubble */}
          <img
            src="/src/assets/zain bubble 3.png"
            alt="Zain Bubble"
            className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 animate-float-3 opacity-30 drop-shadow-lg object-cover"
            style={{
              bottom: "25%",
              left: "8%",
              animationDelay: "6s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 4 - Additional floating bubble */}
          <img
            src="/src/assets/zain bubble 4.png"
            alt="Zain Bubble"
            className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float-4 opacity-15 drop-shadow-md object-cover"
            style={{
              bottom: "15%",
              right: "15%",
              animationDelay: "9s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 5 - Small decorative bubble */}
          <img
            src="/src/assets/zain bubble 5.png"
            alt="Zain Bubble"
            className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-float-5 opacity-20 drop-shadow-sm object-cover"
            style={{
              top: "60%",
              left: "70%",
              animationDelay: "12s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 1 - Medium floating bubble */}
          <img
            src="/src/assets/zain bubble 1.png"
            alt="Zain Bubble"
            className="absolute w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 animate-float-6 opacity-18 drop-shadow-sm object-cover"
            style={{
              top: "70%",
              right: "25%",
              animationDelay: "15s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 2 - Small decorative bubble */}
          <img
            src="/src/assets/zain bubble 2.png"
            alt="Zain Bubble"
            className="absolute w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 animate-float-7 opacity-12 drop-shadow-sm object-cover"
            style={{
              top: "45%",
              left: "85%",
              animationDelay: "18s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 3 - Tiny floating bubble */}
          <img
            src="/src/assets/zain bubble 3.png"
            alt="Zain Bubble"
            className="absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-float-8 opacity-15 drop-shadow-sm object-cover"
            style={{
              bottom: "45%",
              right: "8%",
              animationDelay: "21s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 4 - Additional small bubble */}
          <img
            src="/src/assets/zain bubble 4.png"
            alt="Zain Bubble"
            className="absolute w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-float-9 opacity-10 drop-shadow-sm object-cover"
            style={{
              top: "80%",
              left: "40%",
              animationDelay: "24s",
              objectPosition: "center center",
            }}
          />

          {/* Zain Bubble 5 - Tiny decorative bubble */}
          <img
            src="/src/assets/zain bubble 5.png"
            alt="Zain Bubble"
            className="absolute w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 animate-float-10 opacity-8 drop-shadow-sm object-cover"
            style={{
              top: "35%",
              left: "60%",
              animationDelay: "27s",
              objectPosition: "center center",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <img
                  src="/assets/Zain.jpeg"
                  alt="Zain Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <span className="text-xl sm:text-2xl font-bold">ZAIN</span>
                <span className="text-xs sm:text-sm font-medium text-gray-400">
                  JO
                </span>
              </div>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Jordan's leading telecommunications provider, connecting
                millions with innovative mobile and internet solutions across
                the kingdom.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Phone className="w-4 h-4 mr-2 sm:mr-3" />
                  <div>
                    <a
                      href="tel:1234"
                      className="hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      From Zain: Dial 1234
                    </a>
                    <div className="text-xs text-gray-400">
                      From other networks:{" "}
                      <a
                        href="tel:+962795797979"
                        className="hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        +962 79 579 7979
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Mail className="w-4 h-4 mr-2 sm:mr-3" />
                  <a
                    href="mailto:info@jo.zain.com"
                    className="hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    info@jo.zain.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 mr-2 sm:mr-3" />
                  <span>Amman, Jordan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Support
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            {/* Left Side - Copyright */}
            <div className="text-white/70 text-xs sm:text-sm">
              © 2025 Zain Jordan. All rights reserved.
            </div>

            {/* Center - Legal Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
              <a
                href="https://www.jo.zain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.jo.zain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="https://www.jo.zain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Accessibility
              </a>
            </div>

            {/* Right Side - Download App */}
            <div className="flex flex-row gap-3 w-full lg:w-auto">
              <a
                href="https://apps.apple.com/gh/app/zain-jo/id705212738"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center bg-white/15 backdrop-blur-sm border border-white/25 hover:bg-white/25 rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Apple className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="flex-1 whitespace-nowrap">
                  <div className="text-xs text-white/80">Download on the</div>
                  <div className="font-bold text-white text-xs sm:text-sm">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.apps2you.zain&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center bg-white/15 backdrop-blur-sm border border-white/25 hover:bg-white/25 rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="flex-1 whitespace-nowrap">
                  <div className="text-xs text-white/80">Get it on</div>
                  <div className="font-bold text-white text-xs sm:text-sm">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
