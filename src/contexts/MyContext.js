import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [refIntroduce, setRefIntroduce] = useState();
  const [refAbout, setRefAbout] = useState();
  const [refSkill, setRefSkill] = useState();
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
