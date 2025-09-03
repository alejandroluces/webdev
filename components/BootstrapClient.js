"use client";
import { useEffect } from "react";

/**
 * Loads Bootstrap JS (collapse, navbar, etc.) on the client.
 */
export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import to avoid SSR issues
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
