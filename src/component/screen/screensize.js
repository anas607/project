// hooks/useDevice.js
import { useSelector } from 'react-redux';

const useDevice = () => {
  return useSelector((state) => state.screen.device);
};

export default useDevice;
