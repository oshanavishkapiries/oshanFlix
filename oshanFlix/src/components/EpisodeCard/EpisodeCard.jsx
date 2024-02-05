/* eslint-disable react/prop-types */
import "./style.css";

const EpisodeCard = (props) => {

  return (
    <>
      <a target="_blank" href={`/player/${props.type}/${props.id}/${props.data.selectedSeasonIndex + 1}/${props.data.episodeNumber}`} rel="noreferrer">
        <div className="w-full p-[10px] fade-in">
          <div className="w-full rounded-md relative overflow-hidden aspect-[16/9]">
            <img className="w-full h-full object-cover" src={props.data.images} alt="poster" loading="lazy" />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-02 transition-all duration-200 hover:border-flix-orange hover:border-4">
              <div className="absolute bottom-2 left-2">
                <h1 className="text-sm">
                  {"Episode " + props.data.episodeNumber}
                </h1>
                <p className="text-xs">{"Season " + (props.data.selectedSeasonIndex + 1)}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default EpisodeCard;
