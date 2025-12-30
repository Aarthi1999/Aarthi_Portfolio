"use client";

export default function OverlayLoader({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Loader */}
      <div className=" z-10 flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
        <p className="text-white text-sm">Sending...</p>
      </div>
    </div>
  );
}
