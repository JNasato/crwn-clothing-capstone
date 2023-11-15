import { Middleware, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  blacklist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line no-undef
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  (middleware): middleware is Middleware => Boolean(middleware)
);
// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

export const persistor = persistStore(store);
