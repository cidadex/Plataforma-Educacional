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
    title: "Saúde Financeira",
    description: "Avalie sua relação com o dinheiro, controle de gastos e planejamento futuro.",
    icon: Wallet,
    color: "text-emerald-600",
    dimensions: [
      { id: "clarity", name: "Clareza", description: "Visão sobre entradas e saídas" },
      { id: "control", name: "Controle", description: "Hábitos e rotinas financeiras" },
      { id: "reserve", name: "Reserva", description: "Preparo para emergências" },
      { id: "pressure", name: "Impulsos/Pressão", description: "Comportamento emocional" }
    ],
    questions: [
      { id: 1, text: "Você sabe exatamente quanto ganha e quanto gasta por mês?", dimensionId: "clarity" },
      { id: 2, text: "Você consegue pagar todas as suas contas em dia sem entrar no cheque especial?", dimensionId: "control" },
      { id: 3, text: "Você possui uma reserva financeira para emergências (pelo menos 3 meses de despesas)?", dimensionId: "reserve" },
      { id: 4, text: "Você costuma fazer compras por impulso quando está triste ou ansioso?", dimensionId: "pressure" },
      { id: 5, text: "Você tem clareza de para onde está indo o seu dinheiro?", dimensionId: "clarity" },
      { id: 6, text: "Você registra seus gastos regularmente?", dimensionId: "control" },
      { id: 7, text: "Você se sente seguro financeiramente em relação ao futuro?", dimensionId: "reserve" },
      { id: 8, text: "Dívidas tiram o seu sono ou geram ansiedade?", dimensionId: "pressure" },
    ]
  },
  {
    id: "relationship",
    title: "Saúde do Relacionamento",
    description: "Analise a qualidade da comunicação, confiança e conexão em seus relacionamentos.",
    icon: Users,
    color: "text-rose-600",
    dimensions: [
      { id: "communication", name: "Comunicação", description: "Qualidade do diálogo" },
      { id: "trust", name: "Confiança/Segurança", description: "Base do relacionamento" },
      { id: "conflict", name: "Conflito e Reparo", description: "Resolução de problemas" },
      { id: "presence", name: "Presença/Afeto", description: "Tempo de qualidade" }
    ],
    questions: [
      { id: 1, text: "Vocês conseguem conversar sobre problemas sem que vire uma briga?", dimensionId: "communication" },
      { id: 2, text: "Você sente que pode confiar plenamente no seu parceiro(a)?", dimensionId: "trust" },
      { id: 3, text: "Após uma discussão, vocês conseguem se reconciliar e resolver a questão?", dimensionId: "conflict" },
      { id: 4, text: "Vocês dedicam tempo de qualidade um para o outro regularmente?", dimensionId: "presence" },
      { id: 5, text: "Você se sente ouvido(a) quando expressa seus sentimentos?", dimensionId: "communication" },
      { id: 6, text: "Você se sente seguro(a) para ser você mesmo(a) na relação?", dimensionId: "trust" },
      { id: 7, text: "Vocês conseguem chegar a acordos satisfatórios para ambos?", dimensionId: "conflict" },
      { id: 8, text: "Existe demonstração de carinho e afeto no dia a dia?", dimensionId: "presence" },
    ]
  },
  {
    id: "team",
    title: "Trabalho em Equipe",
    description: "Verifique a sinergia, confiança e eficácia do seu time no ambiente de trabalho.",
    icon: Briefcase,
    color: "text-blue-600",
    dimensions: [
      { id: "roles", name: "Clareza de Papéis", description: "Definição de responsabilidades" },
      { id: "psychsafety", name: "Segurança Psicológica", description: "Liberdade para errar e falar" },
      { id: "coordination", name: "Coordenação", description: "Fluxos e rotinas" },
      { id: "feedback", name: "Feedback e Melhoria", description: "Aprendizado contínuo" }
    ],
    questions: [
      { id: 1, text: "Está claro para todos quais são suas responsabilidades no time?", dimensionId: "roles" },
      { id: 2, text: "Você se sente confortável para admitir um erro sem medo de retaliação?", dimensionId: "psychsafety" },
      { id: 3, text: "O time possui rotinas e fluxos de trabalho bem definidos?", dimensionId: "coordination" },
      { id: 4, text: "Existe uma cultura de feedback construtivo entre os membros?", dimensionId: "feedback" },
      { id: 5, text: "Você sabe exatamente o que se espera do seu trabalho?", dimensionId: "roles" },
      { id: 6, text: "As pessoas se sentem seguras para propor novas ideias?", dimensionId: "psychsafety" },
      { id: 7, text: "A comunicação flui bem e todos estão alinhados?", dimensionId: "coordination" },
      { id: 8, text: "O time aprende com os erros e busca melhorar processos?", dimensionId: "feedback" },
    ]
  }
];

export const mockTestResults = {
  date: "15/12/2025",
  score: 72,
  status: "Bom",
  dimensions: [
    { name: "Clareza", score: 85, status: "Ótimo" },
    { name: "Controle", score: 60, status: "Bom" },
    { name: "Reserva", score: 40, status: "Em ajuste" },
    { name: "Impulsos", score: 90, status: "Ótimo" }
  ],
  aiDiagnosis: {
    strengths: "Você possui excelente clareza sobre suas finanças e não age por impulso.",
    weaknesses: "Sua reserva de emergência ainda é um ponto de atenção.",
    summary: "Você tem uma boa base, mas precisa focar na consistência da reserva para ter mais tranquilidade.",
    details: "Percebe-se que você sabe quanto ganha e gasta, o que é fundamental. No entanto, a falta de uma reserva robusta pode gerar insegurança em momentos imprevistos. O controle diário está bom, mas pode melhorar.",
  },
  actionPlan: [
    { day: 1, action: "Listar todas as despesas fixas do mês." },
    { day: 1, action: "Definir um valor fixo para poupar assim que receber." },
    { day: 2, action: "Revisar assinaturas e cancelar o que não usa." },
    { day: 3, action: "Estabelecer um teto de gastos para lazer." },
    { day: 4, action: "Pesquisar investimentos de liquidez diária para a reserva." },
    { day: 5, action: "Criar uma meta visual de quanto quer juntar em 6 meses." },
    { day: 6, action: "Ler um artigo sobre educação financeira básica." },
    { day: 7, action: "Fazer um balanço da semana e ajustar o orçamento." }
  ]
};
