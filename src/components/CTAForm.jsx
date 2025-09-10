import React, { useState } from "react";
import illustration from "../assets/formIllustration.svg"
export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully (frontend only)");
    }
  };

  return (
    <section className=" bg-gray-50 flex items-center justify-center flex-col">
    <a href="/" className="absolute left-6 top-6 px-6 py-2 bg-neutral-600 text-white tracking-wide hover:cursor-pointer rounded-xl font-semibold">Go Back</a>
    <div className="min-h-screen flex-col lg:flex-row flex gap-12 items-center justify-center px-4">
<img src={illustration} alt="illustration" className="w-[200px] md:w-[300px]" />
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#262626" }}>
          Get Your Renovation Quote
        </h1>
        <p className="text-gray-600 mb-3">
          Fill out the form below and we’ll get back to you with a tailored
          renovation plan.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-left  text-sm font-medium mb-2" style={{ color: "#262626" }}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-lg border border-neutral-300 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-sm focus:border-neutral-600 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-left text-sm font-medium mb-2" style={{ color: "#262626" }}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="olivia@untitledui.com"
              className="w-full rounded-lg border border-neutral-300 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-sm focus:border-neutral-600 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-left text-sm font-medium mb-2" style={{ color: "#262626" }}>
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 0000000"
              className="w-full rounded-lg border border-neutral-300 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-sm focus:border-neutral-600 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-left  text-sm font-medium mb-2" style={{ color: "#262626" }}>
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main Street, Lahore"
              className="w-full rounded-lg border border-neutral-300 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-sm focus:border-neutral-600 focus:ring-2 focus:ring-neutral-500 focus:outline-none transition"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-neutral-800 text-white py-3 rounded-lg shadow-md hover:bg-neutral-900 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}
