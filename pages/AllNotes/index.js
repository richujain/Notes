import { useContext, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import AuthContext from "../../store/auth-context";

import { useRouter } from "next/router";
 
export default function AllNotes() {
  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push("/");
    }
  }, []);

  const router = useRouter();
  const authCtx = useContext(AuthContext)


    const logoutHandler = () => {
        authCtx.logout()
        router.push("/");
        console.log('logout')
    }
  return (
    <div>
      {authCtx.isLoggedIn && <div>
        All Notes
        <Button onClick={logoutHandler}>
            Logout
        </Button>
      </div>}
      
    </div>
  )
}
