import { createStore } from "redux";
import rootReducer from "./Tdo/reducers";
import { persistStore,persistReducer } from "redux-persist";
import  storage  from "redux-persist/lib/storage";

const persistConfig={
    key:"Task",
    storage
    
}
const persistReduc=persistReducer(persistConfig,rootReducer)



const store=createStore(
    persistReduc,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
const persistor=persistStore(store)


export default store;
export {persistor}