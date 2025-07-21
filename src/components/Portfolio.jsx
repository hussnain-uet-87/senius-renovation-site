import { PORTFOLIO_PROJECTS } from "../Constants/portfolio"

const Portfolio = () => {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto border-b-2 ">
        <div className="mb-20">
            <h2 className="text-xl lg:text-3xl tracking-tight uppercase mb-12 mt-20 text-center">Portfolio</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {PORTFOLIO_PROJECTS.map((project)=>(
                    <div key={project.id} className="group relative rounded-3xl mx-4 overflow-hidden">
                        <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="flex items-center justify-center inset-0 absolute flex-col opacity-0 mt-22 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                            <h3 className="font-medium text-xl mb-2">{project.name}</h3>
                            <p className="mb-12 p-4">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Portfolio