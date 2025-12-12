import { LucideIcon } from "lucide-react";
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
  Award
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
  category: "Trilha" | "Curso" | "NR-1";
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
  type: "PDF" | "E-Book" | "Cartilha";
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
}

// Mock Data
export const currentUser: UserProfile = {
  id: "u1",
  name: "Ana Silva",
  email: "ana.silva@exemplo.com",
  role: "student",
  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  progress: 65,
  completedModules: 3,
  certificates: 2
};

export const modules: Module[] = [
  {
    id: "m1",
    title: "Onboarding Institucional",
    description: "Conheça nossa cultura, valores e estrutura organizacional.",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    progress: 100,
    lessonsCount: 5,
    duration: "2h",
    category: "Trilha"
  },
  {
    id: "m2",
    title: "NR-1: Disposições Gerais",
    description: "Curso obrigatório sobre normas regulamentadoras de segurança.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    progress: 45,
    lessonsCount: 8,
    duration: "4h",
    category: "NR-1"
  },
  {
    id: "m3",
    title: "Liderança e Gestão",
    description: "Desenvolvimento de competências para líderes e gestores.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    progress: 10,
    lessonsCount: 12,
    duration: "8h",
    category: "Curso"
  },
  {
    id: "m4",
    title: "Comunicação Eficaz",
    description: "Técnicas para melhorar a comunicação no ambiente de trabalho.",
    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    progress: 0,
    lessonsCount: 6,
    duration: "3h",
    category: "Curso"
  }
];

export const lessons: Lesson[] = [
  {
    id: "l1",
    moduleId: "m1",
    title: "Bem-vindo à Instituição",
    description: "Uma visão geral sobre nossa história e missão.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    duration: "15 min",
    completed: true,
    attachments: [
      { id: "mat1", title: "Manual do Colaborador", type: "PDF", url: "#", size: "2.5 MB" }
    ]
  },
  {
    id: "l2",
    moduleId: "m1",
    title: "Nossos Valores",
    description: "Entenda os princípios que guiam nossas decisões.",
    videoUrl: "",
    duration: "20 min",
    completed: true,
    attachments: []
  },
  {
    id: "l3",
    moduleId: "m2",
    title: "Introdução à NR-1",
    description: "Conceitos básicos e aplicabilidade.",
    videoUrl: "",
    duration: "30 min",
    completed: false,
    attachments: [
      { id: "mat2", title: "Norma Regulamentadora 1", type: "PDF", url: "#", size: "1.2 MB" },
      { id: "mat3", title: "Guia de Bolso", type: "E-Book", url: "#", size: "5.0 MB" }
    ]
  }
];

export const lives: LiveEvent[] = [
  {
    id: "ev1",
    title: "Mentoria de Carreira",
    date: "2025-12-15",
    time: "14:00",
    instructor: "Carlos Mendes",
    description: "Sessão de tira-dúvidas sobre plano de carreira.",
    status: "upcoming",
    joinUrl: "#"
  },
  {
    id: "ev2",
    title: "Workshop de Inovação",
    date: "2025-12-10",
    time: "10:00",
    instructor: "Julia Roberts",
    description: "Workshop prático sobre metodologias ágeis.",
    status: "past",
    joinUrl: "#"
  }
];

export const recentMaterials: Material[] = [
  { id: "mat1", title: "Manual do Colaborador", type: "PDF", url: "#", size: "2.5 MB" },
  { id: "mat2", title: "Código de Ética", type: "PDF", url: "#", size: "1.8 MB" },
  { id: "mat3", title: "Guia de Benefícios", type: "Cartilha", url: "#", size: "3.2 MB" },
];
