import StudentLayout from "@/components/layout/student-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, TrendingUp, Calendar, ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const data = [
  { month: "Jan", score: 85 },
  { month: "Fev", score: 82 },
  { month: "Mar", score: 88 },
  { month: "Abr", score: 75 },
  { month: "Mai", score: 90 },
  { month: "Jun", score: 92 },
];

export default function NR1ResultsPage() {
  const currentScore = data[data.length - 1].score;
  
  let statusColor = "text-green-600";
  let statusBg = "bg-green-100";
  let statusText = "Saudável";
  
  if (currentScore < 60) {
    statusColor = "text-red-600";
    statusBg = "bg-red-100";
    statusText = "Atenção Necessária";
  } else if (currentScore < 80) {
    statusColor = "text-yellow-600";
    statusBg = "bg-yellow-100";
    statusText = "Alerta";
  }

  return (
    <StudentLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Resultados NR-1</h1>
            <p className="text-muted-foreground mt-2">
              Acompanhamento histórico do seu bem-estar psicossocial.
            </p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="gap-2">
               <Download size={16} /> Baixar Relatório
             </Button>
             <Link href="/student/nr1-assessment">
               <Button className="gap-2 bg-primary hover:bg-primary/90 text-white">
                 <TrendingUp size={16} /> Nova Avaliação
               </Button>
             </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Current Score Card */}
          <Card className="md:col-span-1 border-secondary/20 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Pontuação Atual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-6xl font-bold text-foreground">{currentScore}</span>
                <span className="text-xl text-muted-foreground mb-1.5">/100</span>
              </div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${statusBg} ${statusColor}`}>
                <CheckCircle2 size={16} /> {statusText}
              </div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Sua pontuação indica um bom nível de adaptação e bem-estar no ambiente de trabalho. Continue praticando o autocuidado.
              </p>
            </CardContent>
          </Card>

          {/* Chart Card */}
          <Card className="md:col-span-2 border-secondary/20 shadow-md">
             <CardHeader>
               <CardTitle>Histórico de Evolução</CardTitle>
               <CardDescription>Acompanhe sua variação de bem-estar nos últimos 6 meses</CardDescription>
             </CardHeader>
             <CardContent>
               <div className="h-[250px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                     <defs>
                       <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#5E6D4E" stopOpacity={0.3}/>
                         <stop offset="95%" stopColor="#5E6D4E" stopOpacity={0}/>
                       </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                     <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#64748b', fontSize: 12 }} 
                        dy={10}
                     />
                     <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#64748b', fontSize: 12 }} 
                        domain={[0, 100]}
                     />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#252C24', fontWeight: 'bold' }}
                     />
                     <Area 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#5E6D4E" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorScore)" 
                     />
                   </AreaChart>
                 </ResponsiveContainer>
               </div>
             </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-heading text-foreground">Recomendações Personalizadas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/student/modules/m2">
              <a className="group block bg-white border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wide mb-1 block">Módulo Recomendado</span>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Gerenciamento de Estresse</h3>
                    <p className="text-muted-foreground text-sm mt-2">Técnicas práticas para lidar com a pressão diária.</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </a>
            </Link>
            
            <Link href="/student/library">
              <a className="group block bg-white border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wide mb-1 block">Leitura Sugerida</span>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Guia de Ergonomia Cognitiva</h3>
                    <p className="text-muted-foreground text-sm mt-2">Como adaptar seu ambiente para melhor foco.</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>

        {/* History Table */}
        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle>Histórico de Avaliações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {[
                { date: "12 Jun 2025", score: 92, status: "Saudável" },
                { date: "15 Mai 2025", score: 90, status: "Saudável" },
                { date: "10 Abr 2025", score: 75, status: "Alerta" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-secondary/10 rounded-lg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Avaliação NR-1</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-bold text-foreground">{item.score}</p>
                      <p className="text-xs text-muted-foreground">Pontos</p>
                    </div>
                    <Badge variant={item.score >= 80 ? "default" : "secondary"} className={item.score >= 80 ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"}>
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}
