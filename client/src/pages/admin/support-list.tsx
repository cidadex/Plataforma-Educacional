import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MessageSquare, CheckCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function SupportListAdmin() {
  const tickets = [
    { id: 1, subject: "Dúvida Módulo 1", user: "Ana Silva", status: "Aberto", date: "Hoje" },
    { id: 2, subject: "Erro no vídeo", user: "Carlos Mendes", status: "Em Análise", date: "Ontem" },
    { id: 3, subject: "Certificado não gerado", user: "João Paulo", status: "Fechado", date: "10/12/2025" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-heading font-bold">Atendimentos</h1>

        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assunto</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <MessageSquare size={16} className="text-slate-400" />
                      {ticket.subject}
                    </div>
                  </TableCell>
                  <TableCell>{ticket.user}</TableCell>
                  <TableCell>{ticket.date}</TableCell>
                  <TableCell>
                    <Badge variant={ticket.status === 'Aberto' ? 'destructive' : ticket.status === 'Fechado' ? 'secondary' : 'default'}>
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Responder</Button>
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
