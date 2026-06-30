export default function MyCourses() {
  const enrolled = ["React JS Fundamentals", "ASP.NET Core Web API"];

  return (
    <div>
      <p className="tag">Enrolled</p>
      <h3>My Enrolled Courses</h3>
      <ul className="enrolled-list">
        {enrolled.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
