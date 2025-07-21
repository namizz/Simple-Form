import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
interface Field {
  name: string;
  email: string;
  msg: string;
}
const ContactForm = () => {
  const form = useForm<Field>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (data: Field) => {
    console.log(data);
  };

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact Form</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        <p className="error">{errors?.name?.message}</p>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        <p className="error">{errors?.email?.message}</p>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("msg", { required: "Message is required" })}
        ></textarea>
        <p className="error">{errors?.msg?.message}</p>
      </div>
      <DevTool control={control} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
