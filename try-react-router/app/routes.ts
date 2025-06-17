import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), 
    route("about", "routes/about.tsx"),
    route("pokemon/:name", "routes/pokemon.tsx"),
    route("dashboard", "routes/dashboard.tsx", [
        route("students", "routes/dashboard/students.tsx"),
        route("teachers", "routes/dashboard/teachers.tsx")
    ]),
    ] satisfies RouteConfig;

//normal route: htpp://localhost:3000/about

// route with parameter: htpp://localhost:3000/pokemon/{{_name_}}
// nested route: htpp://localhost:3000/dashboard/students
// htpp://localhost:3000/dashboard/teachers
