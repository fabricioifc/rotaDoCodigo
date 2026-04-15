import {  ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ctaSection.css";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background Glow */}
          <div className="cta-glow"></div>

          <div className="cta-content">
            <h2 className="cta-title">
              Leve a Inovação Tecnológica para sua Escola
            </h2>

            <p className="cta-description">
              Transforme a educação com oficinas práticas de programação e
              robótica. Prepare seus alunos para os desafios do futuro com a
              Rota do Código.
            </p>

            <div className="cta-actions">
              <Link to="/contato" className="cta-btn-primary">
                Agendar Oficina
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
