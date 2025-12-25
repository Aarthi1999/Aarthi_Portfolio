"use client";

import { createPortal } from "react-dom";

export default function Portal({ targetId, children }) {
  if (typeof window === "undefined") return null;

  const target = document.getElementById(targetId);
  if (!target) return null;

  return createPortal(children, target);
}
