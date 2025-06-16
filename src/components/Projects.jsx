import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import sfmImg from "../assets/sfm.jpg";
import employeeImg from "../assets/employee.png";
import twitterImg from "../assets/twitter.png";
import musicImg from "../assets/music.png";

const Projects = () => {
  const projects = [
    {
      title: "Surplus Food Management Website",
      description:
        "A web application designed to address surplus food waste from events and functions by connecting donors with orphanages and old age homes. Donors submit details like location and food availability, which are displayed for approved organizations to access and collect. Verified organizations can view donor information, contact them directly, and arrange food pickups, while donors receive appreciation certificates.",
      image: sfmImg,
      technologies: ["HTML", "CSS", "JavaScript", "Python","Django", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mdabdulbasith/sfm-project",
      featured: true,
    },
    {
      title: "Employee Management Website",
      description:
        "A responsive web platform designed for efficient employee data management, featuring full CRUD (Create, Read, Update, Delete) operations. The application includes secure user authentication and a clean, intuitive dashboard that allows administrators to easily view, manage, and update employee records in real time.",
      image: employeeImg,
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Mongodb"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/mdabdulbasith/Employee_Management",
      featured: true,
    },
    {
      title: "Netflix UI Clone",
      description:
        "A responsive Netflix homepage clone featuring static movie thumbnails, a prominent hero banner, and smooth hover animations for an engaging user interface.",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAACUCAMAAABcDpd8AAAAclBMVEUQEBDlCRMAEBDpCRMAEQ9dDxALEBDUChLsCRQFEA8AEBLuCBM6DxAjEBCRDRI8DxBSDxCJDRHACxO1CxLcCROuDBK7DBQuEBB4DhH4CBSeDRA0EBBiDhAZEBCCDhFEDxHKCxRMDxBsDhAfEQ+nDBadDBbsN5fEAAAFv0lEQVR4nO2a2ZqCuBZGIYkhGEVlEBxQtPT9X/FkgABKtdb5ujUX/7opCPNyJ3sHKggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7DiYbbldisxH17z1y1kScmGrk7dnwhd5b2KmTY/rjzV6hnmtK44AezstIu6uNsxEXd7HncNDuu64AvHnY8xHy57o7o4bZNLcUHc8Tabu7W+Mef/JH4ECnyxNwXueqV6KRWyCKPRmTq576Nm6J8e4jj08OOFSGXVC8UQxU8aPQBxQ8PyEwvRk1pr1no4/MN+8rjD4lXklIqcnMnpArVCk3Uyty094iG8SAbt1HZLOJ4sxvveCJkHQm1kI5V5PqAdMmD+SE15zFPPy/Nslh/v4fECxoqdhd9X0qFguoQUSrCITRVUZGJcNxoVDzsaFSok9Lt8IfWKsJQaBUBS2h3xoDs9eEy+/Ggg1gV0kTzP6loJlSIP6kIOxXk0ujt+ZUEnAl9fTH7flB0KkLJ+LQKKiw2KoSK/O6ZqZADFdTu2HaQf1TBSWGeX+kniQmKdBF/zYDDqajIhAraFC1Zwni9MUuROeKml+8ltypk4XacvVShrqN7C23OhJuTidP3B81eheoAEyrknbVpn7GuXKgLEwZmgwolq2L30+2oKoSXKuK6MRc9sZPtZxcP+odTEYYrMqFi/3SPvMxMvHQbWhWHwY4vVajB0igogtQExT7+/qA5VLFnn1PBVqHeI0rMjtHRh/7Rq9Ap4mMqApZ2v4BqzJgPQTFQoXLb51SQ486pyCsfRophB6EFm1Lh5lgtv6goB7OqN1QErC9EGj+CYqBC1UvsScVttTprane30ypkOydb66a3VCSuMvNg+mHoVehAfaororTRRGcXw9MqaGgnIJEuoN9RQUrRXjha+tE/hirE7bnapLq8pHR3eaGiO8XbKgKytceJuydB0anITae9/DYHkW+qoO+rYO3AKXwJilaFMJMCWl0/p2J+sDV34UtQtCrkPRW66nuOCiqFkOJ1B5FypwmXb3eQg5Vc+BIUXVTcdLjS6P6oIk+32yzLtqsXKmRlOZrZ1lsq2hQiuR+p1EVFwfSrCLF9TKYJG9QLhl/qiiX7W13B69CO1yLxJSw6FUS/lmknqcMS66kn/1ZtDl44vJVMq26IiTypsPqo6CvhTxTeAcldEj96EhYuKkp3bx+Zjs1c3qG+DJxORb2Xn1TRuKCg0coPF04FOf7bKtLBJO7xfcUl1ENTbi4XejJw9irOjZhSQThjRKWH7if+S1TEOq2oo+Ont1iFyaP7xOSQbe3FwOlUcN7NFUcq1MT0sr5Wp303f3xbhcoNTZoVt+RUnecPr3nPkQmKahHZrwDzTz/2FE5FQK75UzIN85zaMlI27bP+QYX5HKDLUHXCsQpbyqUlyahN2T6ExUDFaiueVIQuraR/V+EGxs1YRbywg6aq346m1vXpjbdWwcl9QoV7nP8jKn5TQU5mWWUOTiKzQ+XDnKxX4XrICxWHdKf7TPfoPNlJNV9bDFSwda7aVKuwr2ceVMTLQjunN9LNRGRRetBDBiriMu1VkIW+R9XT26FCpt2w+XPdnKrq6h69vCjWo3OWVZLsi2ybNpEZa8xYEUpqVZCjSaKh7hUsMCGWrz0YOAcq2g811EyQ5uedpHmTFcnpOjsv658+4c2JSq+D+dnzP83EhM3bCWdd18uF/s35LY1y2Sw5r/c781Hd/h+DfjsQyo0330xbFTPdx/PGvoyPmcbON2P+aio9tZm3zG0toesTlSp4uSlUtITrdha7M1+Fyu+70P9qom7FVJU8uB4XtbpjvYH/Z/fGiXb8M29XojwPxc6DOVl8SLPb/WSzGTcB8KELt3/Z+XraF2niQw5Zml7wveub0pz7kEICH75ivxyKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/wPL5m6RjJiDVwAAAABJRU5ErkJggg==",
      technologies: ["HTML", "CSS3"],
      liveUrl: "https://netflix-ui-clo-git-b54b6a-mohammadabdulbasith123-8398s-projects.vercel.app/",
      githubUrl: "https://github.com/mdabdulbasith/netflix-ui-clone",
      featured: false,
    },
    {
      title: "Twitter UI Clone",
      description:
        "A responsive Twitter UI clone replicating the tweet feed layout, interactive buttons, and overall design aesthetics.",
      image: twitterImg,
      technologies: ["HTMl", "Tailwind CSS"],
      liveUrl: "https://twitter-ui-clone-teal-tau.vercel.app/",
      githubUrl: "https://github.com/mdabdulbasith/twitter-ui-clone",
      featured: false,
    },
    {
      title: "Music Player",
      description:
        "A modern music player web app featuring responsive design, audio playback, and an interactive UI with track listings and basic controls.",
      image: musicImg,
      technologies: ["HTML", "CSS", "Javascript"],
      githubUrl: "https://github.com/mdabdulbasith/music-player",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#b57edc] text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-[#b57edc] hover:text-[#b57edc] transition-colors duration-200 flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 text-gray-900">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b57edc] hover:text-[#9166b0] text-sm font-medium flex items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 text-sm font-medium flex items-center gap-1"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mdabdulbasith?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#b57edc] hover:text-[#996bb9] font-medium"
          >
            View More Projects on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
