import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
title: "My Drink Family",
description: "The Original Mimosa in a Can.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
