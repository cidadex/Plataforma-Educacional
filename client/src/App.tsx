import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import StudentLayout from "@/components/layout/student-layout";
import AdminLayout from "@/components/layout/admin-layout";
import AuthLayout from "@/components/layout/auth-layout";
import { Button } from "@/components/ui/button";
import { Brain, Heart, ShieldCheck, PlayCircle, ArrowRight, CheckCircle, Users, Trophy, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
import AssessmentsListAdmin from "@/pages/admin/assessments-list";
import AppointmentsAdmin from "@/pages/admin/appointments.tsx";

const Landing = () => (
  <div className="min-h-screen flex flex-col font-sans">
    <header className="px-6 h-20 flex items-center justify-between border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2 font-heading text-xl font-bold text-primary">
        <Heart className="w-6 h-6 fill-primary text-primary" />
        Saúde Mental é o que Conta
      </div>
      <div className="space-x-4">
        <Link href="/login"><Button variant="ghost" className="text-base font-medium">Entrar</Button></Link>
        <Link href="/login"><Button className="rounded-full">Inscrever-se</Button></Link>
      </div>
    </header>
    
    <main className="flex-1">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
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
      </section>

      {/* Impact Data Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Users size={24} />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-slate-900">850+</h3>
              <p className="text-slate-600 font-medium">Servidores Impactados</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle size={24} />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-slate-900">92%</h3>
              <p className="text-slate-600 font-medium">Aprovação do Programa</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Trophy size={24} />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-slate-900">120+</h3>
              <p className="text-slate-600 font-medium">Horas de Conteúdo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <Badge variant="outline" className="mb-2 bg-white">Conteúdos em Destaque</Badge>
              <h2 className="text-3xl font-heading font-bold text-slate-900">Vídeos Recomendados</h2>
            </div>
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:flex gap-2">Ver biblioteca completa <ArrowRight size={16} /></Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-md group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video bg-slate-200">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1544367563-12123d8975d9' : i === 2 ? '1571260899304-421218f7dbde' : '1529333166437-7750a6dd5a70'}?w=800&q=80`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Thumbnail"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-lg transform group-hover:scale-110 transition-transform">
                      <PlayCircle size={28} className="fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
                    12:30
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Bem-estar</div>
                  <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                    {i === 1 ? "Técnicas de Respiração para Ansiedade" : i === 2 ? "A Importância do Sono Reparador" : "Mindfulness no Trabalho"}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2">
                    Aprenda práticas simples e eficazes para melhorar sua qualidade de vida e produtividade no dia a dia.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Preview - Know Yourself */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Jornada Conheça a Si Mesmo</h2>
            <p className="text-lg text-slate-600">
              Uma série de módulos desenhados para promover o autoconhecimento e o desenvolvimento de competências socioemocionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/20 rounded-2xl p-8 border border-secondary relative overflow-hidden">
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                   <Brain size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-3">Inteligência Emocional</h3>
                 <p className="text-slate-600 mb-6">
                   Compreenda suas emoções e aprenda a gerenciá-las de forma assertiva nas relações profissionais e pessoais.
                 </p>
                 <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-3 text-slate-700 text-sm">
                     <CheckCircle size={16} className="text-primary" /> Autoconsciência e regulação
                   </li>
                   <li className="flex items-center gap-3 text-slate-700 text-sm">
                     <CheckCircle size={16} className="text-primary" /> Empatia e habilidades sociais
                   </li>
                   <li className="flex items-center gap-3 text-slate-700 text-sm">
                     <CheckCircle size={16} className="text-primary" /> Motivação e resiliência
                   </li>
                 </ul>
                 <Link href="/login">
                   <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">Começar Módulo</Button>
                 </Link>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6">
                   <Heart size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-3">Gestão do Estresse</h3>
                 <p className="text-slate-600 mb-6">
                   Ferramentas práticas para identificar gatilhos de estresse e desenvolver estratégias de enfrentamento saudáveis.
                 </p>
                 <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-3 text-slate-700 text-sm">
                     <CheckCircle size={16} className="text-indigo-600" /> Identificação de sinais de alerta
                   </li>
                   <li className="flex items-center gap-3 text-slate-700 text-sm">
                     <CheckCircle size={16} className="text-indigo-600" /> Técnicas de relaxamento
                   </li>
                   <li className="flex items-center gap-3 text-slate-700 text-sm">
                     <CheckCircle size={16} className="text-indigo-600" /> Equilíbrio vida-trabalho
                   </li>
                 </ul>
                 <Link href="/login">
                   <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">Começar Módulo</Button>
                 </Link>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Pronto para priorizar sua saúde mental?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de colegas servidores que já estão transformando sua qualidade de vida através do programa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold shadow-lg">
                Fazer Login Institucional
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
    
    <footer className="py-12 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 font-heading text-xl font-bold text-white mb-4">
            <Heart className="w-6 h-6 fill-white text-white" />
            Saúde Mental é o que Conta
          </div>
          <p className="max-w-xs leading-relaxed opacity-80">
            Programa institucional do TCDF focado na promoção de saúde, bem-estar e desenvolvimento humano.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Sobre o Programa</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Módulos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Materiais</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Contato</h4>
          <ul className="space-y-2">
            <li>suporte@tcdf.df.gov.br</li>
            <li>(61) 3333-0000</li>
            <li>Brasília - DF</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center">
        <p>© 2025 Consultoria Saúde Mental é o que Conta - Kaká Ribeiro. Todos os direitos reservados.</p>
      </div>
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
      <Route path="/admin/assessments" component={AssessmentsListAdmin} />
      <Route path="/admin/materials" component={MaterialsListAdmin} />
      <Route path="/admin/lives" component={LivesListAdmin} />
      <Route path="/admin/support" component={SupportListAdmin} />
      <Route path="/admin/appointments" component={AppointmentsAdmin} />
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
