import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { recentMaterials } from "@/lib/mock-data";
import { Plus, MoreHorizontal, FileText, Upload } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MaterialsListAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Biblioteca de Materiais</h1>
          <Button className="gap-2"><Upload size={18} /> Upload Material</Button>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome do Arquivo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Tamanho</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentMaterials.map((mat, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-slate-400" />
                      {mat.title}
                    </div>
                  </TableCell>
                  <TableCell>{mat.type}</TableCell>
                  <TableCell>{mat.size}</TableCell>
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
