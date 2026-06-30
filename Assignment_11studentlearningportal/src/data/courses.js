export const courses = [
  {
    id: "1",
    title: "React JS Fundamentals",
    category: "Frontend",
    duration: "5 Days",
    trainer: "Geetha",
    description:
      "Learn components, props, state, events, and routing in React.",
  },
  {
    id: "2",
    title: "ASP.NET Core Web API",
    category: "Backend",
    duration: "6 Days",
    trainer: "Kumar",
    description:
      "Build secure, scalable REST APIs with ASP.NET Core, covering controllers, middleware, and Entity Framework.",
  },
  {
    id: "3",
    title: "Full Stack Development",
    category: "Full Stack",
    duration: "10 Days",
    trainer: "Priya",
    description:
      "Combine frontend and backend skills to design, build, and deploy complete web applications end to end.",
  },
];

export function getCourseById(id) {
  return courses.find((course) => course.id === id);
}
