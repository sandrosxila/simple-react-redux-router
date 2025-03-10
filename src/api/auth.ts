import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import {auth} from '@/firebase';

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    return { userId: userCredential.user.uid, fullName: userCredential.user.displayName };
  }
  catch (err: any){
    return err.response!.data as {error: string};
  }
}

export const signUp = async (fullName: string, email: string, password: string) => {
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: fullName
    })
    
    return { userId: userCredential.user.uid }
  }
  catch(err: any) {
    return { error: err.message as string }
  }
}

export const logOut = async () => {
  try{
    await signOut(auth)
  }
  catch(err: any) {
    return { error: err.message as string }
  }
}