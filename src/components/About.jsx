import { Code, Palette, Zap, Users, Coffee } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I focus on writing clean, readable, and efficient code that’s easy to understand and maintain.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "I design clean, responsive, and user-friendly interfaces that focus on usability and visual appeal.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "I optimize web applications for speed and efficiency to ensure a smooth user experience",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "I work well in teams, communicate clearly, and contribute to shared goals to deliver results",
    },
  ]

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "∞", label: "Cups of Coffee" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I’m a passionate web developer eager to create digital solutions that make a difference. With a strong foundation in full-stack development, I enjoy turning ideas into impactful and user-friendly web applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                My journey into web development began during my college years, where I discovered a genuine passion for building digital experiences that solve real-world problems. What started as a curiosity quickly grew into a strong interest in creating clean, functional, and user-friendly web applications.
              </p>
              <p>
                Since then, I’ve been consistently learning and building projects using modern technologies like HTML, CSS, JavaScript, MERN stack, and Django. Through these hands-on experiences, I’ve developed a solid foundation in both frontend and backend development.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest tools and trends in web development. When I’m not coding, I enjoy exploring new frameworks and sharpening my skills through personal projects.
              </p>
            </div>

          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#8c29a7] to-[#71188a] rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              AB
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <Coffee className="text-[#8c29a7]" size={32} />
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#ece1f5] rounded-lg mb-4">
                <highlight.icon className="text-[#8c29a7]" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About