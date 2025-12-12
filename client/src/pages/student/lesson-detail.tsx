import StudentLayout from "@/components/layout/student-layout";
import { lessons, modules } from "@/lib/mock-data";
import { useRoute, Link } from "wouter";
import { ChevronLeft, Download, FileText, CheckCircle, PlayCircle, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function LessonDetail() {
  const [match, params] = useRoute("/student/lesson/:id");
  const lesson = lessons.find(l => l.id === params?.id);
  const module = modules.find(m => m.id === lesson?.moduleId);
  
  // Mock playlist (same lessons as module)
  const playlist = lessons; 

  if (!lesson) return <div>Aula não encontrada</div>;

  return (
    <StudentLayout>
      <div className="h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-6">
        {/* Left: Content Area */}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto pr-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
             <Link href={`/student/modules/${module?.id}`} className="hover:text-primary transition-colors">
               {module?.title}
             </Link>
             <span>/</span>
             <span className="font-medium text-foreground">{lesson.title}</span>
          </div>

          {/* Video Player */}
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg mb-6 relative group">
             {lesson.videoUrl ? (
                <iframe 
                  className="w-full h-full" 
                  src={lesson.videoUrl} 
                  title={lesson.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
             ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-stone-900 text-stone-500">
                  <div className="text-center">
                    <PlayCircle size={64} className="mx-auto mb-4 opacity-50" />
                    <p>Vídeo demonstrativo</p>
                  </div>
                </div>
             )}
          </div>

          {/* Lesson Info */}
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="font-heading text-2xl font-bold mb-2">{lesson.title}</h1>
                <p className="text-muted-foreground">{lesson.description}</p>
              </div>
              <Button size="lg" className="shrink-0 gap-2">
                Concluir Aula <CheckCircle size={18} />
              </Button>
            </div>

            <Separator />

            {/* Attachments */}
            {lesson.attachments.length > 0 && (
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-primary" /> Materiais de Apoio
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {lesson.attachments.map((file) => (
                    <div key={file.id} className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:border-primary/50 transition-colors group cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <FileText size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{file.title}</p>
                        <p className="text-xs text-muted-foreground">{file.type} • {file.size}</p>
                      </div>
                      <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download size={18} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Playlist Sidebar */}
        <div className="w-full lg:w-80 flex flex-col bg-card border rounded-xl overflow-hidden h-fit max-h-full">
          <div className="p-4 border-b bg-muted/30">
            <h3 className="font-bold">Conteúdo do Curso</h3>
            <p className="text-xs text-muted-foreground mt-1">
              {playlist.findIndex(l => l.id === lesson.id) + 1} de {playlist.length} aulas
            </p>
          </div>
          
          <div className="overflow-y-auto max-h-[500px] lg:max-h-[calc(100vh-16rem)] p-2 space-y-1">
            {playlist.map((item, idx) => {
               const isActive = item.id === lesson.id;
               return (
                <Link key={item.id} href={`/student/lesson/${item.id}`}>
                  <a className={cn(
                    "flex items-start gap-3 p-3 rounded-lg text-sm transition-colors",
                    isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}>
                    <div className="mt-0.5">
                      {item.completed ? (
                        <CheckCircle size={16} className="text-primary" />
                      ) : isActive ? (
                        <PlayCircle size={16} />
                      ) : (
                        <span className="w-4 h-4 flex items-center justify-center text-[10px] font-bold border rounded-full border-current">
                          {idx + 1}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="line-clamp-2">{item.title}</p>
                      <p className="text-xs opacity-70 mt-1">{item.duration}</p>
                    </div>
                  </a>
                </Link>
               )
            })}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
