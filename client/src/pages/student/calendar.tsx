import StudentLayout from "@/components/layout/student-layout";
import { lives } from "@/lib/mock-data";
import { Calendar as CalendarIcon, Clock, User, Video, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { ptBR } from "date-fns/locale";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <StudentLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Agenda ao Vivo</h1>
          <p className="text-muted-foreground mt-2">Participe de mentorias e workshops com nossos especialistas.</p>
        </div>

        <div className="grid lg:grid-cols-[350px_1fr] gap-8">
          {/* Sidebar Calendar */}
          <div className="space-y-6">
            <div className="bg-card p-4 rounded-xl border shadow-sm">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-0 w-full"
                locale={ptBR}
              />
            </div>
            
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
              <h3 className="font-bold text-primary mb-2">Próximo Evento</h3>
              <div className="space-y-3">
                <div className="font-heading text-xl font-bold">{lives[0].title}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon size={16} />
                  <span>{lives[0].date}</span>
                  <span className="mx-1">•</span>
                  <Clock size={16} />
                  <span>{lives[0].time}</span>
                </div>
                <Button className="w-full mt-2 gap-2">
                  <Video size={16} /> Acessar Sala
                </Button>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
             <h2 className="font-heading text-2xl font-bold">Todos os Eventos</h2>
             
             <div className="space-y-4">
               {lives.map((event) => (
                 <div key={event.id} className="bg-card border rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
                   {/* Date Badge */}
                   <div className="flex flex-col items-center justify-center bg-secondary/30 w-16 h-16 rounded-lg text-secondary-foreground shrink-0 border border-secondary">
                     <span className="text-xs font-bold uppercase">Dez</span>
                     <span className="text-2xl font-bold">{event.date.split('-')[2]}</span>
                   </div>

                   {/* Info */}
                   <div className="flex-1 space-y-2">
                     <div className="flex items-center gap-2">
                       <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                         event.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-500'
                       }`}>
                         {event.status === 'upcoming' ? 'Em Breve' : 'Realizado'}
                       </span>
                     </div>
                     <h3 className="text-xl font-bold">{event.title}</h3>
                     <p className="text-muted-foreground text-sm">{event.description}</p>
                     
                     <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                       <div className="flex items-center gap-1.5">
                         <Clock size={16} /> {event.time}
                       </div>
                       <div className="flex items-center gap-1.5">
                         <User size={16} /> {event.instructor}
                       </div>
                     </div>
                   </div>

                   {/* Action */}
                   <div className="shrink-0 w-full md:w-auto">
                     <Button variant={event.status === 'upcoming' ? 'default' : 'outline'} className="w-full md:w-auto gap-2">
                       {event.status === 'upcoming' ? 'Entrar' : 'Ver Gravação'}
                       <ExternalLink size={16} />
                     </Button>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
