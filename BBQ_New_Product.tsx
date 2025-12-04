import { useState, useEffect } from 'react';
import { ArrowRight, Flame, Truck, Award, Users, Filter } from 'lucide-react';

export default function BBQTestApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const result = await window.fs.list();
        if (result && result.keys && result.keys.length > 0) {
          const imageFile = result.keys[0];
          const imageData = await window.fs.readFile(imageFile);
          const blob = new Blob([imageData], { type: 'image/jpeg' });
          const url = URL.createObjectURL(blob);
          setBgImage(url);
        }
      } catch (err) {
        console.log('Could not load image');
      }
    };
    loadImage();
  }, []);

  const products = [
    {
      id: 1,
      name: "John P Lopez OG Sauce",
      category: "sauces",
      price: "$14.95",
      image: "🍯",
      description: "Award-winning BBQ sauce blend"
    },
    {
      id: 2,
      name: "Smoke-A-Holics Competition Rub",
      category: "rubs",
      price: "$12.99",
      image: "🧂",
      description: "Award-winning competition grade"
    },
    {
      id: 3,
      name: "Zavala's Sloppy Juan Sauce",
      category: "sauces",
      price: "$12.95",
      image: "🍯",
      description: "Bold & flavorful signature sauce"
    },
    {
      id: 4,
      name: "Hurtado's 4-Piece Bundle",
      category: "bundles",
      price: "$23.31",
      image: "📦",
      description: "Texas Rangers official BBQ"
    },
    {
      id: 5,
      name: "Big Wick's Mesquite Jalapeño",
      category: "sauces",
      price: "$14.99",
      image: "🌶️",
      description: "Award-winning glaze"
    },
    {
      id: 6,
      name: "Smokey Woods Apple Pellets",
      category: "equipment",
      price: "$29.99",
      image: "🔥",
      description: "100% natural hardwood pellets"
    },
    {
      id: 7,
      name: "Franklin's Barbecue Rub",
      category: "rubs",
      price: "$16.99",
      image: "🧂",
      description: "Legend's blend - legendary results"
    },
    {
      id: 8,
      name: "Mesquite Smoking Chips",
      category: "equipment",
      price: "$18.99",
      image: "🪵",
      description: "Premium smoking wood"
    },
    {
      id: 9,
      name: "Carolina Gold Mustard Sauce",
      category: "sauces",
      price: "$13.99",
      image: "🍯",
      description: "Classic Southern style"
    },
    {
      id: 10,
      name: "Texas Beef Dry Rub",
      category: "rubs",
      price: "$14.99",
      image: "🧂",
      description: "Bold beef seasoning blend"
    },
    {
      id: 11,
      name: "Premium Grill Tool Set",
      category: "equipment",
      price: "$49.99",
      image: "🛠️",
      description: "Complete grilling accessory kit"
    },
    {
      id: 12,
      name: "Competition BBQ Bundle",
      category: "bundles",
      price: "$59.99",
      image: "📦",
      description: "Everything for championship BBQ"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'sauces', name: 'Sauces & Condiments' },
    { id: 'rubs', name: 'Rubs & Seasonings' },
    { id: 'equipment', name: 'Equipment & Accessories' },
    { id: 'bundles', name: 'Bundle Packs' }
  ];

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedCategory('all');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="flex flex-col cursor-pointer hover:opacity-80 transition">
            <div className="text-2xl font-black text-white bg-gradient-to-r from-orange-600 to-red-600 px-3 py-1 rounded">BBQ<span className="text-yellow-400">TEST</span></div>
            <div className="text-xs text-gray-600 font-bold tracking-widest">LEVEL UP YOUR GAME</div>
          </button>
          <div className="flex gap-8">
            <button onClick={() => navigateTo('home')} className={`transition ${currentPage === 'home' ? 'text-orange-600 font-semibold' : 'text-gray-600 hover:text-black'}`}>Home</button>
            <a href="#" className="text-gray-600 hover:text-black transition">About Us</a>
            <button onClick={() => navigateTo('products')} className={`transition ${currentPage === 'products' ? 'text-orange-600 font-semibold' : 'text-gray-600 hover:text-black'}`}>Products</button>
          </div>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
            Cart
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6 relative min-h-screen flex items-center bg-cover bg-center" style={{backgroundImage: bgImage ? `url(${bgImage})` : 'linear-gradient(135deg, #2d1810 0%, #5c3d2e 50%, #8B6F47 100%)', backgroundSize: 'cover', backgroundPosition: 'center right', backgroundAttachment: 'fixed'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/30"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-block px-4 py-2 bg-orange-50 rounded-full mb-6">
                <span className="text-sm font-medium text-orange-600">Premium BBQ Gear & Sauces</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Smoke, Sizzle &<br />
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Satisfy
                </span>
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Everything you need to master the grill. Premium BBQ products, legendary sauces, and the rubs that make champions. Fire up your next cookout.
              </p>
              <button onClick={() => navigateTo('products')} className="bg-orange-600 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 mx-auto hover:bg-orange-700 transition group">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </section>

          {/* Visual Section */}
          <section className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-orange-500 via-red-500 to-amber-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <Flame className="w-32 h-32 text-white opacity-50" />
              </div>
            </div>
          </section>

          {/* Featured Categories */}
          <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-center">Shop by Category</h2>
              <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                From grills to rubs, find everything you need for legendary BBQ.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Grills & Equipment",
                    desc: "Premium smokers, grills, and accessories",
                    gradient: "from-orange-500 to-red-600"
                  },
                  {
                    title: "Sauces & Condiments",
                    desc: "Award-winning sauces and glazes",
                    gradient: "from-red-600 to-amber-600"
                  },
                  {
                    title: "Rubs & Seasonings",
                    desc: "Competition-grade spice blends",
                    gradient: "from-amber-600 to-orange-500"
                  }
                ].map((cat, i) => (
                  <div key={i} className={`p-8 rounded-2xl bg-gradient-to-br ${cat.gradient} text-white hover:shadow-xl transition cursor-pointer group`}>
                    <h3 className="font-bold text-2xl mb-2 group-hover:translate-x-1 transition">{cat.title}</h3>
                    <p className="text-orange-100 text-sm mb-4">{cat.desc}</p>
                    <button onClick={() => navigateTo('products')} className="text-white font-medium flex items-center gap-2 group-hover:gap-3 transition">
                      Browse <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="px-6 py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-center">Why BBQ Test?</h2>
              <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                We're obsessed with quality, flavor, and helping you become a BBQ master.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Award,
                    title: "Curated Selection",
                    desc: "Hand-picked products from the best BBQ brands"
                  },
                  {
                    icon: Flame,
                    title: "Bold Flavors",
                    desc: "Sauces and rubs crafted by pitmasters"
                  },
                  {
                    icon: Truck,
                    title: "Fast Shipping",
                    desc: "Get your gear ready in 2-3 business days"
                  },
                  {
                    icon: Users,
                    title: "BBQ Community",
                    desc: "Join thousands of grill masters nationwide"
                  }
                ].map((feature, i) => (
                  <div key={i} className="p-8 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition group">
                    <feature.icon className="w-8 h-8 mb-4 text-orange-600 group-hover:scale-110 transition" />
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bestsellers Preview */}
          <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-center">Bestsellers</h2>
              <p className="text-gray-600 text-center mb-16">Our most loved products</p>
              <div className="grid md:grid-cols-4 gap-6">
                {products.slice(0, 4).map((product) => (
                  <div key={product.id} className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition group cursor-pointer">
                    <div className="bg-gradient-to-br from-amber-900 via-orange-700 to-red-800 aspect-square flex items-center justify-center group-hover:scale-105 transition relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="text-center z-10">
                        <div className="text-4xl font-bold text-white mb-2">{product.image}</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 text-sm">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-orange-600 font-bold">{product.price}</span>
                        <button className="text-orange-600 hover:text-orange-700 transition">+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="px-6 py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <p className="text-orange-100">Happy Grillmasters</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="text-orange-100">Products</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">4.9★</div>
                  <p className="text-orange-100">Average Rating</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">48H</div>
                  <p className="text-orange-100">Delivery</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to up your BBQ game?</h2>
              <p className="text-gray-600 mb-8">Get expert tips, exclusive deals, and new sauce drops in your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg flex-1 max-w-xs focus:outline-none focus:border-orange-600"
                />
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* PRODUCTS PAGE */}
      {currentPage === 'products' && (
        <>
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">BBQ Products</h1>
              <p className="text-xl text-orange-100 max-w-2xl">
                Discover our curated collection of premium BBQ sauces, rubs, equipment, and bundles from championship pitmasters.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filter
                  </h3>

                  {/* Category Filter */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-gray-900">Category</h4>
                    <div className="space-y-2">
                      {categories.map(cat => (
                        <label key={cat.id} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="category"
                            value={cat.id}
                            checked={selectedCategory === cat.id}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-4 h-4 text-orange-600 cursor-pointer"
                          />
                          <span className="ml-3 text-gray-700 group-hover:text-orange-600 transition">{cat.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <h4 className="font-semibold mb-4 text-gray-900">Sort</h4>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} {selectedCategory === 'all' ? 'products' : `${selectedCategory.replace('-', ' ')} products`}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="group cursor-pointer">
                      <div className="bg-gradient-to-br from-amber-900 via-orange-700 to-red-800 aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="text-7xl group-hover:scale-110 transition-transform duration-300">{product.image}</div>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition opacity-0 group-hover:opacity-100 transition-opacity">
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex flex-col">
                <div className="text-lg font-black text-white bg-gradient-to-r from-orange-600 to-red-600 px-2 py-1 rounded">BBQ<span className="text-yellow-400">TEST</span></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Fueling legendary cookouts everywhere</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-600 transition">All Products</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Sauces</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Grills</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-600 transition">About</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Blog</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Recipes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-600 transition">Contact</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Shipping</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex justify-between items-center text-sm text-gray-600">
            <p>&copy; 2025 BBQ Test. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-600 transition">Facebook</a>
              <a href="#" className="hover:text-orange-600 transition">Instagram</a>
              <a href="#" className="hover:text-orange-600 transition">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}