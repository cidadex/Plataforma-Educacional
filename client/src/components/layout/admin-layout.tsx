import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BookOpen, 
  Library, 
  Calendar, 
  MessageSquare, 
  Users, 
  LogOut,
  Menu,
  X,
  Settings,
  BarChart,
  FileText
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function AdminSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/admin/dashboard", icon: LayoutDashboard, label: "Visão Geral" },
    { href: "/admin/users", icon: Users, label: "Usuários" },
    { href: "/admin/modules", icon: BookOpen, label: "Módulos" },
    { href: "/admin/materials", icon: Library, label: "Materiais" },
    { href: "/admin/lives", icon: Calendar, label: "Encontros ao Vivo" },
    { href: "/admin/support", icon: MessageSquare, label: "Atendimentos" },
    { href: "/admin/reports", icon: BarChart, label: "Relatórios" },
    { href: "/admin/settings", icon: Settings, label: "Configurações" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-slate-100 transition-transform duration-300 lg:translate-x-0 border-r border-slate-800 shadow-xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50">
            <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                <Settings size={18} />
              </div>
              <span>Admin Portal</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-auto lg:hidden text-slate-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </Button>
          </div>

          {/* Nav */}
          <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
            <div className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Gestão
            </div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                  location === item.href 
                    ? "bg-indigo-600 text-white shadow-md" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                )}>
                  <item.icon size={18} />
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* User Profile (Bottom) */}
          <div className="p-4 border-t border-slate-800 bg-slate-950/30">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 bg-indigo-900 text-indigo-100 border border-indigo-700">
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Administrador</p>
                <p className="text-xs text-slate-500 truncate">admin@inst.com</p>
              </div>
              <Link href="/login">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-400 hover:bg-red-400/10">
                  <LogOut size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="lg:pl-64 flex flex-col min-h-screen transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </Button>
            <h1 className="text-lg font-semibold text-slate-800">Área Administrativa</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200">
              ADMIN MODE
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden bg-slate-50/50">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
