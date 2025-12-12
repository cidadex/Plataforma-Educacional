import { Link } from "wouter";
import { BookOpen } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Branding */}
      <div className="relative hidden lg:flex flex-col bg-sidebar text-sidebar-foreground p-10 justify-between overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ 
               backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" 
             }} 
        />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
            <BookOpen size={24} />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight">Institucional</span>
        </div>

        <div className="relative z-10 max-w-md space-y-4">
          <h2 className="font-heading text-4xl leading-tight">
            Excelência no Ensino e <br/>
            <span className="text-primary">Gestão do Conhecimento</span>
          </h2>
          <p className="text-lg text-sidebar-foreground/80">
            Acesse nossa plataforma para desenvolver suas habilidades e acompanhar seu progresso profissional.
          </p>
        </div>

        <div className="relative z-10 text-sm text-sidebar-foreground/50">
          © 2025 Plataforma Institucional. Todos os direitos reservados.
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-10 bg-background">
        <div className="w-full max-w-sm space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </div>
    </div>
  );
}
