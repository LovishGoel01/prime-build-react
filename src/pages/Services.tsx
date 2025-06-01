
import { useState, useEffect } from 'react';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  useEffect(() => {
    document.title = 'Services - BuildCorp Construction';
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: ''
    });
    
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCaseStudies = () => {
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=800&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-poppins text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl leading-relaxed">
            Comprehensive construction solutions from planning to completion, 
            delivered with excellence and precision
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Commercial Construction */}
          <div id="commercial-construction" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Commercial Construction
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                From office buildings and retail spaces to hospitality venues and mixed-use developments, 
                we create commercial environments that inspire productivity and drive business success. 
                Our experienced team manages every aspect of commercial construction with precision and care.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Office buildings and corporate headquarters
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Retail and shopping centers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Hotels and hospitality venues
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Mixed-use developments
                </li>
              </ul>
              <button
                onClick={scrollToCaseStudies}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View Case Studies
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
                alt="Commercial construction project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Residential Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop"
                alt="Residential construction project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Residential Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Whether you're building your dream home or developing a residential community, 
                we bring the same level of professionalism and attention to detail to every residential project. 
                Our team understands that homes are more than buildings—they're where life happens.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Custom homes and luxury residences
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Multi-family housing developments
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Home renovations and additions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Affordable housing projects
                </li>
              </ul>
              <button
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Industrial Facility Builds */}
          <div id="industrial-facility-builds" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Industrial Facility Builds
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Complex industrial facilities require specialized expertise in engineering, fabrication, 
                and installation. Our industrial construction team has the experience and capabilities 
                to handle projects of any scale and complexity.
              </p>

              {/* Service Icons Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="bg-primary w-8 h-8 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Engineering</h4>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="bg-primary w-8 h-8 rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Fabrication</h4>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="bg-primary w-8 h-8 rounded-lg transform rotate-45"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Installation</h4>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
                alt="Industrial facility construction"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Sustainable Design Consulting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&h=600&fit=crop"
                alt="Sustainable construction design"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Sustainable Design Consulting
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Building for the future means building sustainably. Our consulting team helps integrate 
                environmentally responsible design principles into every project, reducing environmental 
                impact while creating healthier, more efficient buildings.
              </p>

              {/* Testimonial */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-primary mb-8">
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "BuildCorp's sustainable design consulting helped us achieve LEED Gold certification 
                  while staying within budget. Their expertise in green building practices is unmatched."
                </p>
                <div className="font-semibold text-gray-900 dark:text-white">
                  - Jennifer Martinez, Facilities Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore some of our most successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Downtown Office Complex",
                description: "25-story mixed-use building completed ahead of schedule",
                image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop"
              },
              {
                title: "Manufacturing Facility",
                description: "200,000 sq ft industrial complex with sustainable features",
                image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
              },
              {
                title: "Residential Community",
                description: "150-unit affordable housing development",
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Start Your Project Today
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to bring your construction vision to life? Get in touch with our team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="">Select a project type</option>
                <option value="commercial">Commercial Construction</option>
                <option value="residential">Residential Projects</option>
                <option value="industrial">Industrial Facility</option>
                <option value="sustainable">Sustainable Design Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Please describe your project, timeline, and any specific requirements..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
              >
                Submit Project Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Services;
