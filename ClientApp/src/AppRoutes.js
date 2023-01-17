import { Counter } from "./components/pages/Counter";
import { FetchData } from "./components/pages/FetchData";
import { Home } from "./components/pages/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
];
export default AppRoutes;
