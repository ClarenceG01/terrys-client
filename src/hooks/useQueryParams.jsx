import { useLocation, useNavigate } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const removeQueryParams = () => {
    const { pathname } = location;
    navigate(pathname, { replace: true });
  };
  return { removeQueryParams };
};

export default useQueryParams;
