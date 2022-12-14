/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 *
 */

import { createApi } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";

import Env from "../env";
import axiosBaseQuery from "./axiosBaseQuery";

const api = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: Env.get("API_URL", "/") }),
  reducerPath: "api",
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      if (action.payload) {
        return action.payload[reducerPath];
      }

      return action.payload;
    }
  },
  endpoints: () => ({})
});

export default api;
