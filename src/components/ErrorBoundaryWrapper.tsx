// components/ErrorBoundaryWrapper.tsx
"use client";

import { ErrorBoundary } from "react-error-boundary";
import { ReactNode } from "react";

interface ErrorBoundaryWrapperProps {
  children: ReactNode;
}

function ErrorFallback() {
  return <div>Error loading posts. Please try again later.</div>;
}

export default function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
