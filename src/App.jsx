//=== import statements ===
import { useState } from "react";
import { episodeList } from "./data";
import OneEpisode from "./OneEpisode";

export default function App() {
  // vvariables and javascript logic
  //return(JSX and Javascript)
  const episodes = episodeList;
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  console.log(episodeList);
  return (
    <div className="episodeContainer">
      <button onClick={() => setSelectedEpisode(null)}>Episodes</button>
      {selectedEpisode ? (
        <OneEpisode
          key={selectedEpisode.id}
          id={ selectedEpisode.id }
          title={selectedEpisode.title}
          description={selectedEpisode.description}
        />
      ) : (
          <>
    <p>Please select an episode to learn more 👀</p>
    {episodes.map((episode) => (
      <div key={episode.id} onClick={() => setSelectedEpisode(episode)}>
        <h3>{episode.title}</h3>
      </div>
    ))}
  </>
)}
</div>
)
};