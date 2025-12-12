import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, MoreHorizontal, FileCheck, CheckCircle, XCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function AssessmentsListAdmin() {
  const assessments = [
    { id: 1, student: "Mariana Souza", test: "Avaliação NR-1", score: 85, status: "Aprovado", date: "Hoje, 14:30" },
    { id: 2, student: "Carlos Mendes", test: "Módulo 2: Sinais de Sofrimento", score: 45, status: "Reprovado", date: "Ontem" },
    { id: 3, student: "João Paulo", test: "Avaliação NR-1", score: 92, status: "Aprovado", date: "10/12/2025" },
    { id: 4, student: "Ana Clara", test: "Avaliação NR-1", score: 70, status: "Aprovado", date: "09/12/2025" },
    { id: 5, student: "Pedro Alves", test: "Módulo 1: Fundamentos", score: 60, status: "Reprovado", date: "08/12/2025" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Avaliações e Testes</h1>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">Exportar Relatório</Button>
            <Button className="gap-2"><Plus size={18} /> Novo Teste</Button>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 rounded-lg border shadow-sm">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Buscar aluno ou teste..." className="pl-9" />
          </div>
          <div className="flex gap-2">
             <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option>Todos os Testes</option>
                <option>NR-1</option>
                <option>Módulos de Saúde Mental</option>
             </select>
             <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option>Status</option>
                <option>Aprovado</option>
                <option>Reprovado</option>
             </select>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Aluno</TableHead>
                <TableHead>Avaliação</TableHead>
                <TableHead>Nota</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assessments.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    {item.student}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileCheck size={16} className="text-slate-400" />
                      {item.test}
                    </div>
                  </TableCell>
                  <TableCell className="font-bold">
                    {item.score}/100
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.status === 'Aprovado' ? 'default' : 'destructive'} className={item.status === 'Aprovado' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-red-100 text-red-700 hover:bg-red-200'}>
                      {item.status === 'Aprovado' ? <CheckCircle size={12} className="mr-1" /> : <XCircle size={12} className="mr-1" />}
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-500">{item.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
