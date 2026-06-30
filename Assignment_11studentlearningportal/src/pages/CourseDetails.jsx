import { useNavigate, useParams } from "react-router-dom";
import { getCourseById } from "../data/courses";

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="container">
        <h1>Course not found</h1>
        <button className="btn btn-outline" onClick={() => navigate("/courses")}>
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Course Details</h1>

      <div className="card details-card">
        <p><strong>Course ID:</strong> {course.id}</p>
        <p><strong>Title:</strong> {course.title}</p>
        <p><strong>Category:</strong> {course.category}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Trainer:</strong> {course.trainer}</p>
        <p><strong>Description:</strong> {course.description}</p>
        
        <button className="btn btn-outline" onClick={() => navigate("/courses")}>
          Back to Courses
        </button>
      </div>
    </div>
  );
}
