const MakeStory = ({ formData, selectedStoryId }) => {
  console.log(formData[0]);
  const stories = [
    {
      id: "story-1",
      story: `Once upon a time, in a ${formData[0].Noun} far away, there lived a ${formData[0].Adjective} ${formData[0].Noun}. This ${formData[0].Noun} had a dream to ${formData[0].Verb} the world. With 3 ${formData[0]["Plural noun"]} in hand, the ${formData[0].Adjective} ${formData[0].Noun} embarked on an epic journey. Along the way, they encountered a ${formData[0].Adjective} ${formData[0].Noun} and a ${formData[0].Adjective} ${formData[0].Noun}. Together, they faced numerous challenges and overcame them with ${formData[0].Adjective} determination. In the end, the ${formData[0].Adjective} ${formData[0].Noun} achieved their dream and became a ${formData[0].Noun} that inspired others.`,
    },
    {
      id: "story-2",
      story: `In a ${formData[0].Noun} town, where ${formData[0]["Plural noun"]} roamed freely, there was a ${formData[0].Adjective} ${formData[0].Noun} named ${formData[0].Name}. ${formData[0].Name} had a peculiar ability to ${formData[0].Verb} with ${formData[0]["Plural noun"]}. This made them the ${formData[0].Adjective} hero of the town. One day, a ${formData[0].Adjective} ${formData[0].Noun} threatened the peace, and ${formData[0].Name} bravely stepped up to ${formData[0].Verb} the day. With their ${formData[0].Adjective} ${formData[0].Noun} and quick thinking, they saved the town and became a ${formData[0].Adjective} legend.`,
    },
    {
      id: "story-3",
      story: `Once upon a ${formData[0]["Time period"]}, in a ${formData[0].Adjective} ${formData[0].Noun}, there was a group of ${formData[0]["Plural noun"]} who loved to ${formData[0].Verb}. They formed a ${formData[0].Adjective} ${formData[0].Noun} and traveled to different ${formData[0].Noun}s to showcase their talent. Everywhere they performed, they received ${formData[0].Adjective} applause. Their energetic and ${formData[0].Adjective} performances left the audience ${formData[0].Adjective} and wanting more. Through their passion and hard work, the ${formData[0].Adjective} ${formData[0].Noun} became renowned ${formData[0]["Plural noun"]}s, leaving a lasting impact on the ${formData[0].Noun} industry.`,
    },
  ];

  const selectedStory = stories.find((story) => story.id === selectedStoryId);

  if (!selectedStory) {
    return null;
  }
  console.log(selectedStory.id);
  console.log(selectedStory.story);

  return (
    <div className="w-full absolute bottom-0 right-0 z-30 mb-10 p-10">
      <p className="text-white text-lg font-bold">{selectedStory.story}</p>
    </div>
  );
};

export default MakeStory;
