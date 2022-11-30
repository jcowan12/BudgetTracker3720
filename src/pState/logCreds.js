import usePersistState from '/usePersistState';

const UserProvider = (props) => {
  
// When initiating the new hook you need to pass a key for the store.
// you can also optionally pass a default value which will be overwritten if the store already exists.
const [userData, setUserData] = usePersistState('userData', {
    token: '',
    email: '',
});
 
// ...
  
// When setting values, they will now save to the state and also update the store in the browser.
setUserData({
    email: "example@gmail.com",
    token: "test123",
    })
}