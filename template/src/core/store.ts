/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 *
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import Env from "react-native-config";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";

import constants from "./constants";
import reducer from "./reducer";

const persistConfig = {
  key: constants.PERSIST_KEY,
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devTools: Env.ENV === "development"
});

const persistor = persistStore(store);

export { persistor, store };

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;
