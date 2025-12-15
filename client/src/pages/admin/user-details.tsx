import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  BookOpen, 
  Video, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  Brain,
  MessageSquare,
  ArrowLeft,
  Download,
  Plus
} from "lucide-react";
import React from "react";
import { Link, useRoute } from "wouter";
import NotFound from "@/pages/not-found";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Mock Data for User Details
const mockUserData = {
  1: {
    id: 1,
    name: "Ana Silva",
    email: "ana@exemplo.com",
    role: "Aluno",
    status: "Ativo",
    phone: "(61) 99999-8888",
    department: "Recursos Humanos",
    joinDate: "15/01/2025",
    lastAccess: "Hoje, 14:30",
    avatar: "AS",
    progress: {
      modulesCompleted: 2,
      totalModules: 6,
      lessonsWatched: 8,
      totalLessons: 24,
      totalHours: 12,
      completedHours: 4.5
    },
    modules: [
      { id: 1, title: "Fundamentos da Saúde Emocional", status: "Concluído", score: 100, lastAccess: "10/02/2025" },
      { id: 2, title: "Gestão do Estresse", status: "Concluído", score: 95, lastAccess: "25/02/2025" },
      { id: 3, title: "Comunicação Não-Violenta", status: "Em andamento", progress: 45, lastAccess: "Hoje" },
      { id: 4, title: "Liderança Empática", status: "Não iniciado", progress: 0, lastAccess: "-" },
    ],
    tests: [
      { id: 101, title: "Saúde Financeira", date: "10/12/2025", score: 72, status: "Bom", type: "Centro de Testes" },
      { id: 102, title: "Avaliação NR-1", date: "15/01/2025", score: 85, status: "Aprovado", type: "Obrigatório" },
      { id: 103, title: "Saúde do Relacionamento", date: "05/03/2025", score: 60, status: "Atenção", type: "Centro de Testes" }
    ],
    appointments: [
      { id: 201, type: "Acolhimento Individual", date: "20/02/2025", professional: "Dra. Juliana", status: "Realizado", notes: "Usuária relatou melhora significativa na ansiedade." },
      { id: 202, type: "Orientação Financeira", date: "15/03/2025", professional: "Consultor Marcos", status: "Agendado", notes: "-" }
    ]
  },
  2: {
    id: 2,
    name: "Carlos Mendes",
    email: "carlos@exemplo.com",
    role: "Instrutor",
    status: "Ativo",
    phone: "(61) 98888-7777",
    department: "T.I.",
    joinDate: "10/01/2025",
    lastAccess: "Ontem",
    avatar: "CM",
    progress: { modulesCompleted: 6, totalModules: 6, lessonsWatched: 24, totalLessons: 24, totalHours: 12, completedHours: 12 },
    modules: [], tests: [], appointments: []
  },
  3: { id: 3, name: "Roberto Admin", email: "roberto@admin.com", role: "Admin", status: "Ativo", phone: "-", department: "Diretoria", joinDate: "01/01/2025", lastAccess: "Hoje, 09:00", avatar: "RA", progress: { modulesCompleted: 0, totalModules: 0, lessonsWatched: 0, totalLessons: 0, totalHours: 0, completedHours: 0 }, modules: [], tests: [], appointments: [] },
  4: { id: 4, name: "Julia Roberts", email: "julia@exemplo.com", role: "Aluno", status: "Inativo", phone: "(11) 97777-6666", department: "Vendas", joinDate: "20/01/2025", lastAccess: "Há 5 dias", avatar: "JR", progress: { modulesCompleted: 0, totalModules: 6, lessonsWatched: 1, totalLessons: 24, totalHours: 12, completedHours: 0.5 }, modules: [], tests: [], appointments: [] }
};

const COLORS = ['#5E6D4E', '#E3D5CA', '#D6E0CF', '#6E624C'];

export default function UserDetailsPage() {
  const [match, params] = useRoute("/admin/users/:id");
  
  if (!match) return <NotFound />;
  
  const userId = parseInt(params.id);
  const user = mockUserData[userId as keyof typeof mockUserData];

  if (!user) return <NotFound />;

  // Update page title
  React.useEffect(() => {
    document.title = `${user.name} - Detalhes do Usuário`;
  }, [user.name]);

  const attendanceData = [
    { name: 'Concluído', value: user.progress.modulesCompleted },
    { name: 'Restante', value: user.progress.totalModules - user.progress.modulesCompleted },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/users">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl border-2 border-primary/20">
                {user.avatar}
              </div>
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground flex items-center gap-3">
                  {user.name}
                  <Badge variant={user.status === 'Ativo' ? 'default' : 'secondary'} className={user.status === 'Ativo' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''}>
                    {user.status}
                  </Badge>
                </h1>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Mail size={14} /> {user.email} • <User size={14} /> {user.role}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="gap-2">
               <MessageSquare size={16} /> Enviar Mensagem
             </Button>
             <Button variant="outline" className="gap-2">
               <Download size={16} /> Exportar Relatório
             </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
               <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                 <BookOpen size={24} />
               </div>
               <div>
                 <p className="text-sm text-muted-foreground font-medium">Módulos</p>
                 <p className="text-2xl font-bold">{user.progress.modulesCompleted}/{user.progress.totalModules}</p>
               </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
               <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                 <Video size={24} />
               </div>
               <div>
                 <p className="text-sm text-muted-foreground font-medium">Aulas Assistidas</p>
                 <p className="text-2xl font-bold">{user.progress.lessonsWatched}/{user.progress.totalLessons}</p>
               </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
               <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                 <Clock size={24} />
               </div>
               <div>
                 <p className="text-sm text-muted-foreground font-medium">Horas Totais</p>
                 <p className="text-2xl font-bold">{user.progress.completedHours}h</p>
               </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
               <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                 <Calendar size={24} />
               </div>
               <div>
                 <p className="text-sm text-muted-foreground font-medium">Último Acesso</p>
                 <p className="text-xl font-bold">{user.lastAccess}</p>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
            <TabsTrigger value="education" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-1 font-medium">
              Educação e Aulas
            </TabsTrigger>
            <TabsTrigger value="tests" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-1 font-medium">
              Testes e Avaliações
            </TabsTrigger>
            <TabsTrigger value="care" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-1 font-medium">
              Acolhimento e Orientações
            </TabsTrigger>
            <TabsTrigger value="profile" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-1 font-medium">
              Dados Cadastrais
            </TabsTrigger>
          </TabsList>

          {/* Education Tab */}
          <TabsContent value="education" className="mt-6 space-y-6">
             <div className="grid md:grid-cols-3 gap-6">
               <Card className="md:col-span-2">
                 <CardHeader>
                   <CardTitle>Progresso nos Módulos</CardTitle>
                   <CardDescription>Detalhamento do avanço na trilha de conhecimento</CardDescription>
                 </CardHeader>
                 <CardContent>
                   <div className="space-y-6">
                     {user.modules.length > 0 ? (
                       user.modules.map(module => (
                         <div key={module.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                           <div className="space-y-1">
                             <p className="font-medium text-foreground">{module.title}</p>
                             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                               <Badge variant="outline" className={
                                 module.status === 'Concluído' ? 'bg-green-50 text-green-700 border-green-200' :
                                 module.status === 'Em andamento' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-slate-50'
                               }>{module.status}</Badge>
                               <span>Último acesso: {module.lastAccess}</span>
                             </div>
                           </div>
                           <div className="text-right">
                             {module.status === 'Concluído' ? (
                               <div className="flex flex-col items-end">
                                 <span className="text-emerald-600 font-bold text-lg">{module.score}%</span>
                                 <span className="text-xs text-muted-foreground">Nota</span>
                               </div>
                             ) : (
                               <div className="flex flex-col items-end">
                                 <span className="text-primary font-bold text-lg">{module.progress}%</span>
                                 <span className="text-xs text-muted-foreground">Progresso</span>
                               </div>
                             )}
                           </div>
                         </div>
                       ))
                     ) : (
                       <div className="text-center py-8 text-muted-foreground">Nenhum módulo iniciado.</div>
                     )}
                   </div>
                 </CardContent>
               </Card>

               <Card>
                 <CardHeader>
                   <CardTitle>Engajamento</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <div className="h-[200px] w-full flex justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={attendanceData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {attendanceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                   </div>
                   <div className="text-center mt-4">
                     <p className="text-sm text-muted-foreground">Taxa de Conclusão Global</p>
                     <p className="text-3xl font-bold text-primary">{Math.round((user.progress.modulesCompleted / user.progress.totalModules) * 100)}%</p>
                   </div>
                 </CardContent>
               </Card>
             </div>
          </TabsContent>

          {/* Tests Tab */}
          <TabsContent value="tests" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Avaliações</CardTitle>
                <CardDescription>Resultados de testes psicológicos, NR-1 e avaliações de clima.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user.tests.length > 0 ? (
                    user.tests.map(test => (
                      <div key={test.id} className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg border">
                         <div className="flex items-center gap-4">
                           <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                             <Brain size={20} />
                           </div>
                           <div>
                             <h4 className="font-bold text-foreground">{test.title}</h4>
                             <p className="text-sm text-muted-foreground">{test.type} • Realizado em {test.date}</p>
                           </div>
                         </div>
                         <div className="flex items-center gap-6">
                           <div className="text-right">
                             <span className="block text-xs text-muted-foreground font-bold uppercase">Resultado</span>
                             <span className={`font-bold ${
                               test.score >= 80 ? 'text-emerald-600' : 
                               test.score >= 60 ? 'text-blue-600' : 'text-amber-600'
                             }`}>{test.score}/100</span>
                           </div>
                           <Badge variant="outline" className={
                             test.status === 'Bom' || test.status === 'Aprovado' || test.status === 'Ótimo' ? 'bg-green-50 text-green-700 border-green-200' : 
                             test.status === 'Atenção' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''
                           }>{test.status}</Badge>
                           <Button variant="ghost" size="sm">Ver Detalhes</Button>
                         </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Brain size={48} className="mx-auto mb-4 opacity-20" />
                      <p>Nenhuma avaliação realizada até o momento.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Care/Support Tab */}
          <TabsContent value="care" className="mt-6">
             <div className="grid md:grid-cols-3 gap-6">
               <Card className="md:col-span-2">
                 <CardHeader>
                   <div className="flex justify-between items-center">
                     <div>
                       <CardTitle>Histórico de Atendimentos</CardTitle>
                       <CardDescription>Registros de acolhimento e orientações individuais</CardDescription>
                     </div>
                     <Button size="sm" className="gap-2">
                       <Plus size={16} /> Novo Registro
                     </Button>
                   </div>
                 </CardHeader>
                 <CardContent>
                   <div className="space-y-6">
                     {user.appointments.length > 0 ? (
                       user.appointments.map(app => (
                         <div key={app.id} className="flex flex-col gap-2 p-4 bg-white border rounded-lg shadow-sm">
                           <div className="flex justify-between items-start">
                             <div className="flex items-center gap-2">
                               <Badge variant="secondary">{app.type}</Badge>
                               <span className="text-sm text-muted-foreground">{app.date}</span>
                             </div>
                             <Badge className={app.status === 'Realizado' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}>
                               {app.status}
                             </Badge>
                           </div>
                           <p className="font-medium mt-1">Profissional: {app.professional}</p>
                           {app.notes !== '-' && (
                             <div className="mt-2 text-sm bg-secondary/10 p-3 rounded text-muted-foreground">
                               <span className="font-bold text-xs uppercase block mb-1">Observações:</span>
                               {app.notes}
                             </div>
                           )}
                         </div>
                       ))
                     ) : (
                       <div className="text-center py-12 text-muted-foreground">
                         <MessageSquare size={48} className="mx-auto mb-4 opacity-20" />
                         <p>Nenhum atendimento registrado.</p>
                       </div>
                     )}
                   </div>
                 </CardContent>
               </Card>
               
               <Card>
                 <CardHeader>
                   <CardTitle>Resumo do Cuidado</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg">
                     <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
                       <AlertCircle size={16} /> Pontos de Atenção
                     </h4>
                     <p className="text-sm text-amber-900">
                       Usuário apresentou sinais de ansiedade no teste de saúde emocional. Recomendado acompanhamento mensal.
                     </p>
                   </div>
                   
                   <div className="space-y-2">
                     <p className="text-sm font-medium">Próximas Ações Sugeridas:</p>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                       <CheckCircle size={14} className="text-primary" /> Agendar retorno em 30 dias
                     </div>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                       <CheckCircle size={14} className="text-primary" /> Enviar material sobre mindfulness
                     </div>
                   </div>
                 </CardContent>
               </Card>
             </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Dados Cadastrais</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Nome Completo</dt>
                    <dd className="text-base font-medium mt-1">{user.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Email Corporativo</dt>
                    <dd className="text-base font-medium mt-1">{user.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Telefone</dt>
                    <dd className="text-base font-medium mt-1">{user.phone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Departamento/Setor</dt>
                    <dd className="text-base font-medium mt-1">{user.department}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Data de Cadastro</dt>
                    <dd className="text-base font-medium mt-1">{user.joinDate}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Status da Conta</dt>
                    <dd className="text-base font-medium mt-1">{user.status}</dd>
                  </div>
                </dl>
                
                <div className="mt-8 pt-6 border-t flex gap-4">
                  <Button variant="outline">Redefinir Senha</Button>
                  <Button variant="destructive">Desativar Conta</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
