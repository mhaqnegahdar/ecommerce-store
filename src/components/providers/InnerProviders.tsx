// Hooks / Packages
import { Toaster } from "react-hot-toast";

// Components
import ModalProvider from "./ModalProvider";

const InnerProviders = () => {
  return (
    <>
      <ModalProvider />
      <Toaster position="top-center" />
    </>
  );
};

export default InnerProviders;
