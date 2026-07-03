"use client";

import ProgramSclaton from "@/components/structure/ProgramSclaton";
import { useAppSelector } from "@/redux/hooks";
import React, { lazy, Suspense, useEffect, useState } from "react";

const AuthMyTask = lazy(() => import("@/components/myTasks/AuthMyTask"));

const MyTasks: React.FC = () => {
  const userData = useAppSelector((state) => state.auth.userInfo);
  // Handle SSR hydration phase
  const [mount, setMount] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMount(true);
  }, []);
  if (!mount) return <ProgramSclaton />;

  // Allow guest access. Logged-in users keep their own progress.
  const userId = userData?.id;
  const authDayDataId = userData?.currentDay || 1;
  const startDate = userData?.startDate;
  const today = new Date();
  const start = new Date(startDate || today);
  const daysLeft =
    Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  return (
    <Suspense fallback={<ProgramSclaton />}>
      <AuthMyTask
        authDayDataId={authDayDataId}
        userId={userId}
        daysLeft={daysLeft}
      />
    </Suspense>
  );
};

export default MyTasks;
