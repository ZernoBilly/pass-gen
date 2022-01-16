import { useState } from "react";

import axios from "axios";

const useFetch = async (requestType: string, url: string, reqData?: any) => {
  const [response, setResponse] = useState(null);
  if (requestType === "post") {
    const { data } = await axios.post(url, reqData ? reqData : "");
    setResponse(data);
  }

  return response;
};

export default useFetch;
