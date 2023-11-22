import Image from "next/image";

const SendButton = ({ children, onClick, icon, disabled=false , ...rest }) => {

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick&&onClick}
      className={` px-3 py-2 rounded-t-lg  rounded-r-lg  text-lightBlue font-black bg-lavender hover:bg-lavenderDark focus:outline-none dark:bg-gray dark:text-white dark:border-gray dark:hover:bg-gray dark:hover:border-gray dark:focus:ring-grey`}
      {...rest}
    >
      <div className="flex items-center justify-center ">
        {icon&&
          <Image 
            src={icon.src} 
            alt="arrow-up-right" 
            width={icon.width||24} 
            height={icon.height||24}
          />
        }
        <span>{children&&children}</span>
      </div>
    </button>
  );
};

export default SendButton;