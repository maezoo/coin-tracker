import { createBrowserRouter} from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";

//createBrowserRouter() 자체가 하나의 함수이므로 반드시 괄호가 있어야 함
//라우트 정보를 객체로 만들고([]) 그 안에 {} 객체를 넣은 것
const router = createBrowserRouter([
  {
    path:"/", 
    element: <Root />,
    children:[
      {
      path: "",
      element: <Home />,
      errorElement: <ErrorComponent />,
    },
      {
        path:"about",
      element: <About />,
    },
    ],
    errorElement: <NotFound />, //에러 페이지 추가
  },
]);


export default router;
