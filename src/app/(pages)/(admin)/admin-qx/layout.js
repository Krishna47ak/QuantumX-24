import ContextProvider from "@/context/ContextWrapper";

export default function RootLayout({ children }) {
    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    )
}