import axios from "axios";
import { FECTCH_USER } from "./types";

const fetchUser = () => {
  return function (dispatch) {
    axios.get("/api/current_user").then((res) =>
      dispatch({
        type: FECTCH_USER,
        payload: res,
      })
    );
  };
};
