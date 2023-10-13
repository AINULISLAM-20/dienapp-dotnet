import { Home, AboutUs, ContactUs, Services, Register, Login, PrivacyPolicy, TermsAndConditions, Test } from "./pages";

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
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/terms-and-conditions',
    element: <TermsAndConditions />
  },
  {
    path: '/test',
    element: <Test />
  }
];

export default AppRoutes;
