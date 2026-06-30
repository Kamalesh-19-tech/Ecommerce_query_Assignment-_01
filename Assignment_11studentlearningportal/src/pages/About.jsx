export default function About() {
  return (
    <div className="container">
      <p className="eyebrow">Index Card 02 — About</p>
      <h1>About the Portal</h1>
      <p className="hero-lead">
        This Student Learning Portal helps students view available courses,
        access their dashboard, manage their profile, and track enrolled
        courses.
      </p>

      <div className="hero-grid">
        <div className="card">
          <h3>Browse</h3>
          <p>Explore available courses across frontend, backend, and full stack tracks.</p>
        </div>
        <div className="card">
          <h3>Track</h3>
          <p>Keep tabs on enrolled courses and progress from a personal dashboard.</p>
        </div>
        <div className="card">
          <h3>Manage</h3>
          <p>Update profile details and preferences once signed in.</p>
        </div>
      </div>
    </div>
  );
}
