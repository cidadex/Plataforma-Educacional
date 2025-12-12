import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-3xl font-heading font-bold">Configurações da Plataforma</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Institucionais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome da Instituição</label>
                <Input defaultValue="Plataforma Institucional" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Descrição (SEO)</label>
                <Textarea defaultValue="Ambiente de aprendizado e gestão do conhecimento." />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personalização</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cor Primária</label>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded bg-[hsl(90,30%,45%)] border"></div>
                    <Input defaultValue="#5e8538" className="font-mono" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Logo URL</label>
                  <Input placeholder="https://..." />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancelar</Button>
            <Button>Salvar Configurações</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
