/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 */

import { combineReducers } from "@reduxjs/toolkit";

import api from "./api";

export default combineReducers({
  [api.reducerPath]: api.reducer
});
