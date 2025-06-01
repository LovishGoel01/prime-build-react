
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - BuildCorp Construction';
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      bio: "With over 20 years in construction leadership, Sarah drives BuildCorp's vision of sustainable, innovative building solutions."
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Michael ensures every project meets our high standards of quality, safety, and timely delivery through expert coordination."
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Emily brings cutting-edge engineering expertise to complex structural challenges, ensuring safety and innovation in every design."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
                alt="Construction site with modern buildings"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Our Company
              </h1>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2001, BuildCorp has grown from a small local contractor to a premier 
                  construction company serving clients across the region. Our journey began with a 
                  simple mission: to build structures that stand the test of time while exceeding 
                  our clients' expectations.
                </p>
                <p>
                  We believe in putting our employees first, fostering a safety culture that 
                  protects every team member, and delivering innovative solutions that push the 
                  boundaries of what's possible in construction. Our commitment to excellence 
                  has earned us recognition as an industry leader and the trust of hundreds of 
                  satisfied clients.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="font-poppins text-xl font-semibold text-primary italic">
                  "Building tomorrow's world with today's innovation and timeless craftsmanship."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="bg-primary w-10 h-10 rounded-lg"></div>
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We conduct business with honesty, transparency, and ethical practices in every interaction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="bg-primary w-10 h-10 rounded-full"></div>
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Safety First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every team member goes home safe every day. Safety is never compromised for schedule or profit.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="bg-primary w-10 h-10 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="font-poppins text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace new technologies and methods to deliver better results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Meet the experienced professionals driving BuildCorp forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-center border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-poppins text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-poppins text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="font-poppins text-4xl font-bold mb-2">23</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="font-poppins text-4xl font-bold mb-2">150+</div>
              <div className="text-lg">Team Members</div>
            </div>
            <div>
              <div className="font-poppins text-4xl font-bold mb-2">99%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
