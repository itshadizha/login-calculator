import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ Component, fallBackPath }) => {
  const isLogged = useSelector((state) => state.login.isLogged);

  return isLogged ? Component : <Navigate to={fallBackPath} />;
};

export default PrivateRouter;
