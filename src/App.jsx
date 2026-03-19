import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/users" element={<UsersPage  />} />
        {/* Not Founs always last */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
