"use client";

import Link from "next/link";

type ProgramLoginRequiredProps = {
  title?: string;
  description?: string;
};

export default function ProgramLoginRequired({
  title = "Login Required",
  description = "Please login first to view and access programs.",
}: ProgramLoginRequiredProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full rounded-xl border bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          href="/login"
          className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
