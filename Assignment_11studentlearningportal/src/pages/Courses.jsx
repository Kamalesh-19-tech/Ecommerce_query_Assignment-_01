import { Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <div className="container">
      <p className="eyebrow">Index Card 03 — Catalog</p>
      <h1>Available Courses</h1>
      
      <div className="course-grid">
        {courses.map((course) => (
          <div className="card course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p className="course-meta-item">Category: {course.category}</p>
            <p className="course-meta-item">Duration: {course.duration}</p>
            <p className="course-meta-item">Trainer: {course.trainer}</p>
            <Link to={`/courses/${course.id}`} className="btn btn-outline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
