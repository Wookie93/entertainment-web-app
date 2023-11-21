import { createContext, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { app } from './firebase';
import { handleImageProfile } from './firebase-db';

interface AuthType {
  user: User | null;
  handleSignInGoogle: () => {};
  handleSignOut: () => {};
  handleSignInEmail: (
    email: string,
    password: string,
    setErrorMessage: any
  ) => {};
  handleSignUp: (
    email: string,
    password: string,
    image: File | null,
    setErrorMessage: any
  ) => {};
  isEmailVerified: boolean;
}

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const newErrMsg = {
  email: '',
  password: '',
  repeatPassword: '',
  general: '',
};

/// CONTEXT
const AuthContext = createContext<AuthType | null>(null);

/// PROVIDER
export const AuthProvider = ({ children }: any) => {
  const [user, setUserData] = useState<User | null>(null);

  const [isEmailVerified, setVerifiedStatus] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
    });
  }, [user]);

  /// SIGN IN WITH GOOGLE
  const handleSignInGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.log(e);
    }
  };

  /// SIGN IN WITH EMAIL & PASSWORD
  const handleSignInEmail = async (
    email: string,
    password: string,
    setErrorMessage: any
  ) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      // check if user verified the email
      if (res.user.emailVerified) {
        setVerifiedStatus(true);
      } else {
        setErrorMessage({
          ...newErrMsg,
          general: 'Before login please verify your email',
        });
        handleSignOut();
      }
    } catch (e: any) {
      console.log(e);
      switch (e.code) {
        case 'auth/user-not-found':
          setErrorMessage({
            ...newErrMsg,
            general: 'User not found',
          });
          break;
        case 'auth/wrong-password':
          setErrorMessage({
            ...newErrMsg,
            general: 'Wrong password for this account',
          });
          break;
        default:
          setErrorMessage({
            ...newErrMsg,
            general: 'Error occured. Please contact with support',
          });
      }
    }
  };

  /// CREATE NEW USER WITH EMAIL & PASSWORD
  const handleSignUp = async (
    email: string,
    password: string,
    image: File | null,
    setErrorMessage: any
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser!);
      image
        ? handleImageProfile(auth.currentUser!.uid, image, auth.currentUser!)
        : await updateProfile(auth.currentUser!, {
            photoURL: 'src/assets/image-avatar.png',
          });
      setErrorMessage({
        ...newErrMsg,
        general: 'Your account was created. Please check your mailbox',
      });
    } catch (e: any) {
      console.log(e);
      switch (e.code) {
        case 'auth/email-already-in-use':
          setErrorMessage({
            ...newErrMsg,
            general: 'Email already in use',
          });
          break;
        default:
          setErrorMessage({
            ...newErrMsg,
            general: 'Error occured. Please contact with support',
          });
      }
    }
    handleSignOut();
  };

  /// SIGN OUT
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setVerifiedStatus(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignInGoogle,
        handleSignOut,
        handleSignInEmail,
        handleSignUp,
        isEmailVerified,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/// HOOK
export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext Provider');
  }

  return auth;
};
