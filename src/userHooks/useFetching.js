import React from "react";

export default function useFetching(callback) {
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [error, setError] = React.useState("");

  const fetching = async () => {
    try {
      setIsLoaded(true);

      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoaded(false);
    }
  };
  return [fetching, isLoaded, error];
}
