"use client";

import ProgramComingSoon from "@/components/programs/ProgramComingSoon";
import ProgramLoginRequired from "@/components/programs/ProgramLoginRequired";
import { useAppSelector } from "@/redux/hooks";

export default function ChildProtectionPage() {
  const userData = useAppSelector((state) => state.auth.userInfo);

  if (!userData) {
    return <ProgramLoginRequired />;
  }

  return <ProgramComingSoon programName="Child Protection Program" />;
}
