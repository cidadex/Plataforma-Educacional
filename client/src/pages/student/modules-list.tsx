import StudentLayout from "@/components/layout/student-layout";
import { modules } from "@/lib/mock-data";
import { Link } from "wouter";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModulesList() {
  return (
    <StudentLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Módulos do Programa</h1>
          <p className="text-muted-foreground mt-2">Trilha completa de 24h para sua certificação em saúde mental.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link key={module.id} href={`/student/modules/${module.id}`}>
              <a className="group block h-full">
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={module.thumbnail} 
                      alt={module.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <PlayCircle className="text-white w-12 h-12" />
                    </div>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                      {module.category}
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors leading-tight">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                      {module.description}
                    </p>
                    
                    <div className="space-y-4 mt-auto">
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5">
                          <BookOpen size={14} />
                          <span>{module.lessonsCount} partes</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} />
                          <span>{module.duration}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <span>Progresso</span>
                          <span>{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
}
