import { useState } from "react";
import Story from "./MakeStory";
import MadLibForm from "./MadLibForm";
import StoryData from "./StoryData";
// import MakeStory from "./StoryContainer";

const MadLib = () => {
  const madLibStories = StoryData();
  const [selectedStoryId, setSelectedStoryId] = useState(null);

  const handleStoryClick = (id) => {
    setSelectedStoryId(id);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {madLibStories.map((obj, i) => (
        <Story
          id={obj.id}
          key={obj.id}
          title={obj.title}
          img={obj.img}
          onClick={() => handleStoryClick(obj.id)}
        />
      ))}
      {selectedStoryId !== null && (
        <MadLibForm
          onClick={() => handleStoryClick(null)}
          formData={
            madLibStories.find((story) => story.id === selectedStoryId).formData
          }
          selectedStoryId={
            madLibStories.find((story) => story.id === selectedStoryId).id
          }
        />
      )}
    </div>
  );
};

export default MadLib;
