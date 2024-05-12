import "./globals.css";
import MainHeader from "@/components/main-header/main-header.js";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

// Root Layout always be render as a wraper of page component, error component, not-found component and others
// and this is a perfect place to render main header component or nav component so it will always render
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
