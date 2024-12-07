"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const PreviewMode: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#000] py-7 text-[#fff]">
      <div className="flex items-center justify-between">
        <p className="text-2xl">Preview Mode Enabled:</p>
        <Button asChild variant="secondary">
          <Link href="/api/exit-preview">Exit Preview</Link>
        </Button>
      </div>
    </div>
  );
};
