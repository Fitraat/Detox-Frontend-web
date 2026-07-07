"use client";

import { useCreateSubscribersMutation } from "@/redux/api/subscribeApi";
import { Button, message } from "antd";
import { FormEvent, useState } from "react";

type ProgramComingSoonProps = {
  programName: string;
};

export default function ProgramComingSoon({
  programName,
}: ProgramComingSoonProps) {
  const [email, setEmail] = useState("");
  const [createSubscribers, { isLoading }] = useCreateSubscribersMutation();

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      message.error("Please enter your email address");
      return;
    }

    try {
      const result = await createSubscribers({
        email: trimmedEmail,
      });

      if ("error" in result) {
        message.success("You are already subscribed");
        return;
      }

      setEmail("");
      message.success("Thanks! We will notify you when this program is live.");
    } catch {
      message.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mx-auto mt-12 min-h-[60vh] max-w-2xl px-4">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center shadow-sm sm:p-8">
        <p className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
          Coming Soon
        </p>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {programName} is not ready yet
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-700 sm:text-base">
          We are preparing this system. If you are interested, subscribe now and
          we will email you as soon as it is launched.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mx-auto mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            required
            value={email}
            placeholder="Enter your email address"
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 w-full rounded-md border border-slate-300 px-4 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
          />
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="h-11 px-5"
          >
            Subscribe now
          </Button>
        </form>
      </div>
    </div>
  );
}
