import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import StudentLayout from "@/components/layout/student-layout";
import AdminLayout from "@/components/layout/admin-layout";
import AuthLayout from "@/components/layout/auth-layout";
import { Button } from "@/components/ui/button";
import { Brain, Heart, ShieldCheck } from "lucide-react";

// Student Pages
import ModulesList from "@/pages/student/modules-list";
import ModuleDetail from "@/pages/student/module-detail";
import LessonDetail from "@/pages/student/lesson-detail";
import LibraryPage from "@/pages/student/library";
import CalendarPage from "@/pages/student/calendar";
import SupportPage from "@/pages/student/support";
import ProfilePage from "@/pages/student/profile";
import QuizPage from "@/pages/student/quiz";

// Admin Pages
import UsersList from "@/pages/admin/users-list";
import ModulesListAdmin from "@/pages/admin/modules-list";
import MaterialsListAdmin from "@/pages/admin/materials-list";
import LivesListAdmin from "@/pages/admin/lives-list";
import SupportListAdmin from "@/pages/admin/support-list";
import ReportsAdmin from "@/pages/admin/reports";
import SettingsAdmin from "@/pages/admin/settings";

const Landing = () => (
  <div className="min-h-screen flex flex-col font-sans">
    <header className="px-6 h-20 flex items-center justify-between border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2 font-heading text-xl font-bold text-primary">
        <Heart className="w-6 h-6 fill-primary text-primary" />
        Saúde Mental é o que Conta
      </div>
      <div className="space-x-4">
        <Link href="/login"><Button variant="ghost" className="text-base font-medium">Entrar</Button></Link>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center text-center p-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wider mb-4 border border-secondary-foreground/10">
          <ShieldCheck size={16} /> Programa Institucional TCDF
        </div>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
          Cuidar de si é <br/>
          <span className="text-primary italic">valorizar o coletivo</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Programa de promoção de saúde mental, bem-estar ocupacional e desenvolvimento humano para servidores do TCDF.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link href="/login">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all gap-2">
              <Brain size={20} /> Acessar Plataforma
            </Button>
          </Link>
        </div>
      </div>
    </main>
    <footer className="py-6 text-center text-sm text-muted-foreground bg-stone-50">
      <p>© 2025 Consultoria Saúde Mental é o que Conta - Kaká Ribeiro. Todos os direitos reservados.</p>
    </footer>
  </div>
);

const Login = () => (
  <AuthLayout>
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-heading font-bold">Portal do Servidor</h1>
        <p className="text-muted-foreground">Acesse com suas credenciais institucionais</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Institucional</label>
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="nome.sobrenome@tcdf.df.gov.br" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
             <label className="text-sm font-medium">Senha</label>
             <a href="#" className="text-xs text-primary hover:underline">Recuperar senha</a>
          </div>
          <input type="password" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
        </div>
        <Link href="/student/dashboard">
          <Button className="w-full h-11 text-base">Entrar</Button>
        </Link>
      </div>
      <div className="text-center text-sm">
        <Link href="/admin/dashboard" className="text-muted-foreground hover:text-primary text-xs">Acesso Administrativo</Link>
      </div>
    </div>
  </AuthLayout>
);

const StudentDashboard = () => (
  <StudentLayout>
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Olá, Mariana</h1>
          <p className="text-muted-foreground mt-1">Bem-vinda ao programa "Saúde Mental é o que Conta".</p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
          <Brain size={18} /> Carga Horária Total: 24h
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Brain size={64} />
          </div>
          <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">Seu Progresso</div>
          <div className="text-4xl font-bold text-primary">15%</div>
          <div className="h-1.5 w-full bg-secondary mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[15%]"></div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">Módulos Concluídos</div>
          <div className="text-4xl font-bold text-primary">0/6</div>
          <p className="text-xs text-muted-foreground mt-2">Complete todos para certificar</p>
        </div>
        <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">Próxima Aula</div>
          <div className="font-bold text-lg text-foreground line-clamp-2">Sinais Precoces de Sofrimento</div>
          <Link href="/student/modules/m2">
            <Button variant="link" className="px-0 h-auto mt-2 text-primary">Continuar →</Button>
          </Link>
        </div>
      </div>

      {/* Module Highlight */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Continuar Aprendendo</h2>
        <Link href="/student/modules/m1">
          <a className="block bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors group">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-32 rounded-lg bg-slate-200 overflow-hidden shrink-0 relative">
                <img src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-lg">
                     <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1"></div>
                   </div>
                </div>
              </div>
              <div className="flex-1 py-1">
                <div className="flex justify-between items-start">
                   <div>
                     <span className="text-xs font-bold text-primary uppercase tracking-wide">Módulo 1</span>
                     <h3 className="font-bold text-xl mt-1 group-hover:text-primary transition-colors">Fundamentos da Saúde Mental</h3>
                   </div>
                   <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">Em andamento</span>
                </div>
                <p className="text-muted-foreground mt-2 line-clamp-2">
                  Conceitos gerais e determinantes da saúde mental, combate ao estigma e desinformação no contexto do serviço público.
                </p>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                   <span>3 aulas</span>
                   <span>•</span>
                   <span>4 horas</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>

      {/* Upcoming Live */}
      <div className="bg-secondary/20 border border-secondary rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
            <CalendarPageIcon />
          </div>
          <div>
            <h3 className="font-bold text-lg">Aula Magna: Abertura do Programa</h3>
            <p className="text-muted-foreground">Com Kaká Ribeiro • 15 Dez às 14:00</p>
          </div>
        </div>
        <Link href="/student/calendar">
          <Button>Ver Detalhes</Button>
        </Link>
      </div>
    </div>
  </StudentLayout>
);

// Helper for icon
const CalendarPageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
)

const AdminDashboard = () => (
  <AdminLayout>
    <h1 className="text-3xl font-heading font-bold mb-6">Painel de Gestão - TCDF</h1>
    <div className="grid md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Servidores Inscritos</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">850</div>
        <div className="text-xs text-green-600 mt-1">92% da meta</div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Conclusão Média</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">45%</div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Avaliação NPS</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">9.2</div>
        <div className="text-xs text-slate-400 mt-1">Excelente</div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Certificados Emitidos</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">120</div>
      </div>
    </div>
  </AdminLayout>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      
      {/* Auth */}
      <Route path="/login" component={Login} />
      
      {/* Student Routes */}
      <Route path="/student/dashboard" component={StudentDashboard} />
      <Route path="/student/modules" component={ModulesList} />
      <Route path="/student/modules/:id" component={ModuleDetail} />
      <Route path="/student/lesson/:id" component={LessonDetail} />
      <Route path="/student/library" component={LibraryPage} />
      <Route path="/student/calendar" component={CalendarPage} />
      <Route path="/student/support" component={SupportPage} />
      <Route path="/student/profile" component={ProfilePage} />
      <Route path="/student/quiz/:id" component={QuizPage} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/users" component={UsersList} />
      <Route path="/admin/modules" component={ModulesListAdmin} />
      <Route path="/admin/materials" component={MaterialsListAdmin} />
      <Route path="/admin/lives" component={LivesListAdmin} />
      <Route path="/admin/support" component={SupportListAdmin} />
      <Route path="/admin/reports" component={ReportsAdmin} />
      <Route path="/admin/settings" component={SettingsAdmin} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
