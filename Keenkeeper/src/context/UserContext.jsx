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
      toast.error(`${expectedData.name} Call is already added in the timeline`);
    } else {
      setStoredCallData([...storedCallData, expectedData]);
      toast.success(`${expectedData.name} Call is added in the timeline`);
    }
  };

  const handleTextData = (expectedData) => {
    const isExistTextData = storedTextData.find(
      (data) => data.id === expectedData.id,
    );
    if (isExistTextData) {
        toast.error(`${expectedData.name} Text is already added in the timeline`);
    } else {
      setStoredTextData([...storedTextData, expectedData]);
      toast.success(`${expectedData.name} Text is added in the timeline`);
    }
  };

  const handleVideoData = (expectedData) => {
    const isExistVideoData = storedVideoData.find(
      (data) => data.id === expectedData.id,
    );
    if (isExistVideoData) {
      toast.error(`${expectedData.name}Video is already added in the timeline`);
    } else {
      setStoredVideoData([...storedVideoData, expectedData]);
      toast.success(`${expectedData.name} Video is added in the timeline`);
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
