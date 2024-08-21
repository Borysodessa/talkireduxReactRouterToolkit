import { Provider } from "react-redux";
import { store } from "./redux/store";
import { TeacherPage } from "./components/teacherPage/teacherPage";
import { TeacherProfileLayout } from "./components/teachers/TeacherProfileLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TeacherProfileLayout />,
  },
  {
    path: "teacherPage/:teacherPageId",
    element: <TeacherPage />,
  },
]);

// https://reactrouter.com/en/main/start/tutorial#adding-a-router 11

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
