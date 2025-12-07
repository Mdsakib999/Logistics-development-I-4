import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block mb-1">Ihr Name</label>
          <input
            type="text"
            {...register("name", { required: "Name ist erforderlich" })}
            className="w-full border-b focus:outline-none py-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">E-Mail-Adresse</label>
          <input
            type="email"
            {...register("email", {
              required: "E-Mail ist erforderlich",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Ungültiges E-Mail-Format",
              },
            })}
            className="w-full border-b focus:outline-none py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Telefonnummer (optional)</label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full border-b focus:outline-none py-2"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1">Nachricht</label>
        <textarea
          {...register("message", { required: "Nachricht ist erforderlich" })}
          rows="3"
          className="w-full border-b focus:outline-none py-2"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Link to="/">
        <button
          type="button"
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Hinterlassen Sie uns eine Nachricht <FaArrowRight />
        </button>
      </Link>
    </form>
  );
}
