
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Downtown Office Complex",
      description: "A 15-story modern office building featuring sustainable design and cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      category: "Commercial",
      year: "2024",
      location: "New York, NY"
    },
    {
      id: 2,
      title: "Industrial Manufacturing Plant",
      description: "State-of-the-art manufacturing facility with advanced automation systems and safety protocols.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop",
      category: "Industrial",
      year: "2023",
      location: "Detroit, MI"
    },
    {
      id: 3,
      title: "Residential Complex",
      description: "Luxury residential towers with premium amenities and panoramic city views.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      category: "Residential",
      year: "2024",
      location: "Los Angeles, CA"
    },
    {
      id: 4,
      title: "Infrastructure Bridge Project",
      description: "Modern cable-stayed bridge designed to enhance regional connectivity and transportation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "Infrastructure",
      year: "2023",
      location: "San Francisco, CA"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const goToPrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Showcasing excellence in construction and engineering
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Project Display */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-opacity duration-500 ${
                  index === currentProject ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-8 flex flex-col justify-center">
                    <h3 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>Completed: {project.year}</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full shadow-lg transition-all duration-200"
            aria-label="Previous project"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full shadow-lg transition-all duration-200"
            aria-label="Next project"
          >
            <ArrowRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
