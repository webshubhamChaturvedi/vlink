const { useEffect } = require("react");
const { useState } = require("react");

const useDebounce = (callback, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(callback);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [callback, delay]);

    return debouncedValue;
};

export default useDebounce