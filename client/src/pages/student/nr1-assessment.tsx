import { useState } from "react";
import StudentLayout from "@/components/layout/student-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link, useLocation } from "wouter";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: 1,
    question: "Como você avaliaria seu nível de estresse no trabalho na última semana?",
    options: [
      { value: "1", label: "Muito baixo - Me sinto tranquilo" },
      { value: "2", label: "Baixo - Alguns momentos de tensão" },
      { value: "3", label: "Moderado - Estresse frequente mas gerenciável" },
      { value: "4", label: "Alto - Me sinto sobrecarregado quase todos os dias" },
      { value: "5", label: "Muito alto - Não consigo lidar com a pressão" }
    ]
  },
  {
    id: 2,
    question: "Você tem conseguido se desligar do trabalho quando está em casa?",
    options: [
      { value: "1", label: "Sim, totalmente" },
      { value: "2", label: "Na maior parte do tempo" },
      { value: "3", label: "Às vezes" },
      { value: "4", label: "Raramente" },
      { value: "5", label: "Nunca, estou sempre conectado/preocupado" }
    ]
  },
  {
    id: 3,
    question: "Como está a qualidade do seu sono?",
    options: [
      { value: "1", label: "Excelente - Durmo bem e acordo descansado" },
      { value: "2", label: "Boa - Tenho algumas noites ruins" },
      { value: "3", label: "Regular - Acordo cansado frequentemente" },
      { value: "4", label: "Ruim - Tenho insônia ou sono agitado" },
      { value: "5", label: "Péssima - Não consigo descansar" }
    ]
  },
  {
    id: 4,
    question: "Você sente que tem apoio dos seus colegas e superiores?",
    options: [
      { value: "1", label: "Sim, muito apoio" },
      { value: "2", label: "Sim, algum apoio" },
      { value: "3", label: "Neutro" },
      { value: "4", label: "Pouco apoio" },
      { value: "5", label: "Nenhum apoio, me sinto isolado" }
    ]
  }
];

export default function NR1AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [, setLocation] = useLocation();

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finish test
      setLocation("/student/nr1-results");
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <StudentLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Avaliação NR-1</h1>
          <p className="text-muted-foreground mt-2">
            Questionário de rastreio de saúde mental e riscos psicossociais no trabalho.
          </p>
        </div>

        <Card className="border-secondary/20 shadow-lg">
          <CardHeader className="bg-secondary/10 border-b border-secondary/10 pb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-primary">Questão {currentStep + 1} de {questions.length}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% concluído</span>
            </div>
            <Progress value={progress} className="h-2 bg-secondary/30" />
          </CardHeader>
          <CardContent className="pt-8 pb-8 px-6 md:px-10">
            <h2 className="text-xl font-bold mb-6 text-foreground leading-relaxed">
              {questions[currentStep].question}
            </h2>

            <RadioGroup onValueChange={handleAnswer} value={answers[questions[currentStep].id]} className="space-y-3">
              {questions[currentStep].options.map((option) => (
                <div key={option.value} className={`flex items-center space-x-3 border rounded-xl p-4 transition-all cursor-pointer ${answers[questions[currentStep].id] === option.value ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-primary/50 hover:bg-secondary/5'}`}>
                  <RadioGroupItem value={option.value} id={`q${questions[currentStep].id}-${option.value}`} className="text-primary border-primary" />
                  <Label htmlFor={`q${questions[currentStep].id}-${option.value}`} className="flex-1 cursor-pointer font-medium text-foreground/80">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="mt-8 flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!answers[questions[currentStep].id]}
                className="bg-primary hover:bg-primary/90 text-white min-w-[140px]"
              >
                {currentStep === questions.length - 1 ? "Finalizar Avaliação" : "Próxima Questão"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-blue-800 text-sm">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <p>
            Suas respostas são confidenciais e protegidas. Este teste serve apenas como um indicativo e não substitui um diagnóstico profissional.
          </p>
        </div>
      </div>
    </StudentLayout>
  );
}
