import { useRef } from "react"
import "./ProfileForm.scss"
const ProfileForm = () => {

  const newPasswordInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAP0rUSHRnYnX065u0UIGKG8q046BL6Lco",
    {
        method: "POST",
        body: JSON.stringify({
            idToken: "",
            password: enteredNewPassword,
            returnSecureToken: false
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }
    ).then(res => {
       
    });
  }

  return (
    <form className="form" onSubmit={submitHandler} >
    <div className="form__control">
      <label htmlFor='new-password'>New Password</label>
      <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
     <div className="form__actions">
     <button>Change Password</button>
     </div>
    </div>
  </form>
  )
}

export default ProfileForm