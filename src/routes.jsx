import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "About Us",
    path: "/home",
    element: <Home />,
    // path: "/profile",
    // element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/home",
    element: <Home />,
    // path: "/sign-in",
    // element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/home",
    element: <Home />,
    // path: "/sign-up",
    // element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "Docs",
    href: "#",
    target: "_blank",
    element: "",
  },
];

export default routes;
