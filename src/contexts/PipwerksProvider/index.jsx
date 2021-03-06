import { createContext, useContext, useEffect } from 'react';
import usePipwerks from 'hooks/use-pipwerks';

const PipwerksContext = createContext({
  pipwerks: undefined,
});

const PipwerksProvider = ({ children }) => {
  const { pipwerks } = usePipwerks('libraries/SCORM_API_wrapper.js');

  useEffect(() => {
    if (pipwerks) {
      pipwerks.SCORM.version = '1.2';
      pipwerks.SCORM.init();
    }
  }, [pipwerks]);

  return (
    <PipwerksContext.Provider value={{ pipwerks }}>
      {children}
    </PipwerksContext.Provider>
  );
};

export default PipwerksProvider;
export const usePipwerksContext = () => useContext(PipwerksContext);
