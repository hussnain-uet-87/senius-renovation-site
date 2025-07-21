import aboutImage from "../assets/about.webp"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl uppercase mb-12 tracking-tight mx-4">About Us</h2>
        {/* div to show desc and image */}
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
                <div className="mb-12 lg:mb-0">
                    <img src={aboutImage} alt="About image" className="w-full h-auto" />
                </div>
                    <p className="text-lg lg:text-3xl font-light mx-4 text-center lg:text-left mt-8 ">
                    Senius is a trusted name in renovation, offering high-quality transformation services for homes, offices, and workplaces. We combine creative design with expert craftsmanship to deliver spaces that are both functional and inspiring. Whether you're remodeling a kitchen, upgrading a commercial space, or reimagining an entire property, our team brings your vision to life with precision and care. At Senius, we prioritize clear communication, timely delivery, and professional results tailored to your needs. From cozy living spaces to productive work environments, we help you create places you’re proud to live and work in. Renovate smart—choose Senius.
                    </p>
        </div>
    </section>
  )
}

export default About