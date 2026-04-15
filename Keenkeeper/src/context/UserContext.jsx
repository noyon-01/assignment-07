import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [storedCallData, setStoredCallData] = useState([]);
  const [storedTextData, setStoredTextData] = useState([]);
  const [storedVideoData, setStoredVideoData] = useState([]);

  const handleCallData = (expectedData) => {
    const isExistCallData = storedCallData.find(
      (data) => data.id === expectedData.id,
    );
    if (isExistCallData) {
      alert("This Call is alredy added");
    } else {
      setStoredCallData([...storedCallData, expectedData]);
    }
  };

  const handleTextData = (expectedData) => {
    const isExistTextData = storedTextData.find(
      (data) => data.id === expectedData.id,
    );
    if (isExistTextData) {
      alert("This text is alredy added");
    } else {
      setStoredTextData([...storedTextData, expectedData]);
    }
  };

  const handleVideoData = (expectedData) => {
    const isExistVideoData = storedVideoData.find(
      (data) => data.id === expectedData.id,
    );
    if (isExistVideoData) {
      alert("This video is alredy added");
    } else {
      setStoredVideoData([...storedVideoData, expectedData]);
    }
  };

  const data = {
    storedCallData,
    handleCallData,
    storedTextData,
    handleTextData,
    storedVideoData,
    handleVideoData,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
