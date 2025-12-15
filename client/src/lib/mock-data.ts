import { 
  BookOpen, 
  Video, 
  FileText, 
  Calendar, 
  MessageSquare, 
  User, 
  BarChart, 
  Settings,
  Users,
  LayoutDashboard,
  LogOut,
  Bell,
  CheckCircle,
  Clock,
  PlayCircle,
  Download,
  Search,
  Menu,
  X,
  ChevronRight,
  Star,
  Award,
  Heart,
  Brain,
  Smile
} from "lucide-react";

// Types
export interface Module {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  progress: number;
  lessonsCount: number;
  duration: string;
  category: "Módulo" | "Workshop";
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  videoUrl: string; // Mock URL
  duration: string;
  completed: boolean;
  attachments: Material[];
}

export interface Material {
  id: string;
  title: string;
  type: "PDF" | "Guia" | "Cartilha" | "Manual" | "E-book" | "Livro" | "Norma";
  url: string;
  size: string;
}

export interface LiveEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  instructor: string;
  description: string;
  status: "upcoming" | "live" | "past";
  joinUrl: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "student" | "admin";
  avatar: string;
  progress: number;
  completedModules: number;
  certificates: number;
  department: string;
}

// Mock Data - Based on "Saúde Emocional Brasil" Proposal
export const currentUser: UserProfile = {
  id: "u1",
  name: "Mariana Souza",
  email: "mariana.souza@empresa.com.br",
  role: "student",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
  progress: 15,
  completedModules: 0,
  certificates: 0,
  department: "Auditoria Interna"
};

export const modules: Module[] = [
  {
    id: "m1",
    title: "Módulo 1: Fundamentos da Saúde Emocional",
    description: "Conceitos gerais, determinantes da saúde emocional e combate ao estigma.",
    thumbnail: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80",
    progress: 80,
    lessonsCount: 3,
    duration: "4h",
    category: "Módulo"
  },
  {
    id: "m2",
    title: "Módulo 2: Identificação de Sinais de Sofrimento",
    description: "Reconhecimento de sinais precoces, postura ética e fatores de risco e proteção.",
    thumbnail: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80",
    progress: 10,
    lessonsCount: 3,
    duration: "4h",
    category: "Módulo"
  },
  {
    id: "m3",
    title: "Módulo 3: Estratégias de Autocuidado e Gestão do Estresse",
    description: "Sono, alimentação, atenção plena e organização emocional para pausas produtivas.",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    progress: 0,
    lessonsCount: 4,
    duration: "6h",
    category: "Módulo"
  },
  {
    id: "m4",
    title: "Módulo 4: Resiliência e Habilidades de Enfrentamento",
    description: "Desenvolvimento de resiliência, manejo de conflitos e postura frente a adversidades.",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    progress: 0,
    lessonsCount: 3,
    duration: "4h",
    category: "Módulo"
  },
  {
    id: "m5",
    title: "Módulo 5: Comunicação Acolhedora",
    description: "Comunicação Não Violenta (CNV), escuta ativa e promoção de vínculos saudáveis.",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    progress: 0,
    lessonsCount: 3,
    duration: "4h",
    category: "Módulo"
  },
  {
    id: "m6",
    title: "Módulo 6: Protocolos e Encaminhamentos",
    description: "Fluxos de apoio psicológico e articulação com a rede de saúde.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    progress: 0,
    lessonsCount: 2,
    duration: "2h",
    category: "Módulo"
  }
];

export const lessons: Lesson[] = [
  // Módulo 1 Lessons
  {
    id: "l1",
    moduleId: "m1",
    title: "Conceitos Gerais e Determinantes",
    description: "O que é saúde emocional além da ausência de doença.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    duration: "1h 20min",
    completed: true,
    attachments: [
      { id: "mat1", title: "Política Nacional de Atenção à Saúde do Trabalhador", type: "PDF", url: "#", size: "1.5 MB" }
    ]
  },
  {
    id: "l2",
    moduleId: "m1",
    title: "Combate ao Estigma",
    description: "Desmistificando preconceitos sobre saúde emocional no ambiente de trabalho.",
    videoUrl: "",
    duration: "1h 20min",
    completed: true,
    attachments: []
  },
  {
    id: "l3",
    moduleId: "m1",
    title: "Relevância no Ambiente de Trabalho",
    description: "Impactos da saúde emocional na produtividade e clima organizacional.",
    videoUrl: "",
    duration: "1h 20min",
    completed: false,
    attachments: [
      { id: "mat2", title: "Legislação Trabalhista - Trechos Relevantes", type: "PDF", url: "#", size: "500 KB" }
    ]
  },
  // Módulo 2 Sample
  {
    id: "l4",
    moduleId: "m2",
    title: "Sinais Precoces de Sofrimento",
    description: "Como identificar mudanças de comportamento em si e nos colegas.",
    videoUrl: "",
    duration: "1h 20min",
    completed: false,
    attachments: [
      { id: "mat3", title: "Checklist de Auto-observação", type: "Guia", url: "#", size: "300 KB" }
    ]
  }
];

export const lives: LiveEvent[] = [
  {
    id: "ev1",
    title: "Aula Magna: Saúde Emocional Brasil",
    date: "2025-12-15",
    time: "14:00",
    instructor: "Kaká Ribeiro",
    description: "Abertura oficial do programa com a Diretora Geral da consultoria.",
    status: "upcoming",
    joinUrl: "#"
  },
  {
    id: "ev2",
    title: "Workshop: Práticas de Atenção Plena",
    date: "2025-12-20",
    time: "10:00",
    instructor: "Especialista Convidado",
    description: "Técnicas práticas de respiração e foco para o dia a dia.",
    status: "upcoming",
    joinUrl: "#"
  }
];

export const recentMaterials: Material[] = [
  { id: "mat1", title: "Guia de Autocuidado", type: "Cartilha", url: "#", size: "4.5 MB" },
  { id: "mat2", title: "Protocolos de Encaminhamento", type: "PDF", url: "#", size: "1.2 MB" },
  { id: "mat3", title: "Técnicas de Respiração", type: "Guia", url: "#", size: "2.1 MB" },
  { id: "mat4", title: "Comunicação Não Violenta no Trabalho", type: "PDF", url: "#", size: "3.5 MB" },
  { id: "mat5", title: "Manual de Boas Práticas", type: "Manual", url: "#", size: "5.2 MB" },
  { id: "mat6", title: "E-book: Atenção Plena Diária", type: "E-book", url: "#", size: "8.1 MB" },
  { id: "mat7", title: "Norma Regulamentadora 01", type: "Norma", url: "#", size: "1.0 MB" },
];
