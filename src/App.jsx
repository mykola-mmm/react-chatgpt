import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import {useState} from "react";
import LoginPage from "./pages/loginpage/loginpage";
import PolicyPage from "./pages/policypage/policypage";
import TermsOfUse from "./components/termsofuse/termsofuse";
import PrivacyPolicy from "./components/privacypolicy/privacypolicy";
import GeneralPolicy from "./components/generalpolicy/generalpolicy";
import TstPages from "./pages/tstpages/tstpages";
import ChatPage from "./pages/chatpage/chatpage";

function App() {

  const [isLogedIn, setLogedIn] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLogedIn ? <ChatPage /> : <LoginPage onClickLogin={setLogedIn}/>,
    },
    {
      path: "/policies",
      element: <PolicyPage />,
      children: [
        {
          path: "/policies/",
          element: <Navigate to="/404" />, //tst
        },
        {
          path: "/policies/terms-of-use/",
          element: <TermsOfUse />,
        },
        {
          path: "/policies/privacy-policy/",
          element: <PrivacyPolicy />,
        }
      ]
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;

// import React from 'react';



// const SlowText = (props) => {
//   const { speed, text } = props;
//   const [placeholder, setPlaceholder] = React.useState(text[0]);

//   const index = React.useRef(0);

//   React.useEffect(() => {
//     function tick() {
//       index.current++;
//       setPlaceholder((prev) => prev + text[index.current]);
//     }
//     if (index.current < text.length - 1) {
//       let addChar = setInterval(tick, speed);
//       return () => clearInterval(addChar);
//     }
//   }, [placeholder, speed, text]);
//   return <span>{placeholder}</span>
// }

// const App = () => {
//   return (
//     <div>
//       <SlowText speed={100} text={"Hello World 1"} />
//       {/* <SlowText speed={200} text={"Hello World 2"}/>
//       <SlowText speed={500} text={"Hello World 3"} /> */}
//     </div>
//   )
// }

// export default App;