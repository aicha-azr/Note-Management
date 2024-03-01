"use client"
import { Provider} from "react-redux";
import store, { AppDispatch } from "./redux/Store/store";
import Home from "./Notes/page";
import CreateNote from "./Create/page";
import Form from "@/app/ReusableComponent/Form";
export default function App() {
  return (<>
  <Provider store={store}>
            <Home />
            <CreateNote />
            <Form />
  </Provider>
            </>
    
  );
}
