import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser)
                const newUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        navigate(from, { replace: true })
                    })


            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='text-center'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;