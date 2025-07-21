
const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
            <div className="flex space-x-6 mb-4">
                <a href="http://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="visit our facebook account">
                    <i className="ri-facebook-fill text-md lg:text-2xl"></i>
                </a>
                <a href="http://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="visit our instagram account">
                    <i className="ri-instagram-fill text-md lg:text-2xl"></i>
                </a>
                <a href="http://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="visit our linkedin profile">
                    <i className="ri-linkedin-fill text-md lg:text-2xl"></i>
                </a>
            </div>
            <p className="text-md ">&copy; 2024 Senius. All rights reserved.  </p>
        </div>
    </section>
  )
}

export default Footer