import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Subtitle>Get in Touch</Subtitle>
              <p className="text-gray-600">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1">Your Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full border-b focus:outline-none py-2"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1">Email Address</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                    className="w-full border-b focus:outline-none py-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-1">Phone Number (optional)</label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full border-b focus:outline-none py-2"
                />
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="3"
                  className="w-full border-b focus:outline-none py-2"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                Leave us a Message <FaArrowRight />
              </button>
            </form>
          </div>

          {/* Right: Image layout similar to CTA */}
          <div className="relative h-[420px] hidden lg:block">
            {/* Top-right large image */}
            <div className="absolute top-0 right-0 w-[380px] h-[220px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="customer support"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle-left small square */}
            <div className="absolute left-0 top-24 w-[160px] h-[160px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="office building"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-right medium image */}
            <div className="absolute bottom-0 right-0 w-[320px] h-[180px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
