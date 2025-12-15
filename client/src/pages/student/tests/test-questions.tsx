import { useState } from "react";
import { Link, useRoute, useLocation } from "wouter";
import StudentLayout from "@/components/layout/student-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { testsData } from "@/lib/tests-data";
import NotFound from "@/pages/not-found";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const LIKERT_OPTIONS = [
  { value: "0", label: "Nunca" },
  { value: "1", label: "Raramente" },
  { value: "2", label: "Às vezes" },
  { value: "3", label: "Frequentemente" },
  { value: "4", label: "Sempre" }
];

export default function TestQuestionsPage() {
  const [match, params] = useRoute("/student/tests/:type/questions");
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  if (!match) return <NotFound />;

  const test = testsData.find(t => t.id === params.type);
  if (!test) return <NotFound />;

  const currentQuestion = test.questions[currentStep];
  const progress = ((currentStep) / test.questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < test.questions.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      // In a real app, calculate score here or send to backend
      // For prototype, just go to result
      setLocation(`/student/tests/${test.id}/result/new`);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <StudentLayout>
      <div className="max-w-3xl mx-auto py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${test.id === 'financial' ? 'bg-emerald-100 text-emerald-600' : test.id === 'relationship' ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'}`}>
              <test.icon size={20} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg">{test.title}</h1>
              <p className="text-xs text-muted-foreground">Avaliação em andamento</p>
            </div>
          </div>
          <Link href="/student/tests">
            <Button variant="ghost" size="sm" className="text-muted-foreground">Sair</Button>
          </Link>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-medium text-muted-foreground mb-2">
            <span>Questão {currentStep + 1} de {test.questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className={`h-2 ${test.id === 'financial' ? '[&>div]:bg-emerald-500' : test.id === 'relationship' ? '[&>div]:bg-rose-500' : '[&>div]:bg-blue-500'}`} />
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-lg min-h-[400px] flex flex-col">
          <CardContent className="p-6 md:p-10 flex-1 flex flex-col">
            <div className="flex-1">
               <h2 className="text-2xl md:text-3xl font-heading font-medium leading-tight mb-10 text-center">
                 {currentQuestion.text}
               </h2>

               <RadioGroup onValueChange={handleAnswer} value={answers[currentQuestion.id]} className="space-y-3 max-w-xl mx-auto">
                 {LIKERT_OPTIONS.map((option) => (
                   <div key={option.value} 
                        className={`flex items-center space-x-3 border rounded-xl p-4 transition-all cursor-pointer 
                        ${answers[currentQuestion.id] === option.value 
                          ? 'border-primary bg-primary/5 shadow-md scale-[1.02]' 
                          : 'border-border hover:border-primary/30 hover:bg-secondary/10'}`}
                   >
                     <RadioGroupItem value={option.value} id={`opt-${option.value}`} className="text-primary border-primary" />
                     <Label htmlFor={`opt-${option.value}`} className="flex-1 cursor-pointer font-medium text-foreground/80 text-lg">
                       {option.label}
                     </Label>
                   </div>
                 ))}
               </RadioGroup>
            </div>

            <div className="flex justify-between items-center mt-10 pt-6 border-t border-border/50">
              <Button 
                variant="ghost" 
                onClick={handleBack} 
                disabled={currentStep === 0}
                className="text-muted-foreground"
              >
                <ArrowLeft size={16} className="mr-2" /> Anterior
              </Button>

              <Button 
                onClick={handleNext} 
                disabled={!answers[currentQuestion.id]}
                size="lg"
                className={`px-8 ${test.id === 'financial' ? 'bg-emerald-600 hover:bg-emerald-700' : test.id === 'relationship' ? 'bg-rose-600 hover:bg-rose-700' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {currentStep === test.questions.length - 1 ? "Finalizar" : "Próxima"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}
