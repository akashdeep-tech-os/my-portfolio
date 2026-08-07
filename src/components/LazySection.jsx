import { useState, useRef, useEffect } from "react";

const LazySection = ({ children, rootMargin = "600px 0px" }) => {
  const [visible, setVisible] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window)
  );
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ contentVisibility: "auto" }}>
      {visible ? children : null}
    </div>
  );
};

export default LazySection;
