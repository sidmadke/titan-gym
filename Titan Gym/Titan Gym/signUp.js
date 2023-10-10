const signInWithGoogleButton = document.getElementById('signInWithGoogle');

const auth = firebase.auth();
const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  
    auth.signInWithPopup(googleProvider)
    .then(() => {
      window.location.assign('#');
    })
    .catch((error) => {
      console.error(error);
    })
  }
  
  signInWithGoogleButton.addEventListener('click', signInWithGoogle);
  