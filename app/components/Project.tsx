import { Calendar, ExternalLink, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'BookURTrain',
      period: 'Apr 2025 - Aug 2025',
      description: 'A comprehensive Train Ticket Booking System with real-time features',
      technologies: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
      features: [
        'User authentication and authorization',
        'Automatic seat allocation algorithm',
        'Dynamic fare calculation',
        'Real-time booking management',
        'Responsive user interface'
      ]
    },
    {
      title: 'Exam Scheduling System',
      period: 'Jun 2024 - Dec 2024',
      description: 'Secure web-based Exam Seat Allocation System for educational institutions',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
      features: [
        'Teacher and student portal',
        'Exam hall and seat availability checker',
        'Automated exam scheduling',
        'Seat allocation management',
        'Secure data handling'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Featured <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FolderGit2 size={24} className="text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-indigo-400 font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-600 bg-opacity-20 text-white rounded-full text-sm border border-indigo-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                <span className="font-semibold">View Details</span>
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
