import Link from "next/link";
import Button from "./button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const darkThemeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="w-8 h-8"
    >
      <g clipPath="url(#clip0_429_11017)">
        <path
          d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z"
          fill="hsla(var(--foreground))"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11017">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const lightThemeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="hsla(--var(background))"
      className="w-8 h-8"
    >
      <g id="Environment / Sun">
        <path
          id="Vector"
          d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="sticky top-0 flex items-center justify-between w-full h-16 px-8 bg-opacity-50 lg:px-32 backdrop-blur-lg z-[30]">
      <Link href={"/"}>
        <div className="flex items-center gap-6">
          <svg
            fill="hsl(var(--foreground))"
            width="30px"
            height="30px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>alt-square-pencil</title>
            <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h14.688l-4.032 4h-10.656q-0.832 0-1.44 0.608t-0.576 1.408v20q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-10.688l4-4v14.688q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM6.016 26.016l2.112-7.84 12.256-12.192 5.728 5.568-12.32 12.288zM22.112 4.256l3.072-3.072q1.152-1.184 2.816-1.184t2.816 1.184 1.184 2.816-1.184 2.848l-2.976 2.976z"></path>
          </svg>
          <h1 className="text-xl font-extrabold tracking-tight">
            dashboard
          </h1>
        </div>
      </Link>

      <div className="items-center hidden gap-8 sm:flex">
        <a 
          href="https://github.com/split-sec/next-dashboard.git"
          target="blank"
        >
          <svg
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            className="w-7 h-7"
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
            ></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="hsl(var(--foreground))"
                >
                  {" "}
                  <g
                    id="icons"
                    transform="translate(56.000000, 160.000000)"
                  >
                    {" "}
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#ffffff]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </a>
        <div
          onClick={() => setTheme(
            theme === "dark" ? "light" : "dark"
          )}
          className="cursor-pointer"
        >
          {theme === "light" ? darkThemeIcon : lightThemeIcon}
        </div>
        <Button
          variant="filled"
          color={
            !theme
              ? "dark"
              : theme === "dark"
              ? "light"
              : "dark"
          }
          content="Login"
          isHoverable={true}
        />
      </div>
    </div>
  );
}
