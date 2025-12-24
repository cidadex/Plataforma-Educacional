import { useState } from "react";
import StudentLayout from "@/components/layout/student-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Clock, History, AlertCircle, ShieldAlert } from "lucide-react";
import { testsData } from "@/lib/tests-data";

// Add Wollying Test Mock
const wollyingTest = {
  id: "wollying-check",
  title: "Termômetro Wollying",
  description: "Avaliação leve e segura para identificar sinais de violências sutis no ambiente de trabalho.",
  icon: ShieldAlert,
  dimensions: [{id: 'w1', name: 'Ambiente'}, {id: 'w2', name: 'Relações'}, {id: 'w3', name: 'Bem-estar'}],
  color: 'violet'
};

export default function TestsCenterPage() {
  return (
    <StudentLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Centro de Testes</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Avaliações guiadas para identificar seu momento atual e gerar planos de ação personalizados.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-blue-800 text-sm items-start">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <p>
            Estas ferramentas são para autoconhecimento e desenvolvimento. Os resultados são gerados por análise de dados e não substituem diagnóstico médico ou psicológico profissional.
          </p>
        </div>

        {/* Test Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Wollying Special Card */}
          <Card key={wollyingTest.id} className="flex flex-col hover:shadow-lg transition-shadow border-violet-200 overflow-hidden bg-violet-50/30">
            <div className="h-2 w-full bg-violet-500"></div>
            <CardHeader>
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-violet-100 text-violet-600">
                <ShieldAlert size={24} />
              </div>
              <CardTitle className="font-heading text-xl">{wollyingTest.title}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2 text-base">
                {wollyingTest.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock size={16} />
                <span>~3 minutos</span>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase text-muted-foreground tracking-wider">Foco:</p>
                <div className="flex flex-wrap gap-2">
                  {wollyingTest.dimensions.map(d => (
                    <Badge key={d.id} variant="secondary" className="font-normal bg-violet-100 hover:bg-violet-200 text-violet-700">
                      {d.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 mt-auto">
              <Link href={`/student/tests/wollying/intro`}>
                <Button className="w-full group bg-violet-600 hover:bg-violet-700 text-white border-none">
                  Iniciar Avaliação
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {testsData.map((test) => (
            <Card key={test.id} className="flex flex-col hover:shadow-lg transition-shadow border-secondary/20 overflow-hidden">
              <div className={`h-2 w-full ${test.id === 'financial' ? 'bg-emerald-500' : test.id === 'relationship' ? 'bg-rose-500' : 'bg-blue-500'}`}></div>
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${test.id === 'financial' ? 'bg-emerald-100 text-emerald-600' : test.id === 'relationship' ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'}`}>
                  <test.icon size={24} />
                </div>
                <CardTitle className="font-heading text-xl">{test.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2 text-base">
                  {test.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock size={16} />
                  <span>~5 minutos</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase text-muted-foreground tracking-wider">Dimensões avaliadas:</p>
                  <div className="flex flex-wrap gap-2">
                    {test.dimensions.slice(0, 3).map(d => (
                      <Badge key={d.id} variant="secondary" className="font-normal bg-secondary/30 hover:bg-secondary/40">
                        {d.name}
                      </Badge>
                    ))}
                    {test.dimensions.length > 3 && (
                      <Badge variant="secondary" className="font-normal bg-secondary/30">+1</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Link href={`/student/tests/${test.id}/intro`}>
                  <Button className="w-full group">
                    Iniciar Avaliação
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* History Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <History size={24} className="text-primary" /> Histórico Recente
            </h2>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-secondary/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                      SF
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Saúde Financeira</h4>
                      <p className="text-sm text-muted-foreground">Realizado em 10 de Dezembro de 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-right">
                      <span className="block text-xs text-muted-foreground uppercase font-bold">Score Geral</span>
                      <span className="text-xl font-bold text-emerald-600">72/100</span>
                    </div>
                    <Link href="/student/tests/financial/result/1">
                      <Button variant="outline" size="sm">Ver Relatório</Button>
                    </Link>
                  </div>
                </div>
                {/* Empty State placeholder if needed, but showing one entry for prototype */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </StudentLayout>
  );
}
