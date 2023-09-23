"use client";

/**
 * @see https://github.com/pacocoursey/next-themes/issues/152
 * @see https://michaelangelo.io/blog/darkmode-rsc
 */

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	if (!mounted) {
		return children;
	}

	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
