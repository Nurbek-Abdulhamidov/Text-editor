import React, { Suspense, lazy } from "react";
import Loading from "../components/Generic/Loading";
import useId from "../hooks/useId";
import Login from "../pages/Login";

const First = lazy(() => import("../pages/First"));
const Second = lazy(() => import("../pages/Second"));
const SecondPage = lazy(() => import("../pages/SecondPage"));
const Third = lazy(() => import("../pages/Third"));
const ThirdPage = lazy(() => import("../pages/ThirdPage"));
const Fourth = lazy(() => import("../pages/Fourth"));
const FourthPage = lazy(() => import("../pages/FourthPage"));
const Fifth = lazy(() => import("../pages/Fifth"));
const FifthPage = lazy(() => import("../pages/FifthPage"));
const Seventh = lazy(() => import("../pages/Seven"));
const SeventhPage = lazy(() => import("../pages/SeventhPage"));
const Eighth = lazy(() => import("../pages/Eighth"));
const EighthPage = lazy(() => import("../pages/EighthPage"));
const Nineth = lazy(() => import("../pages/Nineth"));
const NinethPage = lazy(() => import("../pages/NinethPage"));
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
    path: "/manager-management",
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
    path: "/consultation",
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
    title: "Secondpage ",
    path: "/consultation/:id",
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
    path: "/comprehensive",
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
    path: "/comprehensive:id",
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
    path: "/customized-consultation",
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
    path: "/customized-consultation:id",
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
    path: "/customized-diet&exercise",
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
    path: "/customized-diet&exercise:id",
    private: false,
    hidden: true,
  },
  {
    id: 6,
    text: "플랫폼 관리",
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<Loading />}>
        <Seventh />
      </Suspense>
    ),
    title: "공지사항",
    path: "/notifications",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<Loading />}>
        <SeventhPage />
      </Suspense>
    ),
    title: "Seventhpage",
    path: "/notifications:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<Loading />}>
        <Eighth />
      </Suspense>
    ),
    title: "FAQ",
    path: "/faq",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<Loading />}>
        <EighthPage />
      </Suspense>
    ),
    title: "FAQ",
    path: "/faq:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<Loading />}>
        <Nineth />
      </Suspense>
    ),
    title: "회원관리",
    path: "/member-management",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<Loading />}>
        <NinethPage />
      </Suspense>
    ),
    title: "회원관리",
    path: "/member-management:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <Suspense fallback={<Loading />}>
        <Tenth />
      </Suspense>
    ),
    title: "푸쉬 알림 보내기",
    path: "/send-notification",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Login />,
    path: "/login",
    private: false,
    hide: true,
  },
];
