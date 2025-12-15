import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Heart, 
  Brain, 
  CheckCircle, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  FileText,
  Building
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import heroImage from "@assets/attached_assets/Eu_quero_uma_imagem_de_reuniao_corporativa_com_diversidade_use_1765810336269.jpg";

const WhyHire = () => {
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
          <Link href="/login">
            <Button variant="ghost" className="text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50">Login Usuário</Button>
          </Link>
          <Link href="/admin/dashboard">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 px-6">Login Administrador</Button>
          </Link>
        </div>
        <div className="md:hidden">
           <Link href="/login"><Button size="sm">Entrar</Button></Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-white/80 border-secondary text-primary px-4 py-1 text-sm font-bold uppercase tracking-wider shadow-sm">
                Atualização NR-1
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Sua empresa está preparada para a <span className="text-primary italic font-serif">gestão de riscos psicossociais?</span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed font-light">
                A nova NR-1 obriga empresas a gerenciarem a saúde mental dos colaboradores. Transforme essa obrigação em um diferencial competitivo de produtividade e bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/login">
                  <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-xl bg-primary text-white hover:bg-primary/90">
                    Solicitar Proposta
                  </Button>
                </Link>
                <Link href="#nr1-details">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-2">
                    Entenda a Norma
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl opacity-60"></div>
              <img 
                src={heroImage} 
                alt="Equipe corporativa saudável" 
                className="relative rounded-3xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-500 z-10"
              />
            </div>
          </div>
        </section>

        {/* NR-1 Explanation Section */}
        <section id="nr1-details" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">O que muda com a nova NR-1?</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              A Norma Regulamentadora nº 1 foi atualizada para incluir explicitamente os <strong>riscos psicossociais</strong> no Programa de Gerenciamento de Riscos (PGR). Isso significa que a saúde mental agora é um requisito legal de segurança do trabalho.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <Card className="border-secondary/30 shadow-md bg-secondary/10">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-4">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Obrigação Legal</h3>
                <p className="text-foreground/70">
                  As empresas devem identificar, avaliar e controlar fatores como estresse, assédio, sobrecarga e violência no trabalho.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/30 shadow-md bg-secondary/10">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Documentação (PGR)</h3>
                <p className="text-foreground/70">
                  Os riscos psicossociais devem constar no Inventário de Riscos e no Plano de Ação do PGR da organização.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/30 shadow-md bg-secondary/10">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Prevenção</h3>
                <p className="text-foreground/70">
                  Não basta remediar; é preciso agir preventivamente para evitar o adoecimento mental dos colaboradores.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Hire Us Section */}
        <section className="py-24 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Por que contratar a Gestão Emocional Brasil?</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Oferecemos a solução completa para adequação à NR-1 e transformação da cultura organizacional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  title: "Adequação à NR-1",
                  desc: "Conteúdos e trilhas desenhados para atender aos requisitos de prevenção e conscientização."
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-white" />,
                  title: "Redução de Custos",
                  desc: "Diminua o absenteísmo, o turnover e os custos com afastamentos por saúde mental."
                },
                {
                  icon: <Brain className="w-6 h-6 text-white" />,
                  title: "Metodologia Prática",
                  desc: "Foco em ferramentas aplicáveis no dia a dia, não apenas teoria abstrata."
                },
                {
                  icon: <Building className="w-6 h-6 text-white" />,
                  title: "Employer Branding",
                  desc: "Fortaleça sua marca empregadora sendo reconhecida como uma empresa que cuida."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI / Impact Section */}
        <section className="py-24 bg-foreground text-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                Investir em saúde mental traz retorno real
              </h2>
              <div className="space-y-6 text-lg text-white/80 font-light">
                <p>
                  Segundo a OMS, para cada <strong>US$ 1 investido</strong> em tratamento e prevenção de transtornos mentais, há um retorno de <strong>US$ 4</strong> em melhoria da saúde e produtividade.
                </p>
                <p>
                  Empresas com programas de bem-estar estruturados apresentam:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-secondary shrink-0" /> <span>Maior engajamento das equipes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-secondary shrink-0" /> <span>Melhor clima organizacional</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-secondary shrink-0" /> <span>Redução de falhas e acidentes</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2">4x</div>
                  <div className="text-sm opacity-70">Retorno sobre Investimento (ROI)</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2">-30%</div>
                  <div className="text-sm opacity-70">Redução em custos médicos</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2">+40%</div>
                  <div className="text-sm opacity-70">Aumento na retenção de talentos</div>
                </div>
                <div className="p-4">
                  <div className="text-4xl font-bold text-secondary mb-2">NR-1</div>
                  <div className="text-sm opacity-70">Conformidade Legal Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white text-center">
           <div className="max-w-3xl mx-auto px-6">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
               Não espere a fiscalização ou o adoecimento
             </h2>
             <p className="text-xl text-foreground/70 mb-10 font-light">
               Agende uma demonstração e veja como nossa plataforma pode apoiar sua empresa na adequação à NR-1 e na valorização da vida.
             </p>
             <Link href="/login">
               <Button size="lg" className="rounded-full px-10 h-16 text-xl shadow-xl hover:shadow-2xl bg-primary text-white hover:bg-primary/90">
                 Falar com um Consultor
               </Button>
             </Link>
           </div>
        </section>
      </main>

      {/* Footer - Same as Landing */}
      <footer className="py-16 bg-sidebar text-sidebar-foreground text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 font-heading text-2xl font-bold text-sidebar-foreground">
              <Heart className="w-8 h-8 fill-primary text-primary" />
              Gestão Emocional Brasil
            </div>
            <p className="max-w-sm leading-relaxed opacity-70 text-base">
              Programa nacional focado na promoção de saúde, gestão emocional e desenvolvimento humano.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sidebar-foreground text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-base opacity-80">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/why-hire" className="hover:text-primary transition-colors text-primary font-bold">Por que Contratar</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Módulos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Suporte</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sidebar-foreground text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-base opacity-80">
              <li>suporte@saudeemocional.com.br</li>
              <li>(61) 3333-0000</li>
              <li>Brasília - DF</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sidebar-foreground/10 pt-8 text-center opacity-50">
          <p>© 2025 Consultoria Gestão Emocional Brasil - Kaká Ribeiro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default WhyHire;
