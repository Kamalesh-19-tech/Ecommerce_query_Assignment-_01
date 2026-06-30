import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container not-found">
      <p className="eyebrow">Index Card 00 — Missing</p>
      <h1>404 — Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="btn btn-accent" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}
