const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 80, color: "bg-blue-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Python", level: 80, color: "bg-blue-500" },
        { name: "Express.js", level: 80, color: "bg-gray-600" },
        { name: "SQL/MySQL", level: 95, color: "bg-blue-700" },
        { name: "MongoDB", level: 80, color: "bg-green-500" },
        { name: "Django", level: 75, color: "bg-purple-500" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-800" },
        { name: "Postman", level: 80, color: "bg-blue-600" },
        { name: "Visual Studio Code", level: 90, color: "bg-orange-500" },
        { name: "Figma", level: 80, color: "bg-purple-500" },
        { name: "Mongodb Compass", level: 80, color: "bg-blue-400" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and create exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Always learning and staying up-to-date with the latest technologies and best practices.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>📚 Continuous Learning</span>
            <span>🚀 Innovation Focused</span>
            <span>🎯 Problem Solver</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills