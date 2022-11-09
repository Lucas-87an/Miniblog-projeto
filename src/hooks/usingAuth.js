import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const usingAuth =()=>{
    const [ error, setError]= useState(null)
    const [loading, setLoading]=useState(null)

    const [cancelled, setCancelled]=useState(false)

    const auth =getAuth()
    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }
    const createUser = async (data)=>{
        checkIfIsCancelled()

        setLoading(true);
        setError(false)

        try {
            const {user}= await createUserWithEmailAndPassword (
                auth,
                data.email,
                data.password
            );
            await updateProfile (user,{displayName:data.displayName});
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.messsage);

                let systemErrorMessage

                if(error.message.includes("Password")){
                    systemErrorMessage("A senha precisa conter pelo menos 6 caracteres")
                } else if(error.message.includes("email-already")){
                    systemErrorMessage("E-mail já cadastrado")
                } else {
                    systemErrorMessage("Ocorreu um erro, tente novamente mais tarde")
                }
        }
    };

    useEffect=(()=>{
        return ()=> setCancelled(true);
    },[]);


    return{
        auth,
        createUser,
        loading,
        error
    }
}