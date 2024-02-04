/* eslint-disable react/prop-types */
const ButtonPrimary = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`${props.class} bg-flix-orange rounded-md py-[5px] px-[7px] w-[80px] 
        text-sm border border-transparent transition 
         hover:bg-flix-orange-tint-01 hover:border-flix-orange`}
      >
        {props.text}
      </button>
    </>
  );
};

export default ButtonPrimary;
