import ReactDOM from "react-dom";
import { FC, PropsWithChildren } from "react";
type Props = {};
const Modal: FC<PropsWithChildren<Props>> = ({ children }) => {
  const modal = document.getElementById("portal-modal");
  let portal = null;

  if (modal) {
    portal = ReactDOM.createPortal(children, modal);
  }

  return portal;
};

export default Modal;
