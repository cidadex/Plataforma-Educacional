import StudentLayout from "@/components/layout/student-layout";
import { modules, lessons } from "@/lib/mock-data";
import { useRoute, Link } from "wouter";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, PlayCircle, ChevronLeft, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ModuleDetail() {
  const [match, params] = useRoute("/student/modules/:id");
  const module = modules.find(m => m.id === params?.id);
  
  // Mock filter lessons for this module
  const moduleLessons = lessons.filter(l => l.moduleId === params?.id || l.moduleId === "m1"); // Fallback to m1 lessons for demo

  if (!module) return <div>Módulo não encontrado</div>;

  return (
    <StudentLayout>
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/student/modules">
          <Button variant="ghost" className="pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground">
            <ChevronLeft size={16} /> Voltar para Módulos
          </Button>
        </Link>

        {/* Header */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
              {module.category}
            </div>
            <h1 className="font-heading text-4xl font-bold text-foreground leading-tight">
              {module.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {module.description}
            </p>
            
            <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <BookOpen size={18} />
                <span>{module.lessonsCount} aulas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{module.duration} total</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border shadow-sm space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between font-semibold text-sm">
                <span>Seu Progresso</span>
                <span>{module.progress}%</span>
              </div>
              <Progress value={module.progress} className="h-3" />
            </div>
            {module.progress === 100 ? (
               <Button className="w-full" variant="outline">Ver Certificado</Button>
            ) : (
               <Link href={`/student/lesson/${moduleLessons[0]?.id}`}>
                 <Button className="w-full size-lg text-lg">Continuar Curso</Button>
               </Link>
            )}
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-6 pt-6">
          <h2 className="font-heading text-2xl font-bold">Conteúdo do Curso</h2>
          
          <div className="space-y-3">
            {moduleLessons.map((lesson, index) => (
              <Link key={lesson.id} href={`/student/lesson/${lesson.id}`}>
                <a className="block group">
                  <div className={cn(
                    "flex items-center gap-4 p-4 rounded-lg border transition-all duration-200",
                    lesson.completed 
                      ? "bg-secondary/30 border-transparent hover:bg-secondary/50" 
                      : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                  )}>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm",
                      lesson.completed 
                        ? "bg-primary text-white" 
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    )}>
                      {lesson.completed ? <CheckCircle size={18} /> : index + 1}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "font-semibold truncate",
                        lesson.completed ? "text-muted-foreground" : "text-foreground group-hover:text-primary"
                      )}>
                        {lesson.title}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">{lesson.duration} • {lesson.description}</p>
                    </div>

                    <div className="shrink-0">
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <PlayCircle size={20} className={cn(
                          "transition-colors",
                           lesson.completed ? "text-muted-foreground" : "text-primary opacity-0 group-hover:opacity-100"
                        )} />
                      </Button>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
