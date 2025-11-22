import { Code2, Database, Globe, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend development with modern technologies'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Strong experience in MySQL database design and optimization'
    },
    {
      icon: Globe,
      title: 'RESTful APIs',
      description: 'Expert in developing and integrating scalable REST APIs'
    },
    {
      icon: Zap,
      title: 'Agile Development',
      description: 'Experienced in agile workflows and modern development practices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About <span className="text-indigo-500">Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 mb-12">
            <h3 className="text-2xl font-bold text-indigo-400 mb-6">Professional Summary</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Skilled Full Stack Developer with strong expertise in Java, Spring Boot, and React for building
              robust, scalable, and user-centric web applications. Experienced in developing RESTful APIs,
              implementing responsive front-end interfaces, and integrating back-end services to deliver seamless
              user experiences. Proficient in agile development, version control (Git), and modern development
              workflows to ensure efficient, high-quality project execution aligned with business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
