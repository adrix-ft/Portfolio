import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0A0A0A] text-black dark:text-white px-6">
      <h1 className="text-8xl md:text-9xl font-black tracking-tighter opacity-20 select-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight">
        Page Not Found
      </h2>
      <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-md text-center">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="mt-8">
        <Button className="rounded-full px-8 py-5 text-sm font-semibold">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
