import { Inter } from "next/font/google";
import "./globals.scss";
import { ReduxProvider } from "./StoreProvider";

export const metadata = {
  title: "فست فود و کافی شاپ سورن",
  description:
    "بزرگترین فست فود و کافی شاپ ارائه دهنده خدمات برای مجالس و دارای سرویس بیرون بر سرعتی",
  icons: {
    icon: ["/favicon.svg?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
