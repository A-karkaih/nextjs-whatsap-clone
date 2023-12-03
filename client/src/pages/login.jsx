import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  const handleLogin = async () => {
      const provider = new GoogleAuthProvider();
      const {
        user: { displayName: name, email, photoUrl: profileImage },
      } = await signInWithPopup(firebaseAuth, provider);

    try {
    
      if (email) {

        const { data } = await axios.post(CHECK_USER_ROUTE, { email });

        console.log({data});

        if (!data.status) {
          console.log("here");
            
          router.push("/onboarding");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex justify-center items-center bg-panel-header-background
     h-screen w-screen flex-col gap-6  "
    >
      <div className="flex items-center gap-2 justify-center text-white">
        <Image src="/whatsapp.gif" alt="Whatsapp" height={300} width={300} />
        <span className="text-7xl ">whatsapp</span>
      </div>
      <button
        onClick={handleLogin}
        className="flex items-center justify-center gap-7 bg-search-input-container-background rounded-lg p-5"
      >
        <FcGoogle className="text-4xl" />
        <span className="text-white text-2xl "> Login with Google</span>
      </button>
    </div>
  );
}

export default login;
