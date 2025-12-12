import AdminLayout from "@/components/layout/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, BookOpen } from "lucide-react";

export default function ReportsAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-heading font-bold">Relatórios e Métricas</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Taxa de Conclusão
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">+2.5% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Novos Alunos
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+120</div>
              <p className="text-xs text-muted-foreground">Turma Dezembro/2025</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Módulos Mais Acessados
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">NR-1</div>
              <p className="text-xs text-muted-foreground">Seguido por: Onboarding</p>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder for Chart */}
        <div className="bg-white p-6 rounded-xl border shadow-sm h-96 flex items-center justify-center text-slate-400">
          Gráfico de Engajamento Semanal (Mock)
        </div>
      </div>
    </AdminLayout>
  );
}
