import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <section className="hero">
        <p className="eyebrow">Index Card 01 — Welcome</p>
        <h1>Welcome to Student Learning Portal</h1>
        <p className="hero-lead">
          Learn React, Web API, and Full Stack Development from one place.
        </p>
        <div className="btn-row">
          <button className="btn btn-accent" onClick={() => navigate("/courses")}>
            View Courses
          </button>
          <button className="btn btn-outline" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
        </div>
      </section>

      <section className="hero-grid">
        <div className="card">
          <p className="tag">Frontend</p>
          <h3>React JS Fundamentals</h3>
          <p>Practice with components, state, and routing across realistic pages.</p>
        </div>
        <div className="card">
          <p className="tag">Backend</p>
          <h3>ASP.NET Core Web API</h3>
          <p>Design endpoints and data flows that hold up outside the classroom.</p>
        </div>
        <div className="card">
          <p className="tag">Full Stack</p>
          <h3>Full Stack Development</h3>
          <p>Tie frontend and backend together into one working application.</p>
        </div>
      </section>
    </div>
  );
}
