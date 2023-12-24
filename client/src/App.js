import {routes} from "./routes";
import Navbar from "./components/Navbar";
import { useRoutes } from "react-router-dom";

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Navbar />
      {element}
    </>
  );
}
