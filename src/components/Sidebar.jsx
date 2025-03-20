import { useState, useEffect } from "react";
import { PanelsTopLeft } from "lucide-react";

function Sidebar() {
  // State to manage sidebar visibility
  const [open, setOpen] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e) => setOpen(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="absolute z-50 cursor-pointer m-5"
        onClick={() => setOpen((prev) => !prev)}
      >
        <PanelsTopLeft size={25} color="#ffffff" />
      </button>

      {/* Sidebar */}
      <div className="relative">
        <div
          className={`h-full duration-300 absolute md:relative z-40 overflow-hidden ${
            open ? "w-72 p-5" : "w-0 p-0"
          }`}
          style={{ backgroundColor: "#171710" }}
        >
          <div className="pt-10 flex gap-x-4 items-center">
            <div
              className={`flex text-white origin-left font-small text-lg duration-200 cursor-pointer pt-5 ${
                !open && "scale-0"
              }`}
            >
              Home
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
