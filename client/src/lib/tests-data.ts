import { Wallet, Users, Briefcase } from "lucide-react";

export interface TestDimension {
  id: string;
  name: string;
  description: string;
}

export interface TestType {
  id: "financial" | "relationship" | "team";
  title: string;
  description: string;
  icon: any;
  color: string;
  dimensions: TestDimension[];
  questions: {
    id: number;
    text: string;
    dimensionId: string;
  }[];
}

export const testsData: TestType[] = [
  {
    id: "financial",
    title: "Estresse Financeiro e Produtividade",
    description: "Avalie como questões financeiras podem estar impactando seu foco e desempenho no trabalho.",
    icon: Wallet,
    color: "text-emerald-600",
    dimensions: [
      { id: "clarity", name: "Clareza", description: "Visão sobre entradas e saídas" },
      { id: "control", name: "Controle", description: "Hábitos e rotinas financeiras" },
      { id: "reserve", name: "Reserva", description: "Preparo para emergências" },
      { id: "focus", name: "Impacto no Foco", description: "Interferência no trabalho" }
    ],
    questions: [
      { id: 1, text: "Você se pega pensando em contas a pagar durante o horário de trabalho?", dimensionId: "focus" },
      { id: 2, text: "Você consegue pagar todas as suas contas em dia sem entrar no cheque especial?", dimensionId: "control" },
      { id: 3, text: "A falta de reserva financeira gera ansiedade que atrapalha sua concentração?", dimensionId: "reserve" },
      { id: 4, text: "Você sente que precisa trabalhar mais apenas para pagar dívidas?", dimensionId: "focus" },
      { id: 5, text: "Você tem clareza de para onde está indo o seu dinheiro?", dimensionId: "clarity" },
      { id: 6, text: "Você registra seus gastos regularmente?", dimensionId: "control" },
      { id: 7, text: "Você se sente seguro financeiramente em relação ao futuro?", dimensionId: "reserve" },
      { id: 8, text: "Dívidas tiram o seu sono ou geram ansiedade?", dimensionId: "focus" },
    ]
  },
  {
    id: "relationship",
    title: "Relacionamentos Interpessoais no Trabalho",
    description: "Analise a qualidade da sua comunicação e convivência com colegas e liderança.",
    icon: Users,
    color: "text-rose-600",
    dimensions: [
      { id: "communication", name: "Comunicação", description: "Clareza e assertividade" },
      { id: "trust", name: "Confiança", description: "Segurança nas relações" },
      { id: "conflict", name: "Gestão de Conflitos", description: "Resolução de problemas" },
      { id: "collaboration", name: "Colaboração", description: "Trabalho conjunto" }
    ],
    questions: [
      { id: 1, text: "Você consegue expressar suas opiniões em reuniões sem receio?", dimensionId: "communication" },
      { id: 2, text: "Você sente que pode confiar nos seus colegas de equipe?", dimensionId: "trust" },
      { id: 3, text: "Quando surge um conflito, você busca resolver diretamente com a pessoa?", dimensionId: "conflict" },
      { id: 4, text: "Você se sente confortável para pedir ajuda quando está sobrecarregado?", dimensionId: "collaboration" },
      { id: 5, text: "Você sente que sua comunicação é bem compreendida pelos outros?", dimensionId: "communication" },
      { id: 6, text: "Você se sente respeitado(a) pelos seus pares e líderes?", dimensionId: "trust" },
      { id: 7, text: "Você consegue dar e receber feedbacks de forma construtiva?", dimensionId: "conflict" },
      { id: 8, text: "Existe um espírito de cooperação na sua equipe?", dimensionId: "collaboration" },
    ]
  },
  {
    id: "team",
    title: "Clima e Segurança Psicológica",
    description: "Verifique o nível de segurança para arriscar, aprender e contribuir no seu time.",
    icon: Briefcase,
    color: "text-blue-600",
    dimensions: [
      { id: "roles", name: "Clareza de Papéis", description: "Definição de responsabilidades" },
      { id: "psychsafety", name: "Segurança Psicológica", description: "Liberdade para errar e falar" },
      { id: "coordination", name: "Coordenação", description: "Fluxos e rotinas" },
      { id: "feedback", name: "Cultura de Erro", description: "Aprendizado vs Punição" }
    ],
    questions: [
      { id: 1, text: "Está claro para todos quais são suas responsabilidades no time?", dimensionId: "roles" },
      { id: 2, text: "No seu time, é seguro assumir um risco e errar?", dimensionId: "psychsafety" },
      { id: 3, text: "O time possui rotinas e fluxos de trabalho que evitam retrabalho?", dimensionId: "coordination" },
      { id: 4, text: "Erros são vistos como oportunidades de aprendizado e não apenas punidos?", dimensionId: "feedback" },
      { id: 5, text: "Você sabe exatamente o que se espera do seu trabalho?", dimensionId: "roles" },
      { id: 6, text: "Ninguém no time agiria de forma a desmerecer seus esforços?", dimensionId: "psychsafety" },
      { id: 7, text: "A comunicação flui bem e todos estão alinhados?", dimensionId: "coordination" },
      { id: 8, text: "Você se sente valorizado pelas suas contribuições?", dimensionId: "feedback" },
    ]
  }
];

export const mockTestResults = {
  date: "15/12/2025",
  score: 78,
  status: "Bom",
  dimensions: [
    { name: "Clareza", score: 85, status: "Ótimo" },
    { name: "Controle", score: 70, status: "Bom" },
    { name: "Reserva", score: 50, status: "Em ajuste" },
    { name: "Foco no Trabalho", score: 90, status: "Ótimo" }
  ],
  aiDiagnosis: {
    strengths: "Você consegue manter o foco no trabalho apesar dos desafios financeiros.",
    weaknesses: "Sua reserva de emergência ainda é um ponto de atenção.",
    summary: "Você tem uma boa separação entre vida financeira e profissional, mas precisa fortalecer sua segurança financeira.",
    details: "Percebe-se que você não deixa que preocupações financeiras afetem gravemente sua produtividade. No entanto, construir uma reserva maior trará mais tranquilidade e liberdade para tomar decisões de carreira.",
  },
  actionPlan: [
    { day: 1, action: "Listar despesas que podem ser reduzidas para aumentar o aporte mensal." },
    { day: 1, action: "Definir meta de poupança automática no dia do pagamento." },
    { day: 2, action: "Avaliar se há benefícios corporativos (previdência, etc) não utilizados." },
    { day: 3, action: "Planejar gastos anuais (IPTU, IPVA) para não ser pego de surpresa." },
    { day: 4, action: "Revisar objetivos de carreira de curto e médio prazo." },
    { day: 5, action: "Investigar opções de renda extra ou desenvolvimento profissional." },
    { day: 6, action: "Ler sobre planejamento financeiro para profissionais." },
    { day: 7, action: "Fazer um check-in de sentimentos sobre finanças e trabalho." }
  ]
};
