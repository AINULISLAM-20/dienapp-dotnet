import { Home, AboutUs, ContactUs, } from "./pages";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/contact',
    element: <ContactUs />
  }
];

export default AppRoutes;
