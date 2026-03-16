import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
    return () => {
      clearTimeout(idTimeOut);
    };
  }, [navigate]);
  return (
    <section>
      <h1>Not Found</h1>
    </section>
  );
};

export default NotFoundPage;
