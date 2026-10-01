"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
const getMounted = () => true;
const getNotMounted = () => false;

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(emptySubscribe, getMounted, getNotMounted);

    if (!mounted) {
        return <span className="inline-block w-9 h-9" aria-hidden="true"></span>;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center text-muted hover:text-accent transition-colors duration-200"
        >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
    );
};

export default ThemeToggle;
