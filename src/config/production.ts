import {Config} from "./config";

export default(): Config => {
  return {
    backendBaseUrl: import.meta.env.BACKEND_BASE_URL,
  };
};
