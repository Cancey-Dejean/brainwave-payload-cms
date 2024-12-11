"use client";

import { Button } from "@/components/ui/Button";

export const PreviewMode: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black py-7 text-white">
      <div className="flex items-center justify-between">
        <p className="text-2xl">Preview Mode Enabled:</p>

        <Button as="a" href="/api/exit-preview">
          Exit Preview
        </Button>
      </div>
    </div>
  );
};
