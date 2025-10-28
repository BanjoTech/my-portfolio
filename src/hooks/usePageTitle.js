import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    // Cleanup: restore previous title when component unmounts
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
