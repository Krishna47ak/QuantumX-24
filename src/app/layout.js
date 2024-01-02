import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: "QuantumX-24",
    description: "Created by Ananda Krishnan Nair",
    siteName: "QuantumX",
    images: [
      {
        url: "https://www.quantumxfest.com/_next/image?url=%2Flogo.png&w=750&q=75",
        width: 512,
        height: 512,
      },
      {
        url: "https://www.quantumxfest.com/_next/image?url=%2Flogo.png&w=750&q=75",
        width: 1800,
        height: 1600,
        alt: "QX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: ["/favicon.ico?v=1"],
    shortcut: ["/apple-touch-icon.png?v=1"],
    apple: ["/apple-touch-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "QuantumX-24",
  title: "QuantumX-24",
  description:
    "Welcome to the website of QuantumX-24 - the official techno-management fest of New Horizon College of Engineering, Bengaluru. QuantumX-24 is a three-day fest including hackathons, coding challenges, STEM workshops, robo battles, startup pitch sessions, expert talks and many other thrilling events!",
  keywords: [
    "NHCE",
    "New Horizon College of Engineering",
    "QuantumX",
    "QuantumX22",
    "QuantumX24",
    "Quantum X 24",
    "Quantum",
    "Nhce tech fest",
    "Nhce fest",
    "Tech fest",
    "Hackathon"
  ],
  authors: [
    {
      name: "Ananda Krishnan Nair",
      url: "https://www.linkedin.com/in/ananda-krishna-m-644678216",
    },
  ],
  creator: "Ananda Krishnan Nair",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
