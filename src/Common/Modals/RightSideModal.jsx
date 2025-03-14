import React, { useState } from "react";

const RightSideModal = ({
  isModalOpen,
  onClose,
  modalTitle,
  showBackLink,
  iconImageSrc,
  nextPath,
  onNext,
  children,
}) => {
  const [slideOpen, setSlideOpen] = useState(isModalOpen);

  const closeModal = () => {
    setSlideOpen(false);
    if (onClose) onClose();
  };

  return (
    <div
      className={`relative z-[80] ${isModalOpen ? "block" : "hidden"}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
    >
      {/* Background backdrop */}
      <div
        className={`fixed inset-0 opacity-20 ${
          isModalOpen ? "bg-slate-600" : ""
        }`}
      ></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            {/* Slide-over panel */}
            <div
              className={`pointer-events-auto w-screen max-w-lg transform transition duration-500 ease-in-out sm:duration-700 ${
                isModalOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onAnimationEnd={() => !isModalOpen && setSlideOpen(false)}
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="px-6 pb-5 pt-[1.94rem]">
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-[0.44rem]">
                      {showBackLink && (
                        <button
                          onClick={() => window.history.back()}
                          className="back__wrapper inline-flex w-fit cursor-pointer focus-visible:ring-mango"
                          tabIndex="0"
                        >
                          <svg
                            className="translate-x-[-4px]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                          >
                            <path
                              d="M12.5 4.66699L7.5 10.5003L12.5 16.3337"
                              stroke="#171717"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Back</span>
                        </button>
                      )}
                      {iconImageSrc && (
                        <div className="icon__wrapper flex h-11 w-11 items-center justify-center rounded-full bg-mango">
                          <img src={iconImageSrc} alt="" className="h-6 w-6" />
                        </div>
                      )}
                    </div>

                    <div className="ml-3 flex h-7 items-center justify-self-end">
                      <button
                        onClick={closeModal}
                        type="button"
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus-visible:outline-mango"
                      >
                        <span className="absolute -inset-2.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          stroke="currentColor"
                        >
                          <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-gray-200">
                  <div className="flex justify-between px-6 text-xl font-extrabold leading-[1.875rem] text-mango-grey">
                    <h2>{modalTitle}</h2>
                    {nextPath && (
                      <button
                        onClick={onNext}
                        className="cursor-pointer text-sm text-mango"
                      >
                        Skip
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex-1 divide-gray-200 overflow-y-auto px-6 pb-8 pt-5">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideModal;
