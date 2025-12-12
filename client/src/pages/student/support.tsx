import StudentLayout from "@/components/layout/student-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function SupportPage() {
  return (
    <StudentLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-heading font-bold text-foreground">Como podemos ajudar?</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa equipe pedagógica e técnica está pronta para tirar suas dúvidas e auxiliar em sua jornada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle>Abrir Chamado</CardTitle>
              <CardDescription>Preencha o formulário abaixo para solicitar atendimento.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Assunto</label>
                <Input placeholder="Ex: Dúvida sobre o Módulo 2" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Categoria</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option>Dúvida Pedagógica</option>
                  <option>Problema Técnico</option>
                  <option>Financeiro</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea placeholder="Descreva sua solicitação com detalhes..." className="min-h-[120px]" />
              </div>

              <Button className="w-full gap-2">
                <MessageSquare size={18} /> Enviar Solicitação
              </Button>
            </CardContent>
          </Card>

          {/* Info / FAQ */}
          <div className="space-y-6">
             <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
               <h3 className="font-bold text-lg mb-4 text-primary">Horário de Atendimento</h3>
               <div className="space-y-3 text-sm text-muted-foreground">
                 <div className="flex items-center gap-3">
                   <Clock className="text-primary" size={20} />
                   <span>Segunda a Sexta: 08h às 18h</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <CheckCircle className="text-primary" size={20} />
                   <span>Prazo de resposta: até 24 horas úteis</span>
                 </div>
               </div>
             </div>

             <div className="space-y-4">
               <h3 className="font-bold text-lg">Dúvidas Frequentes</h3>
               
               <div className="space-y-2">
                 {[
                   "Como emitir meu certificado?",
                   "Não consigo acessar uma aula",
                   "Como agendar mentoria individual?",
                   "Onde encontro o material complementar?"
                 ].map((faq, i) => (
                   <div key={i} className="p-3 bg-card border rounded-lg text-sm hover:border-primary/50 cursor-pointer transition-colors flex justify-between items-center group">
                     {faq}
                     <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
