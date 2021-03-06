import { createUser } from './db';
import { useRouter } from 'next/dist/client/router';

import firebase from './firebase';

import { createContext, useContext, useEffect, useState } from 'react';

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.providerData[0].photoURL
      ? user.providerData[0].photoURL?.replace('normal', '200x200')
      : ''
  };
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signInWithGitHub = (redirect) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          router.push(redirect);
        }
      });
  };

  const signInWithGoogle = (redirect) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          router.push(redirect);
        }
      });
  };

  const signInWithTwitter = (redirect) => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          router.push(redirect);
        }
      });
  };

  const signOut = () => {
    router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGitHub,
    signInWithGoogle,
    signInWithTwitter,
    signOut
  };
}

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};
