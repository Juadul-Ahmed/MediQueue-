import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});



export const metadata = {
  title: "MediQueue | Find Expert Academic Tutors",
  description: "Browse and book handpicked subject-matter mentors seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefinSans.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <NavBar/>
      {children}
      <Footer/>
      <Toaster/>
      </body>
    </html>
  );
}
