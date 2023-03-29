import {Config} from "./config";
import Production from "./production";
import Localhost from "./localhost";

export default (): Config => {
  return import.meta.env.NODE_ENV === 'production'
    ? Production() : Localhost();
};
