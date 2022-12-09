import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <h4>Hello, {user.name}!</h4>
            </div>
        )
    )
}

/*export function RetEmail() {
    const { user } = useAuth0();
    
    return user.email;
}*/

export default Profile
