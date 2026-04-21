import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import { Box } from "@radix-ui/themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  return (
    <Box height="100svh">
      <RouterProvider router={router} />
    </Box>
  );
}
