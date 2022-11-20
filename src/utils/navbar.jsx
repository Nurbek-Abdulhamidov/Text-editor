import React, { Suspense, lazy } from "react";
import useId from "../hooks/useId";

const First = lazy(() => import("../pages/First"));
const Second = lazy(() => import("../pages/Second"));
const SecondPage = lazy(() => import("../pages/SecondPage"));
const Third = lazy(() => import("../pages/Third"));
const ThirdPage = lazy(() => import("../pages/ThirdPage"));
const Fourth = lazy(() => import("../pages/Fourth"));
const FourthPage = lazy(() => import("../pages/FourthPage"));
const Fifth = lazy(() => import("../pages/Fifth"));
const FifthPage = lazy(() => import("../pages/FifthPage"));
const Sixth = lazy(() => import("../pages/Six"));
const Seventh = lazy(() => import("../pages/Seven"));
const Eighth = lazy(() => import("../pages/Eighth"));
const Nineth = lazy(() => import("../pages/Nineth"));
const Tenth = lazy(() => import("../pages/Tenth"));

export const navbar = [
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <First />
      </Suspense>
    ),
    title: "관리자 관리",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Second />
      </Suspense>
    ),
    title: " 국가 건강검진 상담 ",
    path: "/second",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <SecondPage />
      </Suspense>
    ),
    title: " Secondpage ",
    path: "/second:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Third />
      </Suspense>
    ),
    title: "종합 건강검진 상담 ",
    path: "/third",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <ThirdPage />
      </Suspense>
    ),
    title: "종합 건강검진 상담 ",
    path: "/third:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Fourth />
      </Suspense>
    ),
    title: " 맞춤형 상담 ",
    path: "/fourth",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <FourthPage />
      </Suspense>
    ),
    title: " 맞춤형 상담 ",
    path: "/fourth:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Fifth />
      </Suspense>
    ),
    title: "맞춤형 식이&운동 ",
    path: "/fifth",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <FifthPage />
      </Suspense>
    ),
    title: "맞춤형 식이&운동 ",
    path: "/fifth:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Sixth />
      </Suspense>
    ),
    title: "플랫폼 관리",
    path: "/sixth",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Seventh />
      </Suspense>
    ),
    title: "공지사항",
    path: "/seventh",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Eighth />
      </Suspense>
    ),
    title: "FAQ",
    path: "/eighth",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Nineth />
      </Suspense>
    ),
    title: "회원관리",
    path: "/nineth",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Tenth />
      </Suspense>
    ),
    title: "푸쉬 알림 보내기",
    path: "/tenth",
    private: false,
    hidden: false,
  },
];
