import { createContext, useState } from "react";
import { toast } from "react-toastify";

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
      toast.error(`${expectedData.name} is already added in the timeline`);
      alert();
    } else {
      setStoredCallData([...storedCallData, expectedData]);
      toast.success(`${expectedData.name} is added in the timeline`);
    }
  };

  const handleTextData = (expectedData) => {
    const isExistTextData = storedTextData.find(
      (data) => data.id === expectedData.id,
    );
    if (isExistTextData) {
      alert(`${expectedData.name} is already added in the timeline`);
    } else {
      setStoredTextData([...storedTextData, expectedData]);
      alert(`${expectedData.name} is added in the timeline`);
    }
  };

  const handleVideoData = (expectedData) => {
    const isExistVideoData = storedVideoData.find(
      (data) => data.id === expectedData.id,
    );
    if (isExistVideoData) {
      alert(`${expectedData.name} is already added in the timeline`);
    } else {
      setStoredVideoData([...storedVideoData, expectedData]);
      alert(`${expectedData.name} is added in the timeline`);
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
