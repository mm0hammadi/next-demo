import "./globals.css";
import ScrollTop from "../components/ScrollTop";

export const metadata = {
  title: "پنداریار پایدار | مشاوره کسب‌وکار، فروش و منابع انسانی",
  description:
    "شریک راهبردی شما در رشد پایدار کسب‌وکار. مشاوره کسب‌وکار، فروش و بازاریابی و منابع انسانی با راهکارهای اجرایی متناسب با هر سازمان.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir">
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
