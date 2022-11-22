import React, { Suspense, lazy } from "react";
import Loading from "../components/Generic/Loading";
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
        <FifthPage />
      </Suspense>
    ),
    title: "맞춤형 식이&운동 ",
    path: "/fifth:id",
    private: false,
    hidden: true,
  },
  { id: useId, text: "hye", isAct: true, hidden: false },
  {
    id: useId,
    element: (
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
        <Tenth />
      </Suspense>
    ),
    title: "푸쉬 알림 보내기",
    path: "/tenth",
    private: false,
    hidden: false,
  },
];
