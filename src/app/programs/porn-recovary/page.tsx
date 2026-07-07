"use client";

import ProgramComingSoon from "@/components/programs/ProgramComingSoon";
import ProgramLoginRequired from "@/components/programs/ProgramLoginRequired";
import { useAppSelector } from "@/redux/hooks";

export default function PornRecoveryPage() {
  const userData = useAppSelector((state) => state.auth.userInfo);

  if (!userData) {
    return <ProgramLoginRequired />;
  }

  return <ProgramComingSoon programName="Porn Recovery Program" />;
}
