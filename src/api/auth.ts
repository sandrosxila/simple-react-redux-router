import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '@/firebase';
import { FirebaseError } from 'firebase/app';

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return {
      userId: userCredential.user.uid,
      fullName: userCredential.user.displayName,
    };
  }
  catch (err: unknown) {
    if(err instanceof FirebaseError){
      return { error: err.message };
    }

    return { error: 'Something went wrong' };
  }
};

export const signUp = async (
  fullName: string,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: fullName,
    });

    return { userId: userCredential.user.uid };
  }
  catch (err: unknown) {
    if(err instanceof FirebaseError){
      return { error: err.message as string };
    }

    return { error: 'Something went wrong' };
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  }
  catch (err: unknown) {
    if(err instanceof FirebaseError){
      return { error: err.message as string };
    }

    return { error: 'Something went wrong' };
  }
};
