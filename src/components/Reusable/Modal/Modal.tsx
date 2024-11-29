import { ReactNode } from "react";
import { ICONS } from "../../../assets";

type TModalProps = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  children: ReactNode;
  title?: string;
};

const Modal: React.FC<TModalProps> = ({
  openModal,
  setOpenModal,
  children,
  title,
}) => {
  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`p-5 rounded-xl absolute w-[480px] h-fit max-h-[530px] overflow-y-auto bg-white ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex items-center justify-between">
            {title && (
              <h1 className="text-[#251605] text-xl font-medium leading-6 w-full">
                {title}
              </h1>
            )}
            <div className="flex justify-end w-full">
              <img
                onClick={() => setOpenModal(false)}
                src={ICONS.closeIcon}
                alt="close-icon"
                className="size-8 cursor-pointer"
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
