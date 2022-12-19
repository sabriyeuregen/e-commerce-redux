import { useState, useCallback } from "react"
const useHttp = () => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");

  const sendRequest = useCallback(async (url) => {
    setIsLoading("Yukleniyor");

    const result = await fetch(url)
      .then(response => response.json())
      .then(response => response)
      .catch(error => {
        setHasError("Beklenmedik bir hata");
      })

    setIsLoading("Yuklendi");
    setData(result);
  }, [])

  return {
    data,
    isLoading,
    hasError,
    sendRequest
  }
}

export default useHttp;