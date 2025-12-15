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
import sleepImage from "@assets/stock_images/restful_sleep_peacef_5f3dd78f.jpg";
import heroImage from "@assets/generated_images/diverse_team_in_modern_office_with_sage_green_tones.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

// Student Pages
import ModulesList from "@/pages/student/modules-list";
import ModuleDetail from "@/pages/student/module-detail";
import LessonDetail from "@/pages/student/lesson-detail";
import LibraryPage from "@/pages/student/library";
import CalendarPage from "@/pages/student/calendar";
import SupportPage from "@/pages/student/support";
import ProfilePage from "@/pages/student/profile";
import QuizPage from "@/pages/student/quiz";
import NR1AssessmentPage from "@/pages/student/nr1-assessment";
import NR1ResultsPage from "@/pages/student/nr1-results";
import TestsCenterPage from "@/pages/student/tests/tests-center";
import TestIntroPage from "@/pages/student/tests/test-intro";
import TestQuestionsPage from "@/pages/student/tests/test-questions";
import TestResultPage from "@/pages/student/tests/test-result";

// Admin Pages
import UsersList from "@/pages/admin/users-list";
import UserDetailsPage from "@/pages/admin/user-details";
import ModulesListAdmin from "@/pages/admin/modules-list";
import MaterialsListAdmin from "@/pages/admin/materials-list";
import LivesListAdmin from "@/pages/admin/lives-list";
import SupportListAdmin from "@/pages/admin/support-list";
import ReportsAdmin from "@/pages/admin/reports";
import SettingsAdmin from "@/pages/admin/settings";
import AssessmentsListAdmin from "@/pages/admin/assessments-list";
import AppointmentsAdmin from "@/pages/admin/appointments.tsx";

