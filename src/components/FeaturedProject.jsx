import "../styles/FeaturedProject.css";


function FeaturedProject() {
  return (
    <section className="featured" id="featured">
      <div className="container">

        <p className="section-tag">FEATURED PROJECT</p>

        <h2 className="section-title">
          AURA AI <span>Workspace</span>
        </h2>

        <div className="project-card glass">

  <div className="ai-preview">

    <div className="ai-header">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="ai-content">

      <h3>AURA AI</h3>

      <p>
        Intelligent Document Workspace
      </p>

      <div className="ai-feature">
        PDF Upload
      </div>

      <div className="ai-feature">
        AI Question Answering
      </div>

      <div className="ai-feature">
        RAG Powered Search
      </div>

    </div>

  </div>


  <div className="project-content">

            <h3>AI-Powered Document Intelligence Platform</h3>

            <p className="project-description">
              AURA AI is an intelligent document assistant that allows users to
              upload PDF documents, ask questions in natural language, generate
              AI-powered summaries, and retrieve contextual information using
              Large Language Models and Retrieval-Augmented Generation (RAG).
            </p>

            <div className="project-section">
              <h4>Problem</h4>

              <p>
                Reading lengthy documents manually is time-consuming and finding
                relevant information quickly is difficult. Traditional keyword
                search often fails to understand the context of user queries.
              </p>
            </div>

            <div className="project-section">
              <h4>Solution</h4>

              <p>
                Developed an AI-powered document workspace using FastAPI,
                Gemini API, LangChain, and FAISS that enables semantic search,
                contextual question answering, and automatic document
                summarization.
              </p>
            </div>

            <div className="project-section">
              <h4>My Role</h4>

              <p>
                Designed and developed the backend architecture, implemented
                document processing, integrated LLM APIs, created REST APIs,
                built the Retrieval-Augmented Generation pipeline, and managed
                vector embeddings for semantic search.
              </p>
            </div>

            <div className="project-section">
              <h4>Challenges</h4>

              <ul className="impact-list">
                <li>Processed large PDF documents efficiently.</li>
                <li>Maintained contextual responses using RAG.</li>
                <li>Integrated Gemini API with FastAPI backend.</li>
                <li>Optimized semantic search using vector embeddings.</li>
              </ul>
            </div>

            <div className="project-section">
              <h4>Impact</h4>

              <ul className="impact-list">
                <li>Reduced manual document reading through AI-powered question answering.</li>
                <li>Delivered contextual responses instead of simple keyword search.</li>
                <li>Built a scalable backend following modular architecture.</li>
                <li>Demonstrated practical implementation of LLMs, RAG, and vector databases.</li>
              </ul>
            </div>

            <div className="project-section">

              <h4>Tech Stack</h4>

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

        </div>

      </div>
    </section>
  );
}

export default FeaturedProject;