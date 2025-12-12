import StudentLayout from "@/components/layout/student-layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Progress } from "@/components/ui/progress";

const mockQuiz = {
  id: "q1",
  title: "Avaliação Final: NR-1",
  questions: [
    {
      id: 1,
      text: "Qual é o principal objetivo da NR-1?",
      options: [
        "Estabelecer as disposições gerais sobre segurança e saúde no trabalho.",
        "Definir os equipamentos de proteção individual obrigatórios.",
        "Regularizar o pagamento de insalubridade.",
        "Nenhuma das anteriores."
      ],
      correct: 0
    },
    {
      id: 2,
      text: "Quem é responsável por cumprir as normas de segurança?",
      options: [
        "Apenas o empregador.",
        "Apenas o empregado.",
        "Empregador e empregado solidariamente.",
        "O governo federal."
      ],
      correct: 2
    },
    {
      id: 3,
      text: "O que significa GRO?",
      options: [
        "Gerenciamento de Riscos Ocupacionais.",
        "Grupo de Risco Operacional.",
        "Guia de Regulamentação Oficial.",
        "Gestão de Recursos Opcionais."
      ],
      correct: 0
    }
  ]
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, parseInt(selectedOption)];
      setAnswers(newAnswers);
      setSelectedOption(null);
      
      if (currentQuestion < mockQuiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((ans, idx) => {
      if (ans === mockQuiz.questions[idx].correct) score++;
    });
    return (score / mockQuiz.questions.length) * 100;
  };

  if (showResult) {
    const score = calculateScore();
    const passed = score >= 70;

    return (
      <StudentLayout>
        <div className="max-w-2xl mx-auto py-12 text-center space-y-8 animate-in zoom-in-95 duration-500">
          <div className="flex justify-center">
            {passed ? (
              <CheckCircle className="w-24 h-24 text-green-500" />
            ) : (
              <XCircle className="w-24 h-24 text-red-500" />
            )}
          </div>
          
          <div>
            <h1 className="text-4xl font-heading font-bold mb-2">
              {passed ? "Parabéns!" : "Tente Novamente"}
            </h1>
            <p className="text-xl text-muted-foreground">
              Você acertou {score.toFixed(0)}% das questões.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Nota Final</span>
                  <span>{score.toFixed(0)}/100</span>
                </div>
                <Progress value={score} className={passed ? "bg-green-100 [&>div]:bg-green-500" : "bg-red-100 [&>div]:bg-red-500"} />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4">
            <Link href="/student/modules">
              <Button variant="outline">Voltar aos Módulos</Button>
            </Link>
            {passed && (
              <Button className="gap-2">
                <CheckCircle size={18} /> Emitir Certificado
              </Button>
            )}
            {!passed && (
               <Button onClick={() => window.location.reload()}>Refazer Teste</Button>
            )}
          </div>
        </div>
      </StudentLayout>
    );
  }

  const progress = ((currentQuestion + 1) / mockQuiz.questions.length) * 100;

  return (
    <StudentLayout>
      <div className="max-w-3xl mx-auto py-8 space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <h1 className="text-2xl font-bold font-heading">{mockQuiz.title}</h1>
            <span className="text-sm text-muted-foreground">Questão {currentQuestion + 1} de {mockQuiz.questions.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-2 border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">
              {mockQuiz.questions[currentQuestion].text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-4">
              {mockQuiz.questions[currentQuestion].options.map((option, idx) => (
                <div key={idx} className={`flex items-center space-x-3 border p-4 rounded-lg transition-all cursor-pointer ${selectedOption === idx.toString() ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:bg-muted/50'}`}>
                  <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                  <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer font-medium">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-end pt-4">
            <Button onClick={handleNext} disabled={!selectedOption} className="gap-2 pl-6 pr-6">
              {currentQuestion < mockQuiz.questions.length - 1 ? 'Próxima Questão' : 'Finalizar Avaliação'}
              <ArrowRight size={16} />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </StudentLayout>
  );
}
