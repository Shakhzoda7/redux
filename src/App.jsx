import { useDispatch, useSelector } from "react-redux";
import { addCustomer, removeCustomer } from "./store/customersReducer";
import { useState } from "react";

function App() {
  //const [cash, setCash] = useState(0)
  const [username, setUserName] = useState("") 

  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customersReducer.customers)

  const addCash = () => {
    dispatch({type: "ADD CASH", payload: 1000000})
  }

  const getCash = () => {
    dispatch({type: "GET CASH", payload: 5000})
  }

  const handleAddCustomer = () => {
    dispatch(addCustomer(username));
  };

  const handleRemoveCustomer = () => {
    dispatch(removeCustomer(username));
    console.log("removed: ", username);
  };


  return(
    <>
      <h1>Redux: {cash} сум</h1>
      <button onClick={() => addCash()}>Добавить</button>
      <button onClick={() => getCash()}>Снять деньги</button>

      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="tetx"
      />

      <button onClick={() => handleAddCustomer()}>Добавить пользователя</button>

      {customers.length > 0 && 
        customers.map((customer) => (
          <div key={customer}>
            {customer} 
            <button onClick={() => handleRemoveCustomer()}>Удалить</button>
          </div>
        ))}
    </>
  )
}

export default App;
