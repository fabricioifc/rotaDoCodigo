import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xwvwpvey");

  if (state.succeeded) {
    return <p className="success">Mensagem enviada com sucesso! 🚀</p>;
  }

  return (
    <section className="contact-section">
      <h2>
        Contact Form <span>Section</span>
      </h2>

      <div className="contact-container">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="form-box">
          <div className="row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="row">
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="phone" placeholder="Phone" />
          </div>

          <select name="industry">
            <option value="">Select one...</option>
            <option>Technology</option>
            <option>Marketing</option>
            <option>Design</option>
          </select>

          <textarea name="message" placeholder="Message" required />

          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>

        {/* TEXTO */}
        <div className="contact-info">
          <h3>Have a question for us?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="info">
            <span>📍 45 Green Street, USA</span>
            <span>📞 +1 (234) 567-8910</span>
          </div>
        </div>
      </div>
    </section>
  );
}
