import { Home, AboutUs, ContactUs, Services, Register, Login, PrivacyPolicy, TermsAndConditions } from "./pages";

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
    path: '/ContactUs',
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
  }
];

export default AppRoutes;
