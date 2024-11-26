import Footer from "../components/footer";
import "./globals.css";
import Header from "../components/header";


export const metadata = {
  title: "Din Mægler",
  description: "dinmaegleropgave",
};


export default function RootLayout({ children }) {
  return (
    <>
    <html lang="da">
      <body className="min-h-[100vh]">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
    </>
  );
}
