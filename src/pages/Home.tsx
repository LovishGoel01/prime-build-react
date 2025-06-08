
import { useState, useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import ProjectCarousel from '../components/ProjectCarousel';
import ProductModal from '../components/ProductModal';
import { products, Product } from '../data/products';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    document.title = 'BuildCorp - Premier Construction Company';
  }, []);

  // Auto-rotate products every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % Math.ceil(products.length / 6));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const scrollToServices = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get 6 products starting from current index, cycling through all products
  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < 6; i++) {
      const productIndex = (currentProductIndex * 6 + i) % products.length;
      visibleProducts.push(products[productIndex]);
    }
    return visibleProducts;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="pt-16">
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Company Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl font-bold text-gray-900 dark:text-white mb-6">
              We build with integrity, innovation, and excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              BuildCorp has been at the forefront of construction innovation for over two decades, 
              delivering exceptional results that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="font-poppins text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Commercial Construction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                From office buildings to retail spaces, we create commercial environments that inspire and perform.
              </p>
              <button
                onClick={() => scrollToServices('commercial-construction')}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-poppins text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Industrial Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complex industrial facilities built with precision engineering and cutting-edge technology.
              </p>
              <button
                onClick={() => scrollToServices('industrial-facility-builds')}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section id="services-summary" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-primary w-8 h-8 rounded"></div>
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Site Planning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strategic site analysis and planning to optimize your construction project outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-primary w-8 h-8 rounded-full"></div>
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Project Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end project coordination ensuring timely delivery and budget compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-primary w-8 h-8 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Sustainable Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Environmentally conscious construction practices for a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectCarousel />

      {/* Product Catalog Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              High-quality construction materials and equipment for every project
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
              {visibleProducts.map((product) => (
                <div
                  key={`${product.id}-${currentProductIndex}`}
                  onClick={() => openProductModal(product)}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200 dark:border-gray-700 animate-fade-in"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(products.length / 6) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentProductIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to product set ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
      />
    </div>
  );
};

export default Home;
