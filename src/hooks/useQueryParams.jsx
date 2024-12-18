import { useLocation, useNavigate } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const removeQueryParams = () => {
    const { pathname } = location;
    navigate(pathname);
  };
  return { removeQueryParams };
};

export default useQueryParams;
