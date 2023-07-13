import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from './firebase';

interface AuthType {
  user: User | null;
  handleSignInGoogle: () => {};
  handleSignOut: () => {};
}

/// Kontekst
const AuthContext = createContext<AuthType | null>(null);

/// Provider
export const AuthProvider = ({ children }: any) => {
  const [user, setUserData] = useState<User | null>(null);

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
  /// SIGN OUT
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleSignInGoogle, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

/// Hook
export const useAuth = () => {
  const auth = useContext(AuthContext);

  // zabezpieczenie na wypadek gdyby useAuth zostało wykorzystane w komponencie który nie jest dzieckiem providera
  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext Provider');
  }

  return auth;
};
