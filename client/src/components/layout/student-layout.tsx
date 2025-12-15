import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  BookHeart,
  Calendar, 
  MessageSquare, 
  User, 
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  Heart,
  ClipboardCheck,
  Brain
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentUser } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/student/dashboard", icon: Heart, label: "Meu Bem-estar" },
    { href: "/student/tests", icon: Brain, label: "Centro de Testes" },
    { href: "/student/modules", icon: BookOpen, label: "Módulos do Programa" },
    { href: "/student/library", icon: BookHeart, label: "Materiais de Apoio" },
    { href: "/student/nr1-results", icon: ClipboardCheck, label: "Avaliação NR-1" },
    { href: "/student/calendar", icon: Calendar, label: "Agenda de Encontros" },
    { href: "/student/support", icon: MessageSquare, label: "Suporte / Acolhimento" },
    { href: "/student/profile", icon: User, label: "Perfil do Servidor" },
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
        "fixed top-0 left-0 z-50 h-screen w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:translate-x-0 border-r border-sidebar-border shadow-xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center px-6 border-b border-sidebar-border bg-sidebar-accent/10">
            <div className="flex items-center gap-3 font-heading font-bold text-lg text-primary-foreground tracking-tight leading-tight">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                <Heart size={20} className="fill-white" />
              </div>
              <span>Saúde Emocional Brasil</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-auto lg:hidden text-sidebar-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </Button>
          </div>

          {/* Nav */}
          <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                  location === item.href 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md" 
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}>
                  <item.icon size={18} />
                  {item.label}
                  {location === item.href && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20" />
                  )}
                </a>
              </Link>
            ))}
          </nav>

          {/* User Profile (Bottom) */}
          <div className="p-4 border-t border-sidebar-border bg-sidebar-accent/5">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={currentUser.avatar} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-sidebar-foreground">{currentUser.name}</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">Usuário</p>
              </div>
              <Link href="/login">
                <Button variant="ghost" size="icon" className="text-sidebar-foreground/70 hover:text-destructive">
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

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="lg:pl-64 flex flex-col min-h-screen transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </Button>
            
            {/* Search */}
            <div className="hidden md:flex items-center relative max-w-md w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Buscar temas..." 
                className="pl-9 bg-secondary/30 border-secondary-foreground/10 focus-visible:ring-primary/20 h-9"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden sm:flex gap-2 pl-2 pr-3 h-9 rounded-full border border-border bg-card hover:bg-accent/50">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={currentUser.avatar} />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Minha Conta</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/student/profile">
                  <DropdownMenuItem>Perfil do Usuário</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link href="/login">
                  <DropdownMenuItem className="text-destructive focus:text-destructive">Sair</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden animate-in fade-in duration-500">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
