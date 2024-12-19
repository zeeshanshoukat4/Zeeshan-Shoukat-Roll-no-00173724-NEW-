
export default function Header() {
    return (
      <div>
        {/* Top Header */}
        <div className="bg-[#7E33E0] text-white flex justify-between items-center py-2 px-8">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <i className="bi bi-envelope-at"></i>
              <p className="text-sm">zeeshanshoukat583@gmail.com</p>
            </div>
            <div className="flex items-center space-x-1">
              <i className="bi bi-telephone"></i>
              <p className="text-sm">(12345) 67890</p>
            </div>
          </div>
          {/* Center Section */}
          <div className="flex items-center space-x-4">
            <div className="hover:text-gray-300 cursor-pointer flex items-center space-x-1">
              <i className="bi bi-globe"></i>
              <span>English</span>
            </div>
            <div className="hover:text-gray-300 cursor-pointer flex items-center space-x-1">
              <i className="bi bi-currency-dollar"></i>
              <span>USD</span>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hover:text-gray-300 cursor-pointer flex items-center space-x-1">
              <i className="bi bi-person"></i>
              <span>Login</span>
            </div>
            <div className="hover:text-gray-300 cursor-pointer">Wishlist</div>
            <i className="bi bi-cart cursor-pointer"></i>
          </div>
        </div>
        {/* Bottom Navigation */}
        <div className="flex justify-between items-center px-8 py-4 shadow-md">
          {/* Logo */}
          <h1 className="text-3xl font-bold">Hekto</h1>
          {/* Navigation Links */}
          <div className="flex items-center space-x-6 text-gray-700">
            <div className="hover:text-[#7E33E0] cursor-pointer">Home</div>
            <div className="hover:text-[#7E33E0] cursor-pointer">Pages</div>
            <div className="hover:text-[#7E33E0] cursor-pointer">Products</div>
            <div className="hover:text-[#7E33E0] cursor-pointer">Blog</div>
            <div className="hover:text-[#7E33E0] cursor-pointer">Shop</div>
            <div className="hover:text-[#7E33E0] cursor-pointer">Contact</div>
          </div>
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="py-1 px-3 focus:outline-none"
            />
            <button className="bg-[#FB2E86] text-white px-4 py-1">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        {/* Banner Section */}
        <div className="flex justify-between items-center bg-[#F6F5FF] px-8 py-12 relative">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-[#FB2E86] font-semibold">Best Furniture For Your Castle....</p>
            <h1 className="text-4xl font-bold text-[#1A0B5B] leading-snug">
              New Furniture Collection <br /> Trends in 2020
            </h1>
            <p className="text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.
            </p>
            <button className="bg-[#FB2E86] text-white py-2 px-6 rounded-md hover:bg-[#E02076]">
              Shop Now
            </button>
          </div>
  
            {/* 50% Off Badge */}
            <div className="absolute top-0 right-0 bg-[#08D15F] text-white px-4 py-2 rounded-full shadow-lg">
              50%<br />off
            </div>
          </div>
          {/* Decorative Circle Background */}
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#EDEDED] rounded-full opacity-50 -z-10"></div>
        </div>
    );
  }
  