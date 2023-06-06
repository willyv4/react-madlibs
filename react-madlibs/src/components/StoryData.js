import { v4 as uuid } from "uuid";
import dreamer from "../assets/dreamer.png";
import hero from "../assets/hero.png";
import band from "../assets/band.png";

const StoryData = () => {
  let noun = "";
  let adjective = "";
  let verb = "";
  let pluralNoun = "";
  let name = "";
  let timePeriod = "";

  const madLibStories = [
    {
      id: uuid(),
      img: `${dreamer}`,
      title: "The Ambitious Dreamer",
      story: `Once upon a time, in a ${noun} far away, there lived a ${adjective} ${noun}. This ${noun} had a dream to ${verb} the world. With __number__ ${pluralNoun} in hand, the ${adjective} ${noun} embarked on an epic journey. Along the way, they encountered a ${adjective} ${noun} and a ${adjective} ${noun}. Together, they faced numerous challenges and overcame them with ${adjective} determination. In the end, the ${adjective} ${noun} achieved their dream and became a ${noun} that inspired others.`,
      formData: ["Noun", "Plural noun", "Adjective", "Verb"],
    },
    {
      id: uuid(),
      img: `${hero}`,
      title: "A Heroic Tale",
      story: `In a ${noun} town, where ${pluralNoun} roamed freely, there was a ${adjective} ${noun} named ${name}. ${name} had a peculiar ability to ${verb} with ${pluralNoun}. This made them the ${adjective} hero of the town. One day, a ${adjective} ${noun} threatened the peace, and ${name} bravely stepped up to ${verb} the day. With their ${adjective} ${noun} and quick thinking, they saved the town and became a ${adjective} legend.`,
      formData: ["Noun", "Plural noun", "Adjective", "Verb"],
    },
    {
      id: uuid(),
      img: `${band}`,
      title: "Enthralling Performers",
      story: `Once upon a ${timePeriod}, in a ${adjective} ${noun}, there was a group of ${pluralNoun} who loved to ${verb}. They formed a ${adjective} ${noun} and traveled to different ${noun}s to showcase their talent. Everywhere they performed, they received ${adjective} applause. Their energetic and ${adjective} performances left the audience ${adjective} and wanting more. Through their passion and hard work, the ${adjective} ${noun} became renowned ${pluralNoun}s, leaving a lasting impact on the ${noun} industry.`,
      formData: ["Noun", "Plural noun", "Adjective", "Verb", "Time period"],
    },
  ];

  return madLibStories;
};

export default StoryData;
