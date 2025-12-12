import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { modules } from "@/lib/mock-data";
import { Plus, MoreHorizontal, FileText, Video } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ModulesListAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Gestão de Módulos</h1>
          <Button className="gap-2"><Plus size={18} /> Novo Módulo</Button>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Aulas</TableHead>
                <TableHead>Duração</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map((module) => (
                <TableRow key={module.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 rounded bg-slate-100 overflow-hidden">
                        <img src={module.thumbnail} className="w-full h-full object-cover" alt="" />
                      </div>
                      {module.title}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{module.category}</Badge>
                  </TableCell>
                  <TableCell>{module.lessonsCount}</TableCell>
                  <TableCell>{module.duration}</TableCell>
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
