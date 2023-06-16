import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './SignUp.css'
function SignUp() {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'http://localhost:5000/signup',
            {
                userName,
                email,
                password
            }
        ).then((res) => {
            if (res.data.message === "success") {
                navigate('/login')
            } else {
                alert(res.data.message);
            }
        });
    }

    return (
        <>
            <div className="signUp">
                <form className="signUp-form" onSubmit={handleSubmit.bind(this)}>

                    <div className="signUp-part">
                        <label htmlFor="userName"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="userName" required
                            onChange={e => setUsername(e.target.value)} />

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email" required
                            onChange={e => setEmail(e.target.value)} />

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required
                            onChange={e => setPassword(e.target.value)} />

                        <label className="agreeTeams">
                            <input name='terms' type='checkbox' required /> I agree to Privacy Policy and Terms of Use.
                        </label>

                        <button type="submit">signUp</button>


                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;