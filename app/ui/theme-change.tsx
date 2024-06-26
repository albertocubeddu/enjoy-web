"use client";

import { useContext } from "react";
import { AuthContext } from "@/store/auth-context";

//For Dark Mode

import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { Monomaniac_One } from "next/font/google";

const DarkMode = () => {
  const themeCtx = useContext(AuthContext);
  return (
    <div>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" className="hidden" />
          <div
            onClick={themeCtx.changeThemeHandler}
            className="block w-[100px] h-8 border-[1px] dark:bg-on-medium bg-surface-primary-dark dark:border dark:border-1 dark:border-on-medium rounded-full"
          ></div>
          <div
            onClick={themeCtx.changeThemeHandler}
            className="flex justify-center items-center absolute top-1 left-[5px] dark:left-[55px] w-[40px] h-6 text-white rounded-full transition-all duration-300 ease-in-out"
          >
            {!themeCtx.darkMode ? (
              <MoonIcon className="w-6  " />
            ) : (
              <SunIcon className="w-6" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;

// import { useContext } from "react";
// import { AuthContext } from "@/store/auth-context";

// //For Dark Mode

// import { SunIcon } from "@heroicons/react/24/outline";
// import { MoonIcon } from "@heroicons/react/24/outline";

// const ThemeChange = () => {
//   const themeCtx = useContext(AuthContext);

//   return (
//     <div>
//       {!themeCtx.darkMode ? (
//         <SunIcon className="w-6" />
//       ) : (
//         <MoonIcon className="w-6" />
//       )}
//     </div>
//   );
// };

// export default ThemeChange;
