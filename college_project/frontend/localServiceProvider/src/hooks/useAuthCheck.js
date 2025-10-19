import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAlreadyLogged, logOut } from "../APIs/authApis";
import { setAccount, clearAccount } from "../redux/slices/accountSlice";

export function useAuthCheck() {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const token = localStorage.getItem("AccountToken");

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setLoading(false);
        setIsValid(false);
        return;
      }

      // Only call API if Redux doesn't have user info
      if (!account.role) {
        try {
          const response = await handleAlreadyLogged(token);
          if (response?.user) {
            dispatch(setAccount(response.user));
            setIsValid(true);
          } else {
            await logOut(token)
            localStorage.removeItem("AccountToken");
            dispatch(clearAccount());
            setIsValid(false);
          }
        } catch (error) {
            await logOut(token)
          console.error("Token check failed:", error);
          localStorage.removeItem("AccountToken");
          dispatch(clearAccount());
          setIsValid(false);
        }
      } else {
        setIsValid(true);
      }

      setLoading(false);
    };

    verifyToken();
  }, [token, dispatch, account.account.role]);

  return { loading, isValid, account:account.account };
}
