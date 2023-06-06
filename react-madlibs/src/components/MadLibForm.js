import { useState, useEffect } from "react";
import MakeStory from "./StoryContainer";

const MadLibForm = ({ formData, onClick, selectedStoryId }) => {
  const [formValues, setFormValues] = useState({});
  const [formHidden, setFormHidden] = useState(false);
  const [submittedVals, setSubmittedVals] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmittedVals([formValues]);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues((formVal) => ({
      ...formVal,
      [name]: value,
    }));
  };

  const toggleVisibility = () => {
    setFormHidden(!formHidden);
  };

  useEffect(() => {
    if (formHidden) {
      onClick();
    }
  }, [formHidden, onClick]);

  if (formHidden) {
    return null;
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full h-full h-30 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded z-20 bg-black bg-opacity-80"
      >
        <div className="flex flex-col py-6 px-6 border-2 border-cyan-200 rounded shadow-md shadow-cyan-200">
          <button
            onClick={toggleVisibility}
            className="mb-4 text-rose-200 font-bold border-2 border-rose-200 rounded shadow-lg transition duration-500 ease-in-out hover:shadow-rose-300/50"
          >
            X
          </button>
          {formData &&
            formData.map((inputName, i) => (
              <div key={i} className="py-1">
                <label htmlFor={inputName} className="text-white font-bold">
                  {inputName}
                </label>
                <input
                  className="w-full rounded py-1"
                  type="text"
                  id={inputName}
                  name={inputName}
                  value={formValues[inputName] || ""}
                  onChange={handleChange}
                />
              </div>
            ))}

          <button
            type="submit"
            className="mt-4 text-emerald-200 font-bold border-2 border-emerald-200 rounded shadow-lg transition duration-500 ease-in-out hover:shadow-emerald-300/50"
          >
            Generate Story
          </button>
        </div>
      </form>
      {submittedVals.length > 0 && (
        <MakeStory formData={submittedVals} selectedStoryId={selectedStoryId} />
      )}
    </div>
  );
};

export default MadLibForm;
