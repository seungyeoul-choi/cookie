// 컴포넌트 지연 로딩(코드 분할)을 위한 lazy와 로딩 중일 때 보여줄 UI를 처리하는 Suspense를 임포트합니다.
import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

const { createBrowserRouter } = require("react-router-dom");

// 컴포넌트가 로딩될 때 화면에 표시될 임시 UI(로딩 컴포넌트)입니다.
const Loading = <div>Loading....</div>

// lazy()를 사용하여 해당 경로로 이동할 때만 MainPage와 AboutPage 컴포넌트를 비동기적으로 로딩합니다.
// 이를 통해 초기 자바스크립트 번들 크기를 줄이고 애플리케이션의 로딩 속도를 최적화할 수 있습니다.
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))

// createBrowserRouter를 호출하여 URL 경로(path)와 해당 경로에서 보여질 컴포넌트(element)를 배열 형태로 매핑합니다.
const root = createBrowserRouter([
    {
        path: "/",
        // Suspense로 감싸서 Main 컴포넌트를 불러오는 동안 일시적으로 Loading 요소를 렌더링하도록 설정합니다.
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "/about",
        // 동일하게 About 컴포넌트가 로딩되는 동안 Loading 요소를 렌더링합니다.
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: "/todo",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        children: todoRouter()
    }
])

// 생성된 라우터 객체를 기본으로 내보냅니다.
// 이 객체는 App.js 등의 최상위 컴포넌트에서 RouterProvider의 prop으로 전달되어 라우팅을 활성화하는 데 사용됩니다.
export default root;