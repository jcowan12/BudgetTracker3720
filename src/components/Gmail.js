import { useAuth0 } from "@auth0/auth0-react";
//import { RetEmail } from "./Profile"


export function SendEmail (email) {
  console.log(email, "Email sent.")
  window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "3720budgettracker@gmail.com",
      Password : "289C84F05C4B45807F8DC410625C4D93C435",
      To : email,
      From : "3720budgettracker@gmail.com",
      Subject : "Budget Tracker",
      Body : "Warning! You're nearing your budget limit!"
  });

}



    

