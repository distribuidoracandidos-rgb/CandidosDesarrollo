import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Sin esto, al navegar a una página nueva el scroll queda donde estaba
// en la página anterior, lo cual se siente "lento" o roto.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
