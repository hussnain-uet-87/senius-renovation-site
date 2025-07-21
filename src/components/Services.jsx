import { SERVICES_CONTENT } from "../Constants/services"
const Services = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
        <div className="my-20">
            <h1 className="text-xl lg:text-3xl uppercase tracking-tight text-center mb-20">Our Home Renovation Services</h1>
        </div>
        {SERVICES_CONTENT.map((service,index)=>(
            <div key={index} className="w-full mb-12 mx-4 flex flex-col lg:flex-row">
                <div className={`mb-4 lg:mb-0 lg:w-1/2 ${
                    index%2 === 0 ? "" : "lg:order-2"
                }`}>
                    <img src={service.image} alt={service.title} className="w-full h-auto rounded-lg object-cover" />
                </div>
                    <div className={`lg:w-1/2 flex flex-col lg:mt-45 ${
                        index%2 === 0 ? "lg:pl-12" : "lg:pr-12"
                    }`}>
                        <h3 className="text-xl lg:text-2xl mb-2 font-medium text-left">
                            {service.title}
                        </h3>
                        <p className=" mb-4 text-lg lg:text-xl lg:leading-9 text-left lg:tracking-wide">{service.description}</p>
                    </div>
            </div>
        ))}
    </section>
  )
}

export default Services