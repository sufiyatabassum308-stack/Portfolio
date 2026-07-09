import "../styles/FeaturedProject.css";
import { motion } from "framer-motion";

function FeaturedProject() {
  return (
    <section className="featured" id="featured">
      <div className="container">

        <p className="section-tag">FEATURED PROJECT</p>

        <h2 className="section-title">
          AURA AI <span>Workspace</span>
        </h2>

        <motion.div
          className="featured-grid"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          {/* LEFT */}

          <div className="featured-left">

            <div className="info-box">
              <h3>AI-Powered Document Intelligence Platform</h3>

              <p>
                AURA AI is an intelligent document assistant that allows users
                to upload PDF documents, ask questions in natural language,
                generate AI-powered summaries, and retrieve contextual
                information using Large Language Models and
                Retrieval-Augmented Generation (RAG).
              </p>
            </div>

            <div className="info-box">
              <h3>Problem</h3>

              <p>
                Reading lengthy documents manually is time-consuming and finding
                relevant information quickly is difficult. Traditional keyword
                search often fails to understand the context of user queries.
              </p>
            </div>

            <div className="info-box">
              <h3>Solution</h3>

              <p>
                Developed an AI-powered document workspace using FastAPI,
                Gemini API, LangChain, and FAISS that enables semantic search,
                contextual question answering, and automatic document
                summarization.
              </p>
            </div>

          </div>

          {/* RIGHT */}

          <div className="featured-right">

            <div className="info-box">
              <h3>My Role</h3>

              <p>
                Designed and developed the backend architecture,
                implemented document processing,
                integrated LLM APIs,
                created REST APIs,
                built the Retrieval-Augmented Generation pipeline,
                and managed vector embeddings for semantic search.
              </p>
            </div>

            <div className="info-box">

              <h3>Challenges</h3>

              <ul>

                <li>Processed large PDF documents efficiently.</li>
                <li>Maintained contextual responses using RAG.</li>
                <li>Integrated Gemini API with FastAPI backend.</li>
                <li>Optimized semantic search using vector embeddings.</li>

              </ul>

            </div>

            <div className="info-box">

              <h3>Impact</h3>

              <ul>

                <li>Reduced manual document reading.</li>
                <li>Delivered contextual AI-powered responses.</li>
                <li>Built scalable modular backend.</li>
                <li>Implemented practical LLM + RAG architecture.</li>

              </ul>

            </div>

            <div className="info-box">

              <h3>Tech Stack</h3>

              <div className="tech-stack">

                <span>Python</span>
                <span>FastAPI</span>
                <span>Gemini API</span>
                <span>LangChain</span>
                <span>FAISS</span>
                <span>PyMuPDF</span>
                <span>Sentence Transformers</span>
                <span>REST API</span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedProject;