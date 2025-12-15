import { Link, useRoute } from "wouter";
import StudentLayout from "@/components/layout/student-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testsData, mockTestResults } from "@/lib/tests-data";
import NotFound from "@/pages/not-found";
import { Download, RefreshCw, CheckCircle, Calendar, ArrowRight, Brain, AlertTriangle } from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";

export default function TestResultPage() {
  const [match, params] = useRoute("/student/tests/:type/result/:id");
  
  if (!match) return <NotFound />;

  const test = testsData.find(t => t.id === params.type);
  if (!test) return <NotFound />;

  // Mock data transformation for charts
  const radarData = mockTestResults.dimensions.map(d => ({
    subject: d.name,
    A: d.score,
    fullMark: 100,
  }));

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-amber-600";
    return "text-red-600";
  };
  
  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-emerald-100";
    if (score >= 60) return "bg-blue-100";
    if (score >= 40) return "bg-amber-100";
    return "bg-red-100";
  };

  return (
    <StudentLayout>
      <div className="max-w-5xl mx-auto py-8 animate-in fade-in duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar size={14} />
              <span>Realizado em {mockTestResults.date}</span>
              <span className="mx-2">•</span>
              <span>ID: #{params.id}</span>
            </div>
            <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
              Resultado: {test.title}
            </h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download size={16} /> Baixar PDF
            </Button>
            <Link href={`/student/tests/${test.id}/intro`}>
              <Button className="gap-2">
                <RefreshCw size={16} /> Refazer Teste
              </Button>
            </Link>
          </div>
        </div>

        {/* Score Overview */}
        <div className="grid md:grid-cols-12 gap-6 mb-8">
          {/* Main Score Card */}
          <Card className="md:col-span-4 bg-primary/5 border-primary/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Brain size={120} />
            </div>
            <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center relative z-10">
              <h3 className="text-muted-foreground font-medium uppercase tracking-widest text-sm mb-4">Seu Score Geral</h3>
              <div className="relative mb-4">
                 <div className="text-7xl font-bold text-primary">{mockTestResults.score}</div>
                 <span className="text-sm text-muted-foreground absolute -right-6 top-2">/100</span>
              </div>
              <Badge className={`px-4 py-1 text-base ${getScoreBg(mockTestResults.score)} ${getScoreColor(mockTestResults.score)} border-0`}>
                {mockTestResults.status}
              </Badge>
              <p className="mt-6 text-sm text-muted-foreground">
                Sua pontuação indica um bom nível de equilíbrio, com alguns pontos de atenção que podem ser otimizados.
              </p>
            </CardContent>
          </Card>

          {/* Dimensions Chart */}
          <Card className="md:col-span-8">
            <CardHeader>
              <CardTitle>Análise por Dimensão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={radarData} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="subject" type="category" width={100} tick={{fontSize: 12}} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="A" radius={[0, 4, 4, 0]} barSize={32}>
                      {radarData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.A >= 80 ? '#059669' : entry.A >= 60 ? '#2563eb' : entry.A >= 40 ? '#d97706' : '#dc2626'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Diagnosis */}
        <Card className="mb-8 border-l-4 border-l-primary shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="text-primary" /> Diagnóstico Inteligente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                  <CheckCircle size={16} /> Pontos Fortes
                </h4>
                <p className="text-sm text-emerald-900 leading-relaxed">{mockTestResults.aiDiagnosis.strengths}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <AlertTriangle size={16} /> Pontos de Atenção
                </h4>
                <p className="text-sm text-amber-900 leading-relaxed">{mockTestResults.aiDiagnosis.weaknesses}</p>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-bold text-lg mb-2">Análise Detalhada</h4>
              <p className="text-muted-foreground leading-relaxed">
                {mockTestResults.aiDiagnosis.details}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Plan */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-heading">Seu Plano de Ação - 7 Dias</h2>
          <div className="grid gap-4">
            {mockTestResults.actionPlan.map((item, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors group cursor-pointer">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center font-bold text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    D{item.day}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.action}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-green-600">
                    <CheckCircle size={20} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Support CTA */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Precisa de ajuda especializada?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Seus resultados indicam que você pode se beneficiar de uma conversa com nossos especialistas. O suporte é confidencial e gratuito.
          </p>
          <Link href="/student/support">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
              Agendar Acolhimento
            </Button>
          </Link>
        </div>

      </div>
    </StudentLayout>
  );
}