const Landing = () => (
  <div className="min-h-screen flex flex-col font-sans bg-background">
    {/* Header */}
    <header className="px-6 h-24 flex items-center justify-between border-b border-border/40 bg-background/90 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3 font-heading text-xl font-bold text-foreground">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 fill-primary text-primary" />
        </div>
        Gestão Emocional Brasil
      </div>
      <div className="space-x-4 hidden md:flex">
        <Link href="/login">
          <Button variant="ghost" className="text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50">Login Usuário</Button>
        </Link>
        <Link href="/admin/dashboard">
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 px-6">Login Administrador</Button>
        </Link>
      </div>
      {/* Mobile Menu Button - simplified for prototype */}
      <div className="md:hidden">
         <Link href="/login"><Button size="sm">Entrar</Button></Link>
      </div>
    </header>
    
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-muted/30 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-secondary text-foreground/80 text-sm font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
              <ShieldCheck size={16} className="text-primary" /> Programa Nacional de Bem-Estar
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Gestão emocional aplicada ao trabalho, à saúde mental e ao <span className="text-primary italic font-serif relative whitespace-nowrap">
                desempenho profissional
                <svg className="absolute w-[105%] h-3 -bottom-1 -left-1 text-secondary -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="12" fill="none" opacity="0.6" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-foreground/70 leading-relaxed font-light max-w-lg">
              Programas estruturados para promover equilíbrio emocional, produtividade e ambientes de trabalho mais saudáveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/login">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all gap-3 bg-foreground text-background hover:bg-foreground/90">
                  <Brain size={20} /> Portal do Usuário
                </Button>
              </Link>
              <Link href="/admin/dashboard">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-2 hover:bg-secondary/20">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 hidden lg:block">
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImage} 
                  alt="Bem-estar e Saúde Emocional" 
                  className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                   <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                     <Heart size={24} className="fill-white" />
                   </div>
                   <div>
                     <p className="font-bold text-foreground text-sm">Acolhimento</p>
                     <p className="text-xs text-muted-foreground">Suporte especializado disponível para você.</p>
                   </div>
                </div>
             </div>
             {/* Decorative Elements behind image */}
             <div className="absolute -z-10 top-10 right-10 w-full h-full border-2 border-primary/20 rounded-[2.5rem] translate-x-4 translate-y-4"></div>
          </div>

        </div>
      </section>

      {/* Impact Data Section - Using the Rosy Beige (Secondary) */}
      <section className="py-20 bg-secondary/30 border-y border-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-secondary">
            <div className="space-y-3 px-4">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl rotate-3 flex items-center justify-center text-primary shadow-sm">
                  <Users size={32} />
                </div>
              </div>
              <h3 className="text-5xl font-heading font-bold text-foreground">850+</h3>
              <p className="text-foreground/70 font-medium text-lg uppercase tracking-wide">Usuários Impactados</p>
            </div>
            <div className="space-y-3 px-4 pt-8 md:pt-0">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl -rotate-3 flex items-center justify-center text-primary shadow-sm">
                  <CheckCircle size={32} />
                </div>
              </div>
              <h3 className="text-5xl font-heading font-bold text-foreground">92%</h3>
              <p className="text-foreground/70 font-medium text-lg uppercase tracking-wide">Aprovação do Programa</p>
            </div>
            <div className="space-y-3 px-4 pt-8 md:pt-0">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl rotate-3 flex items-center justify-center text-primary shadow-sm">
                  <Trophy size={32} />
                </div>
              </div>
              <h3 className="text-5xl font-heading font-bold text-foreground">120+</h3>
              <p className="text-foreground/70 font-medium text-lg uppercase tracking-wide">Horas de Conteúdo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <Badge variant="outline" className="mb-3 bg-secondary/50 border-secondary text-foreground px-4 py-1">Conteúdos em Destaque</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">Vídeos Recomendados</h2>
            </div>
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:flex gap-2 text-primary hover:bg-secondary/50">Ver biblioteca completa <ArrowRight size={16} /></Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Gestão emocional no ambiente de trabalho", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" },
              { id: 2, title: "Saúde emocional e desempenho profissional", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
              { id: 3, title: "Como lidar com pressão e conflitos", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80" }
            ].map((video) => (
              <Card key={video.id} className="overflow-hidden border-0 shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-card rounded-2xl">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img 
                    src={video.img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Thumbnail"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-none">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle size={32} className="fill-primary text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Gestão Emocional
                  </div>
                  <h3 className="font-heading font-bold text-xl leading-tight mb-3 text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    Conteúdo estratégico para desenvolvimento profissional e equilíbrio emocional no trabalho.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Preview - Know Yourself */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Jornada Conheça a Si Mesmo</h2>
            <p className="text-xl text-foreground/70 font-light leading-relaxed">
              Uma série de módulos desenhados para promover o autoconhecimento e o desenvolvimento de competências socioemocionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Card 1 - Rosy Beige Theme */}
            <div className="group bg-white rounded-3xl p-10 border border-secondary/40 shadow-sm relative overflow-hidden transition-all hover:shadow-xl hover:border-secondary">
               <div className="relative z-10">
                 <div className="w-14 h-14 bg-secondary/30 rounded-2xl flex items-center justify-center text-primary-foreground mb-8 group-hover:scale-110 transition-transform duration-300">
                   <Brain size={28} className="text-foreground" />
                 </div>
                 <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Inteligência Emocional</h3>
                 <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                   Compreenda suas emoções e aprenda a gerenciá-las de forma assertiva nas relações profissionais e pessoais.
                 </p>
                 <ul className="space-y-4 mb-10">
                   <li className="flex items-center gap-4 text-foreground font-medium">
                     <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-foreground"><CheckCircle size={14} /></div> Autoconsciência
                   </li>
                   <li className="flex items-center gap-4 text-foreground font-medium">
                     <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-foreground"><CheckCircle size={14} /></div> Habilidades sociais
                   </li>
                 </ul>
                 <Link href="/login">
                   <Button className="w-full h-12 rounded-xl bg-foreground text-background hover:bg-primary hover:text-white transition-colors font-medium text-lg">Começar Módulo</Button>
                 </Link>
               </div>
               {/* Decorative Rosy Blob */}
               <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card 2 - Sage/Olive Theme */}
            <div className="group bg-white rounded-3xl p-10 border border-muted/40 shadow-sm relative overflow-hidden transition-all hover:shadow-xl hover:border-muted">
               <div className="relative z-10">
                 <div className="w-14 h-14 bg-muted/50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                   <Heart size={28} className="text-primary" />
                 </div>
                 <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Gestão do Estresse</h3>
                 <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                   Ferramentas práticas para identificar gatilhos de estresse e desenvolver estratégias de enfrentamento.
                 </p>
                 <ul className="space-y-4 mb-10">
                   <li className="flex items-center gap-4 text-foreground font-medium">
                     <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-primary"><CheckCircle size={14} /></div> Sinais de alerta
                   </li>
                   <li className="flex items-center gap-4 text-foreground font-medium">
                     <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-primary"><CheckCircle size={14} /></div> Relaxamento
                   </li>
                 </ul>
                 <Link href="/login">
                   <Button className="w-full h-12 rounded-xl bg-white border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors font-medium text-lg">Saiba Mais</Button>
                 </Link>
               </div>
               {/* Decorative Sage Blob */}
               <div className="absolute top-0 right-0 w-80 h-80 bg-muted/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground relative overflow-hidden isolate">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white leading-tight">Pronto para priorizar sua <br/> <span className="text-secondary">saúde emocional?</span></h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Junte-se a centenas de colegas que já estão transformando sua qualidade de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/login">
              <Button size="lg" className="h-16 px-10 text-lg font-bold shadow-xl bg-primary hover:bg-primary/90 text-white rounded-full">
                Fazer Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
    
    <footer className="py-16 bg-sidebar text-sidebar-foreground text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3 font-heading text-2xl font-bold text-sidebar-foreground">
            <Heart className="w-8 h-8 fill-primary text-primary" />
            Gestão Emocional Brasil
          </div>
          <p className="max-w-sm leading-relaxed opacity-70 text-base">
            Programa nacional focado na promoção de saúde, gestão emocional e desenvolvimento humano.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sidebar-foreground text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-base opacity-80">
            <li><a href="#" className="hover:text-primary transition-colors">Sobre o Programa</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Módulos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Materiais</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Suporte</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sidebar-foreground text-lg mb-6">Contato</h4>
          <ul className="space-y-4 text-base opacity-80">
            <li>suporte@saudeemocional.com.br</li>
            <li>(61) 3333-0000</li>
            <li>Brasília - DF</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sidebar-foreground/10 pt-8 text-center opacity-50">
        <p>© 2025 Consultoria Gestão Emocional Brasil - Kaká Ribeiro. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
);

const Login = () => (
  <AuthLayout>
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-heading font-bold">Portal do Usuário</h1>
        <p className="text-muted-foreground">Acesse com suas credenciais</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="seu.email@empresa.com.br" />
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
          <p className="text-muted-foreground mt-1">Bem-vinda ao programa "Gestão Emocional Brasil".</p>
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
          <div className="font-bold text-lg text-foreground line-clamp-2">Sinais de Burnout</div>
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
                     <h3 className="font-bold text-xl mt-1 group-hover:text-primary transition-colors">Fundamentos da Gestão Emocional Corporativa</h3>
                   </div>
                   <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">Em andamento</span>
                </div>
                <p className="text-muted-foreground mt-2 line-clamp-2">
                  Conceitos gerais e determinantes da saúde emocional, combate ao estigma e desinformação no contexto organizacional.
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

const AdminDashboard = () => {
  // Mock Data for Charts
  const userGrowth = [
    { month: "Jan", users: 120, active: 80 },
    { month: "Fev", users: 250, active: 180 },
    { month: "Mar", users: 380, active: 290 },
    { month: "Abr", users: 520, active: 410 },
    { month: "Mai", users: 700, active: 580 },
    { month: "Jun", users: 850, active: 720 },
  ];

  const riskDistribution = [
    { name: "Baixo Risco (Saudável)", value: 65, color: "#5E6D4E" }, // Olive Green
    { name: "Risco Moderado (Alerta)", value: 25, color: "#E3D5CA" }, // Rosy Beige
    { name: "Alto Risco (Atenção)", value: 10, color: "#ef4444" }, // Red
  ];

  const behaviors = [
    { name: "Sono Irregular", value: 45 },
    { name: "Sedentarismo", value: 60 },
    { name: "Ansiedade", value: 30 },
    { name: "Burnout", value: 15 },
    { name: "Isolamento", value: 20 },
  ];

  const radarData = [
    { subject: 'Bem-estar', A: 120, fullMark: 150 },
    { subject: 'Estresse', A: 98, fullMark: 150 },
    { subject: 'Sono', A: 86, fullMark: 150 },
    { subject: 'Foco', A: 99, fullMark: 150 },
    { subject: 'Social', A: 85, fullMark: 150 },
    { subject: 'Resiliência', A: 65, fullMark: 150 },
  ];

  const appointments = [
    { id: 1, user: "Ana Silva", type: "Psicologia", date: "Hoje, 14:00", status: "Confirmado" },
    { id: 2, user: "Carlos Mendes", type: "Mentoria", date: "Hoje, 15:30", status: "Aguardando" },
    { id: 3, user: "Julia Santos", type: "Psicologia", date: "Amanhã, 09:00", status: "Confirmado" },
    { id: 4, user: "Roberto Lima", type: "Nutrição", date: "Amanhã, 11:00", status: "Confirmado" },
  ];

  return (
  <AdminLayout>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-heading font-bold">Painel de Gestão - TCDF</h1>
      <div className="text-sm text-muted-foreground">
        Última atualização: Hoje, 10:30
      </div>
    </div>

    {/* Summary Cards */}
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Servidores Inscritos</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">850</div>
        <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
          <TrendingUpIcon size={12} /> 92% da meta
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Testes Realizados</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">1,240</div>
        <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
          <TrendingUpIcon size={12} /> +15% este mês
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Avaliação NPS</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">9.2</div>
        <div className="text-xs text-slate-400 mt-1">Excelente</div>
      </div>
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="text-sm text-slate-500 font-medium">Atendimentos</div>
        <div className="text-3xl font-bold text-slate-800 mt-2">342</div>
        <div className="text-xs text-slate-400 mt-1">Individuais</div>
      </div>
    </div>

    {/* Charts Row 1 */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {/* User Growth */}
      <div className="bg-white p-6 rounded-xl border shadow-sm col-span-2">
        <h3 className="font-bold text-lg mb-6">Crescimento de Usuários e Engajamento</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={userGrowth}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5E6D4E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#5E6D4E" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E3D5CA" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#E3D5CA" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Legend verticalAlign="top" height={36}/>
              <Area type="monotone" dataKey="users" name="Total Inscritos" stroke="#5E6D4E" fillOpacity={1} fill="url(#colorUsers)" strokeWidth={3} />
              <Area type="monotone" dataKey="active" name="Usuários Ativos" stroke="#D4C5B9" fillOpacity={1} fill="url(#colorActive)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Risk Distribution */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="font-bold text-lg mb-2">Mapeamento de Risco</h3>
        <p className="text-xs text-muted-foreground mb-4">Baseado nos testes NR-1 e Sinais</p>
        <div className="h-[300px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={riskDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {riskDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center -mt-5">
            <span className="text-3xl font-bold text-foreground">1.2k</span>
            <span className="block text-xs text-muted-foreground">Testes</span>
          </div>
        </div>
      </div>
    </div>

    {/* Charts Row 2 */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">
       {/* Behavioral Indicators */}
       <div className="bg-white p-6 rounded-xl border shadow-sm">
         <h3 className="font-bold text-lg mb-6">Principais Queixas/Comportamentos</h3>
         <div className="h-[250px]">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={behaviors} layout="vertical" margin={{ left: 40 }}>
               <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
               <XAxis type="number" hide />
               <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} axisLine={false} tickLine={false} />
               <Tooltip cursor={{fill: 'transparent'}} />
               <Bar dataKey="value" fill="#5E6D4E" radius={[0, 4, 4, 0]} barSize={20} />
             </BarChart>
           </ResponsiveContainer>
         </div>
       </div>

       {/* Profile Radar */}
       <div className="bg-white p-6 rounded-xl border shadow-sm">
         <h3 className="font-bold text-lg mb-2">Perfil da Instituição</h3>
         <div className="h-[250px]">
           <ResponsiveContainer width="100%" height="100%">
             <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
               <PolarGrid stroke="#e5e5e5" />
               <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
               <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
               <Radar name="Média TCDF" dataKey="A" stroke="#5E6D4E" fill="#5E6D4E" fillOpacity={0.3} />
               <Tooltip />
             </RadarChart>
           </ResponsiveContainer>
         </div>
       </div>

       {/* Appointments List */}
       <div className="bg-white p-6 rounded-xl border shadow-sm">
         <div className="flex justify-between items-center mb-6">
           <h3 className="font-bold text-lg">Atendimentos Individuais</h3>
           <Badge variant="outline" className="cursor-pointer">Ver todos</Badge>
         </div>
         <div className="space-y-4">
           {appointments.map(app => (
             <div key={app.id} className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary border border-secondary/20 font-bold">
                   {app.user.charAt(0)}
                 </div>
                 <div>
                   <p className="font-bold text-sm text-foreground">{app.user}</p>
                   <p className="text-xs text-muted-foreground">{app.type} • {app.date}</p>
                 </div>
               </div>
               <Badge className={app.status === 'Confirmado' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'}>
                 {app.status}
               </Badge>
             </div>
           ))}
         </div>
       </div>
    </div>
  </AdminLayout>
)};

// Helper Icons
const TrendingUpIcon = ({size}: {size: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
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
      <Route path="/student/nr1-assessment" component={NR1AssessmentPage} />
      <Route path="/student/nr1-results" component={NR1ResultsPage} />
      <Route path="/student/tests" component={TestsCenterPage} />
      <Route path="/student/tests/:type/intro" component={TestIntroPage} />
      <Route path="/student/tests/:type/questions" component={TestQuestionsPage} />
      <Route path="/student/tests/:type/result/:id" component={TestResultPage} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/users" component={UsersList} />
      <Route path="/admin/users/:id" component={UserDetailsPage} />
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
