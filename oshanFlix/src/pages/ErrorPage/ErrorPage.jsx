import "./style.css";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <main>
        <div className="h-screen w-full flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-rocg">This page does not exist</h1>
            <Link to="/">
              <button
                className="py-3 bg-flix-orange mt-4 rounded-md font-semibold 
          text-sm w-full md:w-40 flex flex-row justify-center items-center hover:bg-flix-orange-tint-01"
              >
                Back Home&nbsp;
                <IoMdArrowDropright />
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
