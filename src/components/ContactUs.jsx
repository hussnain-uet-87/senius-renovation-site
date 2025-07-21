import { CONTACT_INFO } from "../Constants/contactUs"

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto " id="contact">
        <div className="my-12">
            <h2 className="text-xl lg:text-3xl tracking-tight uppercase text-center mb-12">
                Contact Us 
            </h2>
            <p className="max-w-2xl text-lg text-center mx-auto mb-12">{CONTACT_INFO.text}</p>
            <div className="flex flex-col lg:flex-row justify-around mx-4">
                <div className="flex mb-8 lg:mb-0">
                    <i className="ri-phone-line text-3xl mr-4 "></i>
                    <div>
                    <p className="text-lg text-left font-semibold" >{CONTACT_INFO.phone.label}</p>
                    <p className="text-neutral-600" >{CONTACT_INFO.phone.value}</p>
                </div>
                </div>
                <div className="flex mb-8 lg:mb-0">
                    <i className="ri-mail-line text-3xl mr-4 "></i>
                    <div>
                    <p className="text-lg text-left font-semibold" >{CONTACT_INFO.email.label}</p>
                    <p className="text-neutral-600" >{CONTACT_INFO.email.value}</p>
                </div>
                </div>
                <div className="flex mb-8 lg:mb-0">
                    <i className="ri-map-pin-line text-3xl mr-4 "></i>
                    <div>
                    <p className="text-lg text-left font-semibold" >{CONTACT_INFO.address.label}</p>
                    <p className="text-neutral-600 text-left" >{CONTACT_INFO.address.value}</p>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs