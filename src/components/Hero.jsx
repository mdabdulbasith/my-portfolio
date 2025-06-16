import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto my-2 mb-8 rounded-full bg-gradient-to-r from-[#b57edc] to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            AB
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#b57edc] to-purple-600 bg-clip-text text-transparent">Abdul Basith</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-6">Full Stack Developer & UI/UX Designer</p>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences. Passionate about clean code,
            innovative design, and solving complex problems that make a real difference.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#b57edc] text-white px-8 py-3 rounded-lg font-medium hover:bg-fuchsia-950 transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-600 hover:text-[#b57edc] hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-600 hover:text-[#b57edc] hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:mohammadabdulbasith123@gmail.com"
            className="p-3 text-gray-600 hover:text-[#b57edc] hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-[#b57edc] transition-colors duration-200"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  )
}

export default Hero