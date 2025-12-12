import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import StudentLayout from "@/components/layout/student-layout";
import AdminLayout from "@/components/layout/admin-layout";
import AuthLayout from "@/components/layout/auth-layout";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center gap-2 font-heading text-2xl font-bold text-primary">
        <div className="w-8 h-8 bg-primary rounded-lg"></div>
        Institucional
      </div>
      <div className="space-x-4">
        <Link href="/login"><Button variant="ghost" className="text-base font-medium">Entrar</Button></Link>
        <Link href="/register"><Button className="text-base font-medium px-6">Começar Agora</Button></Link>
      </div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center text-center p-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wider mb-4 border border-secondary-foreground/10">
          Plataforma de Ensino Corporativo
        </div>
        <h1 className="font-heading text-6xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
          Desenvolva seu <br/>
          <span className="text-primary italic">potencial máximo</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Acesse trilhas de aprendizado personalizadas, mentorias ao vivo e uma vasta biblioteca de conteúdos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/student/dashboard"><Button size="lg" className="rounded-full px-8 h-12 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">Acesso do Aluno</Button></Link>
          <Link href="/admin/dashboard"><Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-lg w-full sm:w-auto bg-white/50 backdrop-blur-sm">Acesso Admin</Button></Link>
        </div>
      </div>
    </main>
  </div>
);

const Login = () => (
  <AuthLayout>
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-heading font-bold">Bem-vindo de volta</h1>
        <p className="text-muted-foreground">Entre com suas credenciais para acessar a plataforma</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="seu@email.com" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
             <label className="text-sm font-medium">Senha</label>
             <a href="#" className="text-xs text-primary hover:underline">Esqueceu a senha?</a>
          </div>
          <input type="password" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
        </div>
        <Link href="/student/dashboard">
          <Button className="w-full h-11 text-base">Entrar</Button>
        </Link>
      </div>
      <div className="text-center text-sm">
        Não tem uma conta? <Link href="/register" className="text-primary hover:underline font-semibold">Cadastre-se</Link>
      </div>
    </div>
  </AuthLayout>
);

const Register = () => (
  <AuthLayout>
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-heading font-bold">Criar Conta</h1>
        <p className="text-muted-foreground">Preencha seus dados para começar</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Nome Completo</label>
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Senha</label>
          <input type="password" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
        </div>
        <Link href="/student/dashboard">
          <Button className="w-full h-11 text-base">Cadastrar</Button>
        </Link>
      </div>
      <div className="text-center text-sm">
        Já tem conta? <Link href="/login" className="text-primary hover:underline font-semibold">Entrar</Link>
      </div>
    </div>
  </AuthLayout>
);

const StudentDashboard = () => (
  <StudentLayout>
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Olá, Ana Silva</h1>
        <p className="text-muted-foreground mt-2">Continue de onde você parou.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">Progresso Geral</div>
          <div className="text-4xl font-bold text-primary">65%</div>
          <div className="h-1.5 w-full bg-secondary mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[65%]"></div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">Módulos Concluídos</div>
          <div className="text-4xl font-bold text-primary">3</div>
        </div>
        <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">Certificados</div>
          <div className="text-4xl font-bold text-primary">2</div>
        </div>
      </div>

      {/* Continue Learning */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Continue Estudando</h2>
          <Link href="/student/modules" className="text-primary text-sm hover:underline">Ver todos</Link>
        </div>
        <Link href="/student/modules/m2">
          <a className="block bg-card border rounded-xl p-4 hover:border-primary/50 transition-colors group">
            <div className="flex gap-4">
              <div className="w-32 h-20 rounded-lg bg-slate-200 overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex-1 py-1">
                <div className="flex justify-between items-start">
                   <h3 className="font-bold text-lg group-hover:text-primary transition-colors">NR-1: Disposições Gerais</h3>
                   <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">Em andamento</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Aula 3: Introdução à NR-1</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[45%]"></div>
                  </div>
                  <span className="text-xs font-bold text-primary">45%</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>

       {/* Pending Quizzes */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Avaliações Pendentes</h2>
        <Link href="/student/quiz/q1">
           <a className="flex items-center justify-between bg-red-50 border border-red-100 p-4 rounded-xl hover:bg-red-100 transition-colors">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold">
                 !
               </div>
               <div>
                 <h4 className="font-bold text-red-900">Avaliação Final: NR-1</h4>
                 <p className="text-xs text-red-700">Obrigatório para certificação</p>
               </div>
             </div>
             <Button size="sm" variant="destructive">Iniciar Teste</Button>
           </a>
        </Link>
      </div>
    </div>
  </StudentLayout>
);

const AdminDashboard = () => (
  <AdminLayout>
    <h1 className="text-3xl font-heading font-bold mb-6">Visão Geral</h1>
    <div className="grid md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Usuários Ativos</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">1,234</div>
        <div className="text-xs text-green-600 mt-1 flex items-center">▲ 12% vs mês anterior</div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Módulos Ativos</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">42</div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Tickets Abertos</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">5</div>
        <div className="text-xs text-red-500 mt-1">2 urgentes</div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Taxa de Engajamento</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">78%</div>
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
      <Route path="/register" component={Register} />
      
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
