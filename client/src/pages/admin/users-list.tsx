import { Link } from "wouter";
import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, MoreHorizontal, Mail, Shield } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function UsersList() {
  const users = [
    { id: 1, name: "Ana Silva", email: "ana@exemplo.com", role: "Aluno", status: "Ativo", lastAccess: "Hoje, 14:30" },
    { id: 2, name: "Carlos Mendes", email: "carlos@exemplo.com", role: "Instrutor", status: "Ativo", lastAccess: "Ontem" },
    { id: 3, name: "Roberto Admin", email: "roberto@admin.com", role: "Admin", status: "Ativo", lastAccess: "Hoje, 09:00" },
    { id: 4, name: "Julia Roberts", email: "julia@exemplo.com", role: "Aluno", status: "Inativo", lastAccess: "Há 5 dias" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Gestão de Usuários</h1>
          <Button className="gap-2"><Plus size={18} /> Novo Usuário</Button>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 rounded-lg border shadow-sm">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Buscar por nome ou email..." className="pl-9" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filtrar</Button>
            <Button variant="outline">Exportar</Button>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                        {user.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div>{user.name}</div>
                        <div className="text-xs text-slate-500">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {user.role === 'Admin' ? <Shield size={14} className="text-indigo-600" /> : null}
                      {user.role}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'Ativo' ? 'default' : 'secondary'} className={user.status === 'Ativo' ? 'bg-green-100 text-green-700 hover:bg-green-200' : ''}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-500">{user.lastAccess}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <Link href={`/admin/users/${user.id}`}>
                          <DropdownMenuItem className="cursor-pointer">Ver Detalhes</DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem className="text-red-600">Desativar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
