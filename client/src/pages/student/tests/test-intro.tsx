import { Link, useRoute } from "wouter";
import StudentLayout from "@/components/layout/student-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, Clock, CheckCircle2 } from "lucide-react";
import { testsData } from "@/lib/tests-data";
import NotFound from "@/pages/not-found";

export default function TestIntroPage() {
  const [match, params] = useRoute("/student/tests/:type/intro");
  
  if (!match) return <NotFound />;

  const test = testsData.find(t => t.id === params.type);
  if (!test) return <NotFound />;

  return (
    <StudentLayout>
      <div className="max-w-3xl mx-auto py-8 animate-in zoom-in-95 duration-500">
        <div className="mb-8">
          <Link href="/student/tests">
            <Button variant="ghost" className="pl-0 hover:bg-transparent text-muted-foreground hover:text-foreground">
              ← Voltar para o Centro de Testes
            </Button>
          </Link>
        </div>

        <Card className="border-0 shadow-xl overflow-hidden">
          <div className={`h-3 w-full ${test.id === 'financial' ? 'bg-emerald-500' : test.id === 'relationship' ? 'bg-rose-500' : 'bg-blue-500'}`}></div>
          <CardContent className="p-8 md:p-12 text-center">
            <div className={`w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center ${test.id === 'financial' ? 'bg-emerald-100 text-emerald-600' : test.id === 'relationship' ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'}`}>
              <test.icon size={40} />
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">{test.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              {test.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left bg-secondary/20 p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Tempo Estimado</h4>
                  <p className="text-sm text-muted-foreground">5 a 10 minutos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Confidencialidade</h4>
                  <p className="text-sm text-muted-foreground">Seus dados são privados</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Sem Julgamentos</h4>
                  <p className="text-sm text-muted-foreground">Responda com honestidade</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link href={`/student/tests/${test.id}/questions`}>
                <Button size="lg" className="w-full md:w-auto px-12 h-14 text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  Começar Avaliação agora <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground mt-4">
                Ao continuar, você concorda em responder as questões para fins de autoanálise.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}
