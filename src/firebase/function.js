import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (credential) {
      const token = credential.accessToken;
      const user = result.user;
    } else {
      console.log('No credential found');
    }
  } catch (error) {
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(`Error Message: ${errorMessage}`);
    if (email) {
      console.log(`Error Email: ${email}`);
    }
    if (credential) {
      console.log(`Error Credential: ${credential}`);
    }
  }
};
