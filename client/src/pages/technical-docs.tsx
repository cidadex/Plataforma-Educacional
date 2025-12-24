import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Download, ShieldCheck, Scale, Award, Heart, CheckCircle, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import memorialPdf from "@assets/Memorial_Descritivo_Completo_Protocolo_WOLLYING_1766571023000.pdf";
import declaracaoPdf from "@assets/Declaracao_WOLLYING_INTEGRA_Kaka_Ribeiro_1766571022965.pdf";
import notaTecnicaPdf from "@assets/Nota_Tecnica_WOLLYING_NR1_1766571023032.pdf";

export default function TechnicalDocs() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      {/* Header */}
      <header className="px-6 h-24 flex items-center justify-between border-b border-border/40 bg-background/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3 font-heading text-xl font-bold text-foreground">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 fill-primary text-primary" />
              </div>
              Gestão Emocional Brasil
            </div>
          </Link>
        </div>
        <div className="space-x-4 hidden md:flex">
            <Link href="/">
              <Button variant="ghost" className="text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50">Início</Button>
            </Link>
            <Link href="/why-hire">
              <Button variant="ghost" className="text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50">Por que Contratar</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50">Login Usuário</Button>
            </Link>
            <Link href="/admin/dashboard">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 px-6">Login Administrador</Button>
            </Link>
        </div>
        <div className="md:hidden flex items-center gap-4">
           <Link href="/login"><Button size="sm">Entrar</Button></Link>
           <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <Link href="/">
                  <DropdownMenuItem className="cursor-pointer">Início</DropdownMenuItem>
                </Link>
                <Link href="/why-hire">
                  <DropdownMenuItem className="cursor-pointer">Por que Contratar</DropdownMenuItem>
                </Link>
                <Link href="/technical-docs">
                  <DropdownMenuItem className="cursor-pointer">Documentos Técnicos</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
           </DropdownMenu>
        </div>
      </header>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 text-secondary-foreground font-bold uppercase tracking-wider text-sm">
              <Scale size={14} /> Fundamentação Legal e Técnica
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Documentos Técnicos e <br/><span className="text-primary">Fundamentação Legal</span>
            </h1>
            <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
              Repositório probatório de documentos que atestam a singularidade, autoria e conformidade do Protocolo WOLLYING com a NR-1.
            </p>
          </div>

          {/* Kaka Ribeiro Authority Section */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-secondary/20 shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-8 items-center">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                   <div className="w-32 h-32 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                      <Award size={48} className="text-primary" />
                   </div>
                </div>
                <div>
                   <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">Pioneirismo e Autoridade Técnica</h2>
                   <p className="text-muted-foreground leading-relaxed mb-4">
                     O conceito <strong>WOLLYING</strong> é consolidado internacionalmente há mais de 20 anos como referência no combate à violência psicológica entre mulheres. No Brasil, essa metodologia foi introduzida de forma pioneira em 2022 por <strong>Kaká Ribeiro</strong>, que adaptou o protocolo às especificidades culturais e jurídicas do nosso país.
                   </p>
                   <p className="text-muted-foreground leading-relaxed">
                     Kaká Ribeiro é a <strong>única especialista no país</strong> detentora do Protocolo Integrado de Aplicação do WOLLYING, validado juridicamente e fundamentado na Lei nº 14.188/2021. Sua aplicação tem transformado ambientes corporativos ao alinhar gestão emocional e conformidade com a NR-1.
                   </p>
                </div>
             </div>
          </section>

          {/* Inexigibility Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center">Inexigibilidade e Singularidade</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
               <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-xl">
                     <ShieldCheck className="text-primary" size={24} /> Singularidade Técnica
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-muted-foreground leading-relaxed">
                     O Protocolo Integrado de Aplicação do WOLLYING possui natureza singular, decorrente de autoria intelectual e metodológica própria. <strong>Não existe método equivalente no país</strong> que integre violência psicológica institucional, gestão emocional, fundamentação jurídica e aplicação compatível com a NR-1.
                   </p>
                 </CardContent>
               </Card>

               <Card className="border-l-4 border-l-secondary shadow-sm hover:shadow-md transition-all">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-xl">
                     <CheckCircle className="text-secondary" size={24} /> Conformidade NR-1 (Ouro)
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-muted-foreground leading-relaxed">
                     O Protocolo atua como instrumento técnico de apoio à gestão de riscos psicossociais, permitindo às instituições cumprir integralmente as exigências da NR-1 quanto à prevenção de fatores que comprometam a saúde mental, segurança emocional e integridade psicossocial.
                   </p>
                 </CardContent>
               </Card>
            </div>
          </section>

          {/* Documents Downloads */}
          <section className="space-y-8">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center">Documentos Disponíveis</h2>
            
            <div className="grid gap-4">
              {/* Document 1 */}
              <div className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-white rounded-xl border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <FileText className="text-red-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">Memorial Descritivo do Protocolo WOLLYING</h3>
                  <p className="text-sm text-muted-foreground">
                    Descrição técnica completa do protocolo, metodologia, fundamentação jurídica e aplicação institucional.
                  </p>
                </div>
                <a href={memorialPdf} download="Memorial_Descritivo_Protocolo_WOLLYING.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 shrink-0 border-primary/20 hover:bg-primary/5 text-primary">
                    <Download size={16} /> Baixar PDF
                  </Button>
                </a>
              </div>

              {/* Document 2 */}
              <div className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-white rounded-xl border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <FileText className="text-red-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">Declaração de Titularidade e Autoria</h3>
                  <p className="text-sm text-muted-foreground">
                    Documento jurídico que comprova a autoria, exclusividade metodológica e propriedade intelectual de Kaká Ribeiro.
                  </p>
                </div>
                <a href={declaracaoPdf} download="Declaracao_Titularidade_Kaka_Ribeiro.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 shrink-0 border-primary/20 hover:bg-primary/5 text-primary">
                    <Download size={16} /> Baixar PDF
                  </Button>
                </a>
              </div>

              {/* Document 3 */}
              <div className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-white rounded-xl border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <FileText className="text-red-500" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">Nota Técnica NR-1 + WOLLYING</h3>
                  <p className="text-sm text-muted-foreground">
                    Análise técnica demonstrando a integração e conformidade do Protocolo Wollying com as diretrizes da NR-1.
                  </p>
                </div>
                <a href={notaTecnicaPdf} download="Nota_Tecnica_NR1_WOLLYING.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 shrink-0 border-primary/20 hover:bg-primary/5 text-primary">
                    <Download size={16} /> Baixar PDF
                  </Button>
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 font-heading text-xl font-bold text-white mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 fill-white text-white" />
              </div>
              Gestão Emocional Brasil
            </div>
            <p className="text-white/60 max-w-sm">
              Plataforma líder em soluções para saúde mental corporativa e conformidade com a NR-1 através do método WOLLYING.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="/"><span className="hover:text-primary cursor-pointer">Início</span></Link></li>
              <li><Link href="/why-hire"><span className="hover:text-primary cursor-pointer">Por que Contratar</span></Link></li>
              <li><Link href="/technical-docs"><span className="hover:text-primary cursor-pointer text-primary">Documentos Técnicos</span></Link></li>
              <li><Link href="/login"><span className="hover:text-primary cursor-pointer">Login</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <p className="text-white/60">contato@gestaoemocional.com.br</p>
            <p className="text-white/60">São Paulo, SP - Brasil</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          © 2024 Gestão Emocional Brasil. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}