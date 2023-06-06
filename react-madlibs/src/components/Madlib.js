import { useState } from "react";
import Story from "./MakeStory";
import MadLibForm from "./MadLibForm";
import StoryData from "./StoryData";
import MakeStory from "./StoryContainer";

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
          id={i}
          key={obj.id}
          title={obj.title}
          story={obj.story}
          img={obj.img}
          formData={obj.formData}
          onClick={() => handleStoryClick(i)}
        />
      ))}
      {selectedStoryId !== null && (
        <MadLibForm
          onClick={() => handleStoryClick(null)}
          formData={madLibStories[selectedStoryId].formData}
          story={madLibStories[selectedStoryId].story}
        />
      )}
      <MakeStory />
    </div>
  );
};

export default MadLib;
