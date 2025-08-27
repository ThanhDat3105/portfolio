import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [refIntroduce, setRefIntroduce] = useState();
  const [refAbout, setRefAbout] = useState();
  const [refSkill, setRefSkill] = useState();
  const [refPortfolio, setRefPortfolio] = useState();
  const [refProject, setRefProject] = useState();
  const [refContact, setRefContact] = useState();
  return (
    <MyContext.Provider
      value={{
        refIntroduce,
        setRefIntroduce,
        refAbout,
        setRefAbout,
        refSkill,
        setRefSkill,
        refPortfolio,
        setRefPortfolio,
        refProject,
        setRefProject,
        refContact,
        setRefContact,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
