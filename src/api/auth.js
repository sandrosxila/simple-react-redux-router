import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import {auth} from '../firebase';

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    return { userId: userCredential.user.uid, fullName: userCredential.user.displayName };
  }
  catch (err){
    return err.response.data;
  }
}

export const signUp = async (fullName, email, password) => {
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
      displayName: fullName
    })
    
    return { userId: userCredential.user.uid }
  }
  catch(err) {
    return { error: err.message }
  }
}

export const logOut = async () => {
  try{
    await signOut(auth)
  }
  catch(err) {
    console.error(err)
    return { error: err.message }
  }
}