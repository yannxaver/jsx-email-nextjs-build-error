"use client";

import { renderEmail } from "@/actions/email";

export function Button({ children }: { children: React.ReactNode }) {
  const handleClick = async () => {
    await renderEmail();
  };

  return <button onClick={handleClick}>{children}</button>;
}
