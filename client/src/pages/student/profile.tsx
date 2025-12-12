import StudentLayout from "@/components/layout/student-layout";
import { currentUser } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, BookOpen } from "lucide-react";

export default function ProfilePage() {
  return (
    <StudentLayout>
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-card p-8 rounded-xl border shadow-sm">
          <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
            <AvatarImage src={currentUser.avatar} />
            <AvatarFallback className="text-2xl">AS</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left space-y-2">
            <h1 className="text-3xl font-heading font-bold">{currentUser.name}</h1>
            <p className="text-muted-foreground">{currentUser.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Aluno Registrado</Badge>
              <Badge variant="outline">Turma 2025/1</Badge>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline">Alterar Foto</Button>
            <Button>Editar Perfil</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <BookOpen size={20} />
              </div>
              <div className="text-2xl font-bold">{currentUser.completedModules}</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider mt-1">Módulos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                <Award size={20} />
              </div>
              <div className="text-2xl font-bold">{currentUser.certificates}</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider mt-1">Certificados</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                <Clock size={20} />
              </div>
              <div className="text-2xl font-bold">42h</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider mt-1">Horas Est.</div>
            </CardContent>
          </Card>
        </div>

        {/* Details Tabs */}
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
            <TabsTrigger value="personal" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3">Dados Pessoais</TabsTrigger>
            <TabsTrigger value="security" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3">Segurança</TabsTrigger>
            <TabsTrigger value="certificates" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3">Meus Certificados</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome Completo</label>
                      <Input defaultValue={currentUser.name} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue={currentUser.email} disabled />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefone</label>
                      <Input placeholder="(00) 00000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cargo / Função</label>
                      <Input placeholder="Analista" />
                    </div>
                  </div>
                  <Button className="mt-4">Salvar Alterações</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="certificates">
              <div className="grid md:grid-cols-2 gap-4">
                 {[1, 2].map((i) => (
                   <div key={i} className="flex items-center gap-4 p-4 border rounded-xl bg-card hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
                       <Award size={24} />
                     </div>
                     <div className="flex-1">
                       <h4 className="font-bold">Certificado de Conclusão</h4>
                       <p className="text-sm text-muted-foreground">Onboarding Institucional</p>
                       <p className="text-xs text-muted-foreground mt-1">Emitido em 12/12/2025</p>
                     </div>
                     <Button variant="outline" size="sm">PDF</Button>
                   </div>
                 ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </StudentLayout>
  );
}
