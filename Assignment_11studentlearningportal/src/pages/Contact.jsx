import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <p className="eyebrow">Index Card 04 — Contact</p>
      <h1>Contact</h1>

      <div className="card">
        <p>Email: support@studentportal.com</p>
        <p>Phone: 9876543210</p>
        <p>Location: Chennai, India</p>
        <button className="btn btn-outline" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}
