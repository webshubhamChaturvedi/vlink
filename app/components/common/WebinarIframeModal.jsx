import React, { useEffect } from "react";
import ButtonModal from "../common/ButtonModal";

const WebinarIframeModal = ({ isOpen, setIsOpen, video }) => {
  return (
    <ButtonModal
      isOpen={isOpen}
      toggle={setIsOpen}
      size="3xl"
      body={{
        content: (
          <>
            <div className="flex items-start justify-end">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div>
              <iframe
                id="inlineFrameExample"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title="Inline Frame Example"
                width="100%"
                style={{ height: "60vh" }}
                src={video}
              ></iframe>
            </div>
          </>
        ),
      }}
    />
  );
};

export default WebinarIframeModal;
