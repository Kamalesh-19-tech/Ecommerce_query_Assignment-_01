# Student Learning Portal

A React Router project built with Vite.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Login

- Username: `student`
- Password: `student123`

## What's inside

- `src/App.jsx` — all route definitions, including the nested `/dashboard` routes and the wildcard 404 route.
- `src/context/AuthContext.jsx` — login state, backed by `localStorage`.
- `src/components/ProtectedRoute.jsx` — redirects unauthenticated users to `/login`.
- `src/components/Navbar.jsx` — `NavLink`-based nav with conditional Dashboard/Logout links.
- `src/pages/` — Home, About, Courses, Course Details (`/courses/:courseId`), Contact, Login, 404.
- `src/pages/dashboard/` — Dashboard layout (parent route with `<Outlet />`) plus Profile, My Courses, and Settings child routes.
- `src/data/courses.js` — the three sample courses used across Courses and Course Details.

## Routing concepts demonstrated

- Basic routes (`Link`, `NavLink`)
- Programmatic navigation (`useNavigate`) on Home, Contact (back button), Login, and the 404 page
- Dynamic route + `useParams` on Course Details
- Protected routes with `Navigate` redirect
- Nested routing under `/dashboard` with a default redirect to `/dashboard/profile`
- Wildcard route for unmatched URLs
