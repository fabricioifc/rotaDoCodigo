import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Code, Cpu, Globe, Sparkles, Terminal, Laptop } from "lucide-react";
import "./contactPage.css";

export default function ContactPage() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    if (!value) return "Este campo é obrigatório";

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "E-mail inválido";
    }

    if (name === 'phone') {
      const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
      if (!phoneRegex.test(value)) return "Telefone inválido (ex: 11 99999-9999)";
    }

    if (name === 'message' && value.length < 10) {
      return "Mensagem deve ter pelo menos 10 caracteres";
    }

    return null;
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });

      setInputs({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setTouched({
        name: false,
        email: false,
        phone: false,
        subject: false,
        message: false
      });

      setErrors({});
    } else {
      setStatus({
        info: { error: true, msg },
        submitting: false,
        submitted: false
      });
    }
  };

  const handleOnChange = e => {
    const { id, value } = e.target;

    setInputs(prev => ({
      ...prev,
      [id]: value
    }));

    if (touched[id]) {
      const error = validate(id, value);
      setErrors(prev => ({ ...prev, [id]: error }));
    }

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleBlur = e => {
    const { id, value } = e.target;

    setTouched(prev => ({ ...prev, [id]: true }));

    const error = validate(id, value);
    setErrors(prev => ({ ...prev, [id]: error }));
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(inputs).forEach(key => {
      const error = validate(key, inputs[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        subject: true,
        message: true
      });
      return;
    }

    setStatus(prev => ({ ...prev, submitting: true }));

    fetch('https://formspree.io/f/xwvwpvey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
      .then(response => {
        if (response.ok) {
          handleServerResponse(true, 'Obrigado! Sua mensagem foi enviada com sucesso.');
        } else {
          handleServerResponse(false, 'Erro ao enviar. Tente novamente.');
        }
      })
      .catch(() => {
        handleServerResponse(false, 'Ops! Ocorreu um erro ao enviar sua mensagem.');
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-text">
              <span className="contact-tag">CONTATO</span>
              <h1>Fale Conosco</h1>
              <p>
                Vamos construir algo incrível juntos. Tem um projeto em mente, uma dúvida ou precisa de orientação? Estamos aqui para ajudar.
              </p>
            </div>

            <div className="contact-hero-visual">
              <div className="floating-icons-grid">
                <div className="f-icon-item"><Code size={32} /></div>
                <div className="f-icon-item"><Cpu size={32} /></div>
                <div className="f-icon-item"><Globe size={32} /></div>
                <div className="f-icon-item"><Sparkles size={32} /></div>
                <div className="f-icon-item"><Terminal size={32} /></div>
                <div className="f-icon-item"><Laptop size={32} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-card-header">
              <span className="card-tag">CONTATO</span>
              <h2>Entre em Contato</h2>
            </div>

            <form className="contact-form" onSubmit={handleOnSubmit} noValidate>
              <input type="hidden" name="_subject" value="Novo contato pelo site" />

              <div className="form-grid">

                <div className={`form-group ${touched.name && errors.name ? 'invalid' : ''}`}>
                  <label>Nome *</label>
                  <input id="name" name="name" value={inputs.name} onChange={handleOnChange} onBlur={handleBlur}/>
                  {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className={`form-group ${touched.email && errors.email ? 'invalid' : ''}`}>
                  <label>Email *</label>
                  <input id="email" name="email" value={inputs.email} onChange={handleOnChange} onBlur={handleBlur}/>
                  {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className={`form-group ${touched.phone && errors.phone ? 'invalid' : ''}`}>
                  <label>Telefone *</label>
                  <input id="phone" name="phone" value={inputs.phone} onChange={handleOnChange} onBlur={handleBlur}/>
                  {touched.phone && errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className={`form-group ${touched.subject && errors.subject ? 'invalid' : ''}`}>
                  <label>Assunto *</label>
                  <select id="subject" name="subject" value={inputs.subject} onChange={handleOnChange} onBlur={handleBlur}>
                    <option value="">Selecione</option>
                    <option value="escola">Escola</option>
                    <option value="curso">Curso</option>
                    <option value="outro">Outro</option>
                  </select>
                  {touched.subject && errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

              </div>

              <div className={`form-group full-width ${touched.message && errors.message ? 'invalid' : ''}`}>
                <label>Mensagem *</label>
                <textarea id="message" name="message" value={inputs.message} onChange={handleOnChange} onBlur={handleBlur}/>
                {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="form-footer">
                <label className="checkbox-container">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  Eu concordo em compartilhar meus dados.
                </label>

                <button type="submit" className="submit-btn" disabled={status.submitting}>
                  {status.submitting ? "Enviando..." : status.submitted ? "Enviado!" : "Enviar Mensagem"}
                </button>
              </div>

              {status.info.msg && (
                <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
                  {status.info.error ? <FaExclamationCircle /> : <FaCheckCircle />}
                  {status.info.msg}
                </div>
              )}

            </form>
          </div>
        </div>
      </div>

      <div className="contact-info-grid-section">
        <div className="container">
          <div className="info-grid">

            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <h3>Ligue para nós</h3>
              <p>Segunda a Sexta, das 9h às 18h</p>
              <a href="tel:+5511999999999">+55 (11) 99999-9999</a>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <h3>Nosso Escritório</h3>
              <p>Venha nos visitar</p>
              <span>São Paulo, SP - Brasil</span>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <p>Mande uma mensagem</p>
              <a href="mailto:contato@rotadocodigo.com.br">contato@rotadocodigo.com.br</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}