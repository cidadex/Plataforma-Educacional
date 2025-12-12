import { Link } from "wouter";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Branding (Desktop) */}
      <div className="relative hidden lg:flex flex-col bg-sidebar text-sidebar-foreground p-10 justify-between overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ 
               backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" 
             }} 
        />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
            <Heart size={24} className="fill-white" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight">Saúde Mental é o que Conta</span>
        </div>

        <div className="relative z-10 max-w-md space-y-6">
          <h2 className="font-heading text-4xl leading-tight">
            Programa de Saúde Mental <br/>
            <span className="text-primary">do TCDF</span>
          </h2>
          <p className="text-lg text-sidebar-foreground/80 leading-relaxed">
            "Ações estruturadas de cuidado e educação em saúde mental são essenciais para a prevenção do adoecimento e fortalecimento do clima organizacional."
          </p>
          <div className="pt-4 flex gap-4 text-sm font-medium opacity-70">
            <span className="flex items-center gap-2">✓ Autocuidado</span>
            <span className="flex items-center gap-2">✓ Resiliência</span>
            <span className="flex items-center gap-2">✓ Bem-estar</span>
          </div>
        </div>

        <div className="relative z-10 text-sm text-sidebar-foreground/50">
          © 2025 Kaká Ribeiro - Consultoria Saúde Mental.
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-10 bg-background relative">
        {/* Mobile Branding & Home Button */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
              <ArrowLeft size={16} /> Voltar para Home
            </Button>
          </Link>
          
          {/* Mobile Logo Only */}
          <div className="lg:hidden w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Heart size={20} className="fill-primary" />
          </div>
        </div>

        <div className="w-full max-w-sm space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 mt-12 lg:mt-0">
          {/* Mobile Heading */}
          <div className="lg:hidden text-center mb-8">
            <h2 className="font-heading font-bold text-xl text-primary mb-2">Saúde Mental é o que Conta</h2>
            <p className="text-sm text-muted-foreground">Programa Institucional TCDF</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
