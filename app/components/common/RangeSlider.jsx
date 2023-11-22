import { useRef } from "react";
import { useState, useEffect } from "react";

export default function RangeSlider({
  name,
  min,
  max,
  steps,
  showSteps,
  numberOfSteps = 0,
  label,
  defaultVal,
  subHeading,
  rangeText,
  setRangeValue,
  ...rest
}) {
  const [val, selectedVal] = useState(defaultVal);
  const ref = useRef();
  const sliderSteps = steps ? steps : [0, 5, 10, 15, 20, 25, 30];

  useEffect(() => {
    if (defaultVal) {
      let colorValue = ((defaultVal / max) * 100).toFixed(3);

      let color = `linear-gradient(0deg, #62207E ${colorValue}%, #62207E${colorValue}% )`;
      ref.current.style.background = color;
    }
  }, [defaultVal, max]);

  const handleMouseMove = (e) => {
    // let value = (defaultVal && ref.current.value <= defaultVal) ? defaultVal : ref.current.value
    // let colorValue = ((value / max) * 100).toFixed(3);
    // let color = `linear-gradient(0deg, #62207E ${colorValue}%, #62207E ${colorValue}% )`;
    // ref.current.style.background = color;

    selectedVal(e.target.value);
    setRangeValue(e.target.value);
  };

  return (
    <div className={`p-3 ${showSteps ? `pb-[40px]` : "pb-5"}`}>
      {subHeading && <p className="text-center">{subHeading}</p>}
      {rangeText && (
        <h1 className="text-company text-center py-4">{rangeText}</h1>
      )}
      <div>
        {label?.length > 0 && (
          <div className="flex justify-between text-sm font-semibold">
            <span>{label[0]}</span>
            <span>{label[1]}</span>
          </div>
        )}
        <div className="m-0">
          <input
            {...rest}
            ref={ref}
            type="range"
            className="mt-0 shadow-none progress-range"
            // style={{ background: "#62207E", outline: "none" }}
            name={name ? name : "inputRangeSlider"}
            value={val}
            defaultValue={min ? min : 0}
            min={min ? min : 0}
            max={max ? max : 10}
            onChange={handleMouseMove}
            step={min ? 5 : numberOfSteps}
          />
          <div className="pr-4 pl-1">
            <div className="relative">
              {showSteps &&
                sliderSteps.map((numberOfSteps, index) => {
                  let leftSpacing = ((index / max) * 100).toFixed(3);
                  return (
                    <div
                      key={index}
                      style={{ left: `${leftSpacing}%` }}
                      className="absolute"
                    >
                      <div className="flex flex-col space-y-0 items-center">
                        {/* <span className="h-2 w-0.5 bg-secondary border-secondaryLight "></span> */}
                        <span className="text-[#7F7D7D]">{numberOfSteps}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
