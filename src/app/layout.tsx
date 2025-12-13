// src/app/layout.tsx
import './globals.css';
import { ReduxProvider } from './redux/providers';
import NavBar from './components/nav/Nav';
import Footer from './components/footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ReduxProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
