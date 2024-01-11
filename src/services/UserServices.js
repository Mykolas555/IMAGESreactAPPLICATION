import firebase from "../firebase";

export const getUserData = (user, setUser) => {
    if (user !== null) {
        firebase
            .firestore()
            .collection('users')
            .where('uid', '==', user?.uid)
            .get()
            .then((userData) => {
                try {
                    if (userData.docs.length > 0) {
                        // Assuming you want to set the user data only if it exists
                        setUser(userData.docs[0].data());
                    } else {
                        console.error("User data not found");
                    }
                } catch (err) {
                    console.log(err);
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }
};
