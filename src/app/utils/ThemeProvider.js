'use client'
import { ThemeProvider } from "next-themes";

function ThemeProviders({children,...props}){
    return <ThemeProvider {...props}>{children}</ThemeProvider>
}
export default ThemeProviders;