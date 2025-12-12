import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { lives } from "@/lib/mock-data";
import { Plus, MoreHorizontal, Calendar, Video } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function LivesListAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Encontros ao Vivo</h1>
          <Button className="gap-2"><Plus size={18} /> Agendar Encontro</Button>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Evento</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Instrutor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lives.map((live) => (
                <TableRow key={live.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Video size={16} />
                      </div>
                      {live.title}
                    </div>
                  </TableCell>
                  <TableCell>{live.date} às {live.time}</TableCell>
                  <TableCell>{live.instructor}</TableCell>
                  <TableCell>
                    <Badge variant={live.status === 'upcoming' ? 'default' : 'secondary'}>
                      {live.status === 'upcoming' ? 'Agendado' : 'Realizado'}
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
