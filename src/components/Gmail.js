import { RetEmail } from "./Profile"

export function sendEmail () {
  console.log(RetEmail(), "Email sent.")
  const useremail = RetEmail()
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



    

