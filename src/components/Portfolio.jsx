import { PORTFOLIO_PROJECTS } from "../Constants/portfolio"
import { useState } from "react";

const Portfolio = () => {
     const [activeProjectId, setActiveProjectId] = useState(null);

    const handleToggle = (id) => {
        setActiveProjectId(activeProjectId === id ? null : id);
    };
  return (
    <section id="portfolio" className="max-w-7xl mt-15  mx-auto border-b-2 ">
        <div className="grid gap-4 mb-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((project) => (
                <div
                    key={project.id}
                    className="group relative rounded-3xl mx-4 overflow-hidden"
                    onClick={() => handleToggle(project.id)}
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                        className={`
                            flex items-center justify-center inset-0 absolute flex-col
                            mt-22 backdrop-blur-lg transition-opacity duration-500
                            ${activeProjectId === project.id ? 'opacity-100' : 'opacity-0'}
                            group-hover:opacity-100
                        `}
                    >
                        <h3 className="font-medium text-xl mb-2">{project.name}</h3>
                        <p className="mb-12 p-4">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Portfolio
