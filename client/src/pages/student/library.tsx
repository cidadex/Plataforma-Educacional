import StudentLayout from "@/components/layout/student-layout";
import { recentMaterials } from "@/lib/mock-data";
import { FileText, Download, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("Todos");
  
  // Create tabs list
  const tabs = ["Todos", "Manuais", "E-books", "Cartilhas", "Normas"];

  // Filter materials based on active tab
  // Note: In a real app, 'type' might need to match exactly or be normalized.
  // Using simple filtering logic here based on the mock data structure.
  // The mock data currently has types like "PDF", "Cartilha", "Guia", etc.
  // We'll try to map the tab names to the types in the mock data.
  
  const filteredMaterials = activeTab === "Todos" 
    ? [...recentMaterials, ...recentMaterials, ...recentMaterials] 
    : [...recentMaterials, ...recentMaterials, ...recentMaterials].filter(item => {
        if (activeTab === "Manuais") return item.type === "Guia" || item.type === "Manual";
        if (activeTab === "E-books") return item.type === "E-book" || item.type === "Livro";
        if (activeTab === "Cartilhas") return item.type === "Cartilha";
        if (activeTab === "Normas") return item.type === "Norma" || item.type === "PDF"; // Assuming PDF might be norms for now
        return true;
    });

  return (
    <StudentLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Biblioteca</h1>
            <p className="text-muted-foreground mt-2">Acesse todos os materiais complementares, e-books e cartilhas.</p>
          </div>
          <div className="flex gap-2">
            <div className="relative w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar materiais..." className="pl-9" />
            </div>
            <Button variant="outline" size="icon"><Filter size={18} /></Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <Badge 
              key={tab}
              variant={activeTab === tab ? "default" : "outline"} 
              className={`cursor-pointer px-4 py-1.5 text-sm ${
                activeTab === tab 
                  ? "bg-primary hover:bg-primary/90" 
                  : "hover:bg-muted"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Badge>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.length > 0 ? (
            filteredMaterials.map((item, i) => (
            <div key={`${item.id}-${i}`} className="bg-card border rounded-xl p-5 hover:shadow-lg transition-all group flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground">
                  <FileText size={24} />
                </div>
                <Badge variant="secondary" className="text-xs">{item.type}</Badge>
              </div>
              
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                Documento oficial atualizado contendo as diretrizes institucionais.
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground font-medium">{item.size}</span>
                <Button variant="ghost" size="sm" className="gap-2 hover:text-primary hover:bg-primary/10">
                  <Download size={16} /> Baixar
                </Button>
              </div>
            </div>
          ))
          ) : (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              <p>Nenhum material encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </div>
    </StudentLayout>
  );
}
