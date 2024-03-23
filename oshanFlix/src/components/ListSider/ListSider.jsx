import "./style.css";

const ListSider = (props) => {
  let Random_number = Math.floor(Math.random() * props.data.length);

  return (
    <>
      <div className="w-full h-[300px] relative">
        <div className="bg-gradient-02 w-full h-full absolute"></div>
        <img
          className="w-full h-full object-cover"
          src={props.data[Random_number].backdrop_url}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ListSider;
