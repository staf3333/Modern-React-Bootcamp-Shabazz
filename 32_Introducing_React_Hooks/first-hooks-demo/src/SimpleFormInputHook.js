import { useState } from "react";
import useFormState from "./hooks/useFormState";

export default function SimpleFormInputHook() {
    const [email, updateEmail, resetEmail] = useFormState("");
    const [password, updatePassword, resetPassword] = useFormState("");
    return (
        <div>
            <h1>Email is... {email} Password is.. {password}</h1>
            <input type="text" value={email} onChange={updateEmail} />
            <input type="text" value={password} onChange={updatePassword} />
            <button onClick={resetEmail}>Reset Email</button>
            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}