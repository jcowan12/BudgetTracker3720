import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import App from "../App";

const Profile = () => {
    const { user } = useAuth0();

    return (
        <div>
            {JSON.stringify(user, null, 2)}
        </div>
    )
}

export default Profile
