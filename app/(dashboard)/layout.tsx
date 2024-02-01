import { Navbar } from "./_components/navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ 
    children
 }: DashboardLayoutProps) {
  return (
    <main className="h-full">
        <Navbar/>
        <div className="pl-[60px] h-full">
            {children}
        </div>
    </main>
);
}