import { useEffect, useRef } from "react"

function useInterval(callback: () => void, delay: number | null) {
	const savedCallback = useRef(callback)

	// Remember the latest callback if it changes.
	useEffect(() => {
			savedCallback.current = callback
	},[ callback ])

	// Set up the interval.
	useEffect(() => {
        function tick() {
          savedCallback.current();
        }
        if (delay !== null) {
          const id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
}

export default useInterval