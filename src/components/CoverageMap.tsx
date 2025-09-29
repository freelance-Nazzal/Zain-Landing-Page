import {
  MapPin,
  Signal,
  Zap,
  Check,
  Navigation,
  Phone,
  Clock,
  Star,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Location {
  lat: number;
  lng: number;
}

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  services: string[];
  coordinates: Location;
  distance: number;
}

const CoverageMap = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [userAddress, setUserAddress] = useState<string>("");
  const [nearbyStores, setNearbyStores] = useState<Store[]>([]);
  const [allNearbyStores, setAllNearbyStores] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  // Jordan cities with coordinates
  const jordanCities = [
    { name: "Amman", lat: 31.9539, lng: 35.9106 },
    { name: "Irbid", lat: 32.5556, lng: 35.85 },
    { name: "Zarqa", lat: 32.0728, lng: 36.0876 },
    { name: "Aqaba", lat: 29.5321, lng: 35.0063 },
    { name: "Salt", lat: 32.0389, lng: 35.7272 },
    { name: "Madaba", lat: 31.7167, lng: 35.7833 },
    { name: "Karak", lat: 31.1853, lng: 35.7019 },
    { name: "Jerash", lat: 32.2808, lng: 35.8992 },
    { name: "Ajloun", lat: 32.3333, lng: 35.75 },
    { name: "Mafraq", lat: 32.35, lng: 36.2 },
    { name: "Tafilah", lat: 30.8333, lng: 35.6 },
    { name: "Ma'an", lat: 30.1964, lng: 35.7342 },
  ];

  const coverageStats = [
    { label: "Cities Covered", value: "99%", icon: MapPin },
    { label: "5G Coverage", value: "85%", icon: Zap },
    { label: "Population Reach", value: "98%", icon: Signal },
    { label: "Network Uptime", value: "99.9%", icon: Check },
  ];

  // Zain stores data with real coordinates across Jordan - Multiple locations per city
  const zainStores = [
    // Amman - Multiple locations
    {
      id: 1,
      name: "Zain Gallery - City Center",
      address: "King Hussein St, Downtown Amman",
      phone: "+962 6 500 0000",
      hours: "9:00 AM - 10:00 PM",
      rating: 4.8,
      services: ["5G", "Mobile Plans", "Internet", "Support"],
      coordinates: { lat: 31.9539, lng: 35.9106 },
    },
    {
      id: 2,
      name: "Zain Gallery - Abdoun",
      address: "Abdoun Circle, Amman",
      phone: "+962 6 500 0001",
      hours: "9:00 AM - 10:00 PM",
      rating: 4.6,
      services: ["5G", "Mobile Plans", "Corporate"],
      coordinates: { lat: 31.9454, lng: 35.9284 },
    },
    {
      id: 3,
      name: "Zain Gallery - Sweifieh",
      address: "Sweifieh Main St, Amman",
      phone: "+962 6 500 0002",
      hours: "9:00 AM - 10:00 PM",
      rating: 4.7,
      services: ["5G", "Mobile Plans", "Internet", "Support"],
      coordinates: { lat: 31.96, lng: 35.9 },
    },
    {
      id: 4,
      name: "Zain Gallery - Shmeisani",
      address: "Shmeisani, Amman",
      phone: "+962 6 500 0003",
      hours: "9:00 AM - 10:00 PM",
      rating: 4.5,
      services: ["5G", "Mobile Plans", "Corporate", "Support"],
      coordinates: { lat: 31.97, lng: 35.92 },
    },
    {
      id: 5,
      name: "Zain Gallery - Tla'a Al-Ali",
      address: "Tla'a Al-Ali, Amman",
      phone: "+962 6 500 0004",
      hours: "9:00 AM - 10:00 PM",
      rating: 4.6,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 31.98, lng: 35.88 },
    },
    {
      id: 6,
      name: "Zain Gallery - Jabal Amman",
      address: "Rainbow St, Jabal Amman",
      phone: "+962 6 500 0005",
      hours: "9:00 AM - 10:00 PM",
      rating: 4.4,
      services: ["5G", "Mobile Plans", "Support"],
      coordinates: { lat: 31.95, lng: 35.93 },
    },
    {
      id: 7,
      name: "Zain Gallery - Marj Al-Hamam",
      address: "Marj Al-Hamam, Amman",
      phone: "+962 6 500 0006",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.3,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 31.94, lng: 35.94 },
    },

    // Irbid - Multiple locations
    {
      id: 8,
      name: "Zain Gallery - Irbid Center",
      address: "University St, Irbid",
      phone: "+962 2 500 0000",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.7,
      services: ["5G", "Mobile Plans", "Student Plans"],
      coordinates: { lat: 32.5556, lng: 35.85 },
    },
    {
      id: 9,
      name: "Zain Gallery - Irbid North",
      address: "Al-Hussein St, Irbid",
      phone: "+962 2 500 0001",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.5,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 32.56, lng: 35.86 },
    },
    {
      id: 10,
      name: "Zain Gallery - Irbid South",
      address: "Al-Madina St, Irbid",
      phone: "+962 2 500 0002",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.4,
      services: ["5G", "Mobile Plans", "Student Plans"],
      coordinates: { lat: 32.55, lng: 35.84 },
    },

    // Zarqa - Multiple locations
    {
      id: 11,
      name: "Zain Gallery - Zarqa Center",
      address: "Main St, Zarqa",
      phone: "+962 5 500 0000",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.5,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 32.0728, lng: 36.0876 },
    },
    {
      id: 12,
      name: "Zain Gallery - Zarqa Industrial",
      address: "Industrial Area, Zarqa",
      phone: "+962 5 500 0001",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.3,
      services: ["5G", "Mobile Plans", "Corporate"],
      coordinates: { lat: 32.08, lng: 36.09 },
    },
    {
      id: 13,
      name: "Zain Gallery - Zarqa East",
      address: "Al-Hashimi St, Zarqa",
      phone: "+962 5 500 0002",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.2,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 32.07, lng: 36.1 },
    },

    // Aqaba - Multiple locations
    {
      id: 14,
      name: "Zain Gallery - Aqaba Marina",
      address: "Marina St, Aqaba",
      phone: "+962 3 500 0000",
      hours: "9:00 AM - 10:00 PM",
      rating: 4.9,
      services: ["5G", "Mobile Plans", "Roaming"],
      coordinates: { lat: 29.5321, lng: 35.0063 },
    },
    {
      id: 15,
      name: "Zain Gallery - Aqaba Center",
      address: "King Hussein St, Aqaba",
      phone: "+962 3 500 0001",
      hours: "9:00 AM - 10:00 PM",
      rating: 4.7,
      services: ["5G", "Mobile Plans", "Internet", "Roaming"],
      coordinates: { lat: 29.54, lng: 35.01 },
    },
    {
      id: 16,
      name: "Zain Gallery - Aqaba Port",
      address: "Port Area, Aqaba",
      phone: "+962 3 500 0002",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.6,
      services: ["5G", "Mobile Plans", "Corporate", "Roaming"],
      coordinates: { lat: 29.53, lng: 35.0 },
    },

    // Salt - Multiple locations
    {
      id: 17,
      name: "Zain Gallery - Salt Center",
      address: "Main St, Salt",
      phone: "+962 5 200 0000",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.4,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 32.0389, lng: 35.7272 },
    },
    {
      id: 18,
      name: "Zain Gallery - Salt Market",
      address: "Market St, Salt",
      phone: "+962 5 200 0001",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.2,
      services: ["5G", "Mobile Plans"],
      coordinates: { lat: 32.04, lng: 35.73 },
    },

    // Madaba - Multiple locations
    {
      id: 19,
      name: "Zain Gallery - Madaba Center",
      address: "King Talal St, Madaba",
      phone: "+962 5 300 0000",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.3,
      services: ["5G", "Mobile Plans"],
      coordinates: { lat: 31.7167, lng: 35.7833 },
    },
    {
      id: 20,
      name: "Zain Gallery - Madaba North",
      address: "Al-Hashimi St, Madaba",
      phone: "+962 5 300 0001",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.1,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 31.72, lng: 35.78 },
    },

    // Karak - Multiple locations
    {
      id: 21,
      name: "Zain Gallery - Karak Center",
      address: "Al-Madina St, Karak",
      phone: "+962 3 200 0000",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.2,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 31.1853, lng: 35.7019 },
    },
    {
      id: 22,
      name: "Zain Gallery - Karak South",
      address: "Al-Hussein St, Karak",
      phone: "+962 3 200 0001",
      hours: "9:00 AM - 7:00 PM",
      rating: 4.0,
      services: ["5G", "Mobile Plans"],
      coordinates: { lat: 31.18, lng: 35.7 },
    },

    // Jerash - Multiple locations
    {
      id: 23,
      name: "Zain Gallery - Jerash Center",
      address: "Main St, Jerash",
      phone: "+962 2 300 0000",
      hours: "9:00 AM - 9:00 PM",
      rating: 4.4,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 32.2808, lng: 35.8992 },
    },
    {
      id: 24,
      name: "Zain Gallery - Jerash North",
      address: "Al-Hashimi St, Jerash",
      phone: "+962 2 300 0001",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.2,
      services: ["5G", "Mobile Plans"],
      coordinates: { lat: 32.285, lng: 35.9 },
    },

    // Ajloun - Multiple locations
    {
      id: 25,
      name: "Zain Gallery - Ajloun Center",
      address: "Main St, Ajloun",
      phone: "+962 2 400 0000",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.3,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 32.3333, lng: 35.75 },
    },
    {
      id: 26,
      name: "Zain Gallery - Ajloun Castle",
      address: "Castle Area, Ajloun",
      phone: "+962 2 400 0001",
      hours: "9:00 AM - 7:00 PM",
      rating: 4.1,
      services: ["5G", "Mobile Plans"],
      coordinates: { lat: 32.33, lng: 35.75 },
    },

    // Mafraq - Multiple locations
    {
      id: 27,
      name: "Zain Gallery - Mafraq Center",
      address: "Main St, Mafraq",
      phone: "+962 2 600 0000",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.2,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 32.35, lng: 36.2 },
    },
    {
      id: 28,
      name: "Zain Gallery - Mafraq North",
      address: "Al-Hussein St, Mafraq",
      phone: "+962 2 600 0001",
      hours: "9:00 AM - 7:00 PM",
      rating: 4.0,
      services: ["5G", "Mobile Plans"],
      coordinates: { lat: 32.36, lng: 36.21 },
    },

    // Tafilah - Multiple locations
    {
      id: 29,
      name: "Zain Gallery - Tafilah Center",
      address: "Main St, Tafilah",
      phone: "+962 3 400 0000",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.1,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 30.8333, lng: 35.6 },
    },
    {
      id: 30,
      name: "Zain Gallery - Tafilah South",
      address: "Al-Hashimi St, Tafilah",
      phone: "+962 3 400 0001",
      hours: "9:00 AM - 7:00 PM",
      rating: 3.9,
      services: ["5G", "Mobile Plans"],
      coordinates: { lat: 30.83, lng: 35.6 },
    },

    // Ma'an - Multiple locations
    {
      id: 31,
      name: "Zain Gallery - Ma'an Center",
      address: "Main St, Ma'an",
      phone: "+962 3 100 0000",
      hours: "9:00 AM - 8:00 PM",
      rating: 4.0,
      services: ["5G", "Mobile Plans", "Internet"],
      coordinates: { lat: 30.1964, lng: 35.7342 },
    },
    {
      id: 32,
      name: "Zain Gallery - Ma'an East",
      address: "Al-Hussein St, Ma'an",
      phone: "+962 3 100 0001",
      hours: "9:00 AM - 7:00 PM",
      rating: 3.8,
      services: ["5G", "Mobile Plans"],
      coordinates: { lat: 30.2, lng: 35.74 },
    },
  ];

  // Get address from coordinates - use our predefined cities for accuracy
  const getAddressFromCoordinates = async (lat: number, lng: number) => {
    // Find the closest Jordan city from our predefined list
    const closestCity = jordanCities.reduce((closest, city) => {
      const distance = calculateDistance(lat, lng, city.lat, city.lng);
      const closestDistance = calculateDistance(
        lat,
        lng,
        closest.lat,
        closest.lng
      );
      return distance < closestDistance ? city : closest;
    });

    // Calculate distance to closest city
    const distanceToCity = calculateDistance(
      lat,
      lng,
      closestCity.lat,
      closestCity.lng
    );

    // If very close to a city (within 5km), just return the city name
    if (distanceToCity <= 5) {
      return closestCity.name;
    }

    // If further away, try to get more specific location
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&zoom=16`
      );
      const data = await response.json();

      if (data && data.address) {
        const address = data.address;

        // Check if the API result is in Jordan
        if (address.country === "Jordan" || address.country_code === "jo") {
          let location = "";

          // Try to get specific location
          if (address.neighbourhood) {
            location = address.neighbourhood;
          } else if (address.suburb) {
            location = address.suburb;
          } else if (address.village) {
            location = address.village;
          } else if (address.road) {
            location = address.road;
          }

          // If we found a specific location, combine with closest city
          if (location) {
            return `${location}, ${closestCity.name}`;
          }
        }
      }
    } catch (error) {
      // Fallback to closest city on error
    }

    // Fallback to closest city
    return closestCity.name;
  };

  // Get user's current location
  const getCurrentLocation = async () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          // Get readable address
          const address = await getAddressFromCoordinates(latitude, longitude);
          setUserAddress(address);

          findNearbyStores(latitude, longitude);
          setIsLoading(false);
        },
        () => {
          setIsLoading(false);
        }
      );
    } else {
      setIsLoading(false);
    }
  };

  // Find nearby stores based on location
  const findNearbyStores = (lat: number, lng: number) => {
    const nearby = zainStores
      .map((store) => ({
        ...store,
        distance: calculateDistance(
          lat,
          lng,
          store.coordinates.lat,
          store.coordinates.lng
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    setAllNearbyStores(nearby);
    setNearbyStores(nearby.slice(0, 3)); // Always show only 3 initially
  };

  // Calculate distance between two coordinates
  const calculateDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Handle city selection
  const handleCitySelect = async (cityName: string) => {
    if (cityName) {
      setIsLoading(true);
      const selectedCityData = jordanCities.find(
        (city) => city.name === cityName
      );

      if (selectedCityData) {
        setUserLocation({
          lat: selectedCityData.lat,
          lng: selectedCityData.lng,
        });

        // Get readable address for the selected city
        const address = await getAddressFromCoordinates(
          selectedCityData.lat,
          selectedCityData.lng
        );
        setUserAddress(address);

        findNearbyStores(selectedCityData.lat, selectedCityData.lng);
      }
      setIsLoading(false);
    }
  };

  // Open modal with all stores
  const openAllStoresModal = () => {
    setIsModalOpen(true);
    setIsModalAnimating(true);
  };

  // Close modal with animation
  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  useEffect(() => {
    // Auto-detect location on component mount
    getCurrentLocation();
  }, []);

  return (
    <section
      id="coverage"
      className="py-20 bg-gradient-to-br from-purple-50 to-teal-50 relative overflow-hidden"
    >
      {/* Zain Bubble Images as Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/src/assets/zain bubble 1.png"
          alt="Zain Bubble"
          className="absolute w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-30 animate-float-1 drop-shadow-sm object-cover"
          style={{
            top: "10%",
            left: "5%",
            animationDelay: "3s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/src/assets/zain bubble 3.png"
          alt="Zain Bubble"
          className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-25 animate-float-2 drop-shadow-sm object-cover"
          style={{
            top: "20%",
            right: "10%",
            animationDelay: "6s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/src/assets/zain bubble 4.png"
          alt="Zain Bubble"
          className="absolute w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-35 animate-float-3 drop-shadow-sm object-cover"
          style={{
            bottom: "25%",
            left: "8%",
            animationDelay: "9s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/src/assets/zain bubble 5.png"
          alt="Zain Bubble"
          className="absolute w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-28 animate-float-4 drop-shadow-sm object-cover"
          style={{
            bottom: "15%",
            right: "15%",
            animationDelay: "12s",
            objectPosition: "center center",
          }}
        />
        <img
          src="/src/assets/zain bubble 2.png"
          alt="Zain Bubble"
          className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-20 animate-float-5 drop-shadow-sm object-cover"
          style={{
            top: "50%",
            left: "80%",
            animationDelay: "15s",
            objectPosition: "center center",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jordan-Wide Coverage
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience reliable connectivity wherever you go with our extensive
            network coverage
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Interactive Map Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Dynamic Map Points */}
                <div className="absolute inset-0 opacity-30">
                  {/* User Location Marker */}
                  {userLocation && (
                    <div
                      className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse z-20"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="absolute -top-2 -left-2 w-8 h-8 border-2 border-red-400 rounded-full animate-ping"></div>
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-300 rounded-full animate-ping animation-delay-1000"></div>
                    </div>
                  )}

                  {/* Store Location Markers */}
                  {nearbyStores.map((store, index) => (
                    <div
                      key={store.id}
                      className="absolute w-3 h-3 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full animate-pulse"
                      style={{
                        top: `${20 + index * 12}%`,
                        left: `${25 + index * 15}%`,
                        animationDelay: `${index * 0.3}s`,
                      }}
                    >
                      <div className="absolute -top-1 -left-1 w-5 h-5 border-2 border-purple-400 rounded-full animate-ping"></div>
                    </div>
                  ))}
                </div>

                <div className="text-center z-10 px-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {isLoading
                      ? "Finding Your Location..."
                      : "Network Coverage"}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    {userLocation
                      ? `Location detected! Showing ${nearbyStores.length} nearby Zain galleries`
                      : "Comprehensive coverage across Jordan"}
                  </p>
                  {userLocation && userAddress && (
                    <div className="text-xs sm:text-sm text-purple-600 mb-2">
                      📍 Your location: {userAddress}
                    </div>
                  )}

                  {/* Location Search */}
                  <div className="max-w-sm mx-auto">
                    {/* City Dropdown */}
                    <div className="mb-3 sm:mb-4">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Select a City
                      </label>
                      <select
                        value={selectedCity}
                        onChange={(e) => {
                          setSelectedCity(e.target.value);
                          handleCitySelect(e.target.value);
                        }}
                        disabled={isLoading}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white text-sm sm:text-base"
                      >
                        <option value="">Choose a city...</option>
                        {jordanCities.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Current Location Button */}
                    <button
                      onClick={getCurrentLocation}
                      disabled={isLoading}
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-purple-300 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Navigation className="w-4 h-4" />
                      Use My Current Location
                    </button>
                  </div>
                </div>

                {/* Coverage Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-purple-300 rounded-full animate-ping"></div>
                  <div className="absolute w-20 h-20 border-2 border-teal-300 rounded-full animate-ping animation-delay-1000"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="space-y-3 sm:space-y-4">
            {/* Coverage Stats */}
            <div className="grid gap-3 sm:gap-4">
              {coverageStats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                          {stat.label}
                        </h4>
                        <span className="text-lg sm:text-xl font-bold text-purple-600">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nearby Stores */}
            {nearbyStores.length > 0 && (
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100">
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  Nearby Zain Galleries
                </h4>
                <div className="space-y-2">
                  {nearbyStores.map((store) => (
                    <a
                      key={store.id}
                      href={`https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-purple-300 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-gray-800 mb-1 truncate text-sm group-hover:text-purple-600 transition-colors">
                            {store.name}
                          </h5>
                          <p className="text-xs text-gray-600 mb-2 truncate">
                            {store.address}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2">
                            <div className="flex items-center gap-1">
                              <Phone className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{store.phone}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{store.hours}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                              <span>{store.rating}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {store.services.map((service, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full whitespace-nowrap"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-2 flex-shrink-0">
                          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                            {store.distance.toFixed(1)} km
                          </span>
                          <div className="mt-1 text-xs text-purple-600 group-hover:text-purple-700 transition-colors">
                            View on Maps
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* View All Button */}
                {allNearbyStores.length > 3 && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={openAllStoresModal}
                      className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      View All Galleries ({allNearbyStores.length} total)
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl p-4 text-white">
              <h4 className="text-base font-bold mb-1">
                {userLocation
                  ? "Find More Locations"
                  : "Check Coverage in Your Area"}
              </h4>
              <p className="text-purple-100 mb-2 text-xs">
                {userLocation
                  ? "Explore all Zain stores and coverage areas"
                  : "Enter your location to see detailed coverage information"}
              </p>
              <a
                href="https://www.jo.zain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-cyan-400/20 text-xs"
              >
                {userLocation ? "View All Stores" : "Check My Area"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* All Galleries Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pt-20 transition-all duration-300 ease-out ${
            isModalAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transition-all duration-300 ease-out ${
              isModalAnimating
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`bg-gradient-to-r from-purple-600 to-teal-500 text-white p-6 flex-shrink-0 transition-all duration-300 ease-out ${
                isModalAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">All Zain Galleries</h3>
                  <p className="text-purple-100 mt-1">
                    {allNearbyStores.length} galleries found near your location
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-cyan-300 transition-colors duration-200 p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div
              className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ease-out delay-100 ${
                isModalAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <div className="grid gap-4">
                {allNearbyStores.map((store, index) => (
                  <a
                    key={store.id}
                    href={`https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-purple-300 transition-all duration-200 cursor-pointer group ${
                      isModalAnimating
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: isModalAnimating
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                          {store.name}
                        </h5>
                        <p className="text-sm text-gray-600 mb-3">
                          {store.address}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>{store.phone}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{store.hours}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{store.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {store.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right ml-4 flex-shrink-0">
                        <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                          {store.distance.toFixed(1)} km
                        </span>
                        <div className="mt-2 text-sm text-purple-600 group-hover:text-purple-700 transition-colors">
                          View on Maps
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Modal Footer - Always Visible */}
            <div
              className={`bg-gray-50 px-6 py-4 border-t border-gray-200 flex-shrink-0 transition-all duration-300 ease-out delay-200 ${
                isModalAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Click on any gallery to open in Google Maps
                </p>
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-teal-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoverageMap;
