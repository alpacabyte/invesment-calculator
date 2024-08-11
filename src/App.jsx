import { useState } from "react";
import AppHeader from "./components/appheader";
import DataTable from "./components/DataTable";
import UserInputContainer from "./components/UserInputContainer";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 3,
  });

  const isInputValid = inputData.duration >= 1;

  const handleChange = (e) => {
    setInputData((oldData) => ({
      ...oldData,
      [e.target.name]: +e.target.value,
    }));
  };
  return (
    <>
      <AppHeader />
      <UserInputContainer data={inputData} onChange={handleChange} />
      {isInputValid ? (
        <DataTable data={inputData} />
      ) : (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
