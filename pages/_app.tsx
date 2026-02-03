import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Roboto } from "next/font/google";

const lato = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ✅ Tawk.to chat Script */}
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
s1.src='https://embed.tawk.to/69820c292807131c367659b5/1jghvv16n';
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `,
        }}
      />

      {/* App Wrapper */}
      <div className={`${lato.className} ${lato.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
