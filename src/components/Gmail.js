import { useAuth0 } from "@auth0/auth0-react";
//import { RetEmail } from "./Profile"


export function SendEmail () {
  const { user } = useAuth0();
  console.log(user.email, "Email sent.")
  const useremail = user.email
  window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "3720budgettracker@gmail.com",
      Password : "289C84F05C4B45807F8DC410625C4D93C435",
      To : useremail,
      From : "3720budgettracker@gmail.com",
      Subject : "Budget Tracker",
      Body : "Warning! You're nearing your budget limit!"
  });

}



    

