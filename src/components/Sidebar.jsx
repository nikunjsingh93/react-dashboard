import { useState, useEffect } from "react";
import { MessageSquareText, Trash, PanelsTopLeft } from "lucide-react";

function Sidebar() {
  // Function to determine if the window width is at least the 'md' breakpoint (768px)
  const isMediumScreen = () => window.innerWidth >= 768;

  // Initialize 'open' state based on the current window width
  const [open, setOpen] = useState(isMediumScreen());

  // Effect to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      if (!isMediumScreen()) {
        setOpen(false); // Close the drawer on small screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        className={`absolute z-50 cursor-pointer m-5
           ${!open}`}
        onClick={() => setOpen(!open)}
      >
        <PanelsTopLeft size={25} color="#ffffff" />
      </button>

      <div className="relative">
        <div
          style={{ backgroundColor: "#171710" }}
          className={` ${
            open ? "w-72 p-5" : "translate-x-0 w-0 p-0"
          } h-full pt-8 duration-300 absolute md:relative z-40`}
        ></div>
      </div>
    </>
  );
}

export default Sidebar;
