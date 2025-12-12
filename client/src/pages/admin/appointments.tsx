import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal, Calendar, User, Clock, Video } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppointmentsAdmin() {
  const appointments = [
    { id: 1, student: "Mariana Souza", type: "Acolhimento Psicológico", date: "15/12/2025", time: "14:00", professional: "Dr. Ana Clara", status: "Agendado" },
    { id: 2, student: "Carlos Mendes", type: "Mentoria de Carreira", date: "16/12/2025", time: "10:00", professional: "Kaká Ribeiro", status: "Agendado" },
    { id: 3, student: "João Paulo", type: "Acolhimento Psicológico", date: "14/12/2025", time: "16:00", professional: "Dr. Ana Clara", status: "Realizado" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Atendimentos Individuais</h1>
          <Button className="gap-2"><Plus size={18} /> Novo Agendamento</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           <Card>
             <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-slate-500">Agendados Hoje</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="text-3xl font-bold">4</div>
             </CardContent>
           </Card>
           <Card>
             <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-slate-500">Pendentes de Confirmação</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="text-3xl font-bold text-amber-600">2</div>
             </CardContent>
           </Card>
           <Card>
             <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-slate-500">Realizados (Mês)</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="text-3xl font-bold text-green-600">32</div>
             </CardContent>
           </Card>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <h3 className="font-bold text-lg">Agenda de Atendimentos</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Aluno/Servidor</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data e Hora</TableHead>
                <TableHead>Profissional</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((apt) => (
                <TableRow key={apt.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                        <User size={16} />
                      </div>
                      {apt.student}
                    </div>
                  </TableCell>
                  <TableCell>{apt.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={14} /> {apt.date} 
                      <Clock size={14} className="ml-2" /> {apt.time}
                    </div>
                  </TableCell>
                  <TableCell>{apt.professional}</TableCell>
                  <TableCell>
                    <Badge variant={apt.status === 'Agendado' ? 'default' : 'secondary'} className={apt.status === 'Agendado' ? 'bg-indigo-100 text-indigo-700' : ''}>
                      {apt.status}
                    </Badge>
                  </TableCell>
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
