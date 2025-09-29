import { useState, useEffect } from "react";
import { Menu, X, Smartphone, Wifi } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Promotions", href: "#promotions" },
    { name: "Coverage", href: "#coverage" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-[1000] transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: isScrolled
          ? "rgba(76, 29, 149, 0.95)"
          : "rgba(76, 29, 149, 0.1)",
        backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/Zain.jpeg"
              alt="Zain Logo"
              className="w-10 h-10 object-contain"
            />
            <span
              className="text-2xl font-bold text-white"
              style={{
                textShadow: isScrolled
                  ? "0 2px 4px rgba(0, 0, 0, 0.3)"
                  : "0 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              ZAIN
            </span>
            <span
              className="text-sm font-medium text-white/90 hidden sm:block"
              style={{
                textShadow: isScrolled
                  ? "0 1px 2px rgba(0, 0, 0, 0.3)"
                  : "0 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              JO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold text-white hover:text-cyan-300 transition-all duration-300 ease-in-out relative group"
                style={{
                  textShadow: isScrolled
                    ? "0 1px 2px rgba(0, 0, 0, 0.3)"
                    : "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.jo.zain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-cyan-300 transition-all duration-300 ease-in-out group"
              style={{
                filter: isScrolled
                  ? "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))"
                  : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))",
              }}
              title="Mobile Services"
            >
              <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://www.jo.zain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-cyan-300 transition-all duration-300 ease-in-out group"
              style={{
                filter: isScrolled
                  ? "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))"
                  : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))",
              }}
              title="Internet Services"
            >
              <Wifi className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://www.jo.zain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
              style={{
                boxShadow: isScrolled
                  ? "0 8px 25px rgba(0, 0, 0, 0.2)"
                  : "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyan-300 transition-all duration-300 ease-in-out"
              style={{
                filter: isScrolled
                  ? "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))"
                  : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))",
              }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div
          className="border-t border-white/10 shadow-2xl"
          style={{
            backgroundColor: "rgba(76, 29, 149, 0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-cyan-300 font-semibold py-2 transition-all duration-300 ease-in-out"
                style={{
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://www.jo.zain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 ease-in-out mt-4 text-center shadow-lg hover:shadow-xl"
              style={{
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
