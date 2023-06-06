import dreamer from "../assets/dreamer.png";
import hero from "../assets/hero.png";
import band from "../assets/band.png";

const StoryData = () => {
  const madLibStories = [
    {
      id: "story-1",
      img: `${dreamer}`,
      title: "The Ambitious Dreamer",
      formData: ["Noun", "Plural noun", "Adjective", "Verb"],
    },
    {
      id: "story-2",
      img: `${hero}`,
      title: "A Heroic Tale",
      formData: ["Noun", "Plural noun", "Adjective", "Verb"],
    },
    {
      id: "story-3",
      img: `${band}`,
      title: "Enthralling Performers",
      formData: ["Noun", "Plural noun", "Adjective", "Verb", "Time period"],
    },
  ];

  return madLibStories;
};

export default StoryData;
