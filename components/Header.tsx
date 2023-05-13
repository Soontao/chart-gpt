import { useTheme } from "next-themes";
import Link from "next/link";

export const Header = () => {
  const { resolvedTheme } = useTheme();
  const svgFillColor = resolvedTheme === "dark" ? "#D8D8D8" : "black";
  const btnBgColor =
    resolvedTheme === "dark"
      ? "dark-button-w-gradient-border"
      : "light-button-w-gradient-border";

  return (
    <header className="flex flex-col sm:flex-row sm:justify-betweenw-full max-w-5xl mb-6 gap-6 pt-4 pb-8 px-2 mt-3 border-b pb-7 sm:px-4 px-2 border-gray-200 gap-2">
      <Link href="/" className="flex flex-col">
        <h1 className="font-inter font-bold sm:text-xl flex items-center bg-gradient-to-r from-sky-400 via-violet-600 to-rose-500 bg-clip-text bg-gradient-to-r from-sky-400 via-violet-600 to-rose-500 bg-clip-text text-transparent">
          <img
            src="https://www.svgrepo.com/show/572/lasso.svg"
            width="24"
            height="24"
            className="mr-2 filter brightness-0"
          />
          ChartGPT
        </h1>
        <p className="font-inter font-bold text-gray-700">
          A tool that converts text into beautiful charts
        </p>
      </Link>
    </header>
  );
};
