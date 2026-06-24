"use client";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { brand } from "@/lib/brand";
import { markLeadAccess } from "@/lib/lead-access";
import {
  getEmailError,
  getInstagramError,
  normalizeEmail,
  normalizeInstagram,
} from "@/lib/lead-validation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Answers = {
  readyToChange: string;
  mainGoal: string;
  mainGoalOther: string;
  trainingDuration: string;
  biggestObstacle: string;
  obstacleOther: string;
  monthlyInvestment: string;
  fullName: string;
  email: string;
  instagram: string;
};

const initialAnswers: Answers = {
  readyToChange: "",
  mainGoal: "",
  mainGoalOther: "",
  trainingDuration: "",
  biggestObstacle: "",
  obstacleOther: "",
  monthlyInvestment: "",
  fullName: "",
  email: "",
  instagram: "",
};

type QuestionStep = {
  id: keyof Answers;
  question: string;
  type: "choice" | "text";
  options?: string[];
  otherField?: keyof Answers;
  placeholder?: string;
  inputType?: string;
};

type SummaryStep = {
  id: "summary";
  question: string;
  type: "summary";
};

type Step = QuestionStep | SummaryStep;

const QUESTION_STEPS: QuestionStep[] = [
  {
    id: "readyToChange",
    question: "¿Estás listo para hacer un cambio real y conseguir el cuerpo que quieres?",
    type: "choice",
    options: ["Sí", "No"],
  },
  {
    id: "mainGoal",
    question: "¿Cuál es tu meta principal ahora mismo?",
    type: "choice",
    options: [
      "Perder grasa",
      "Recomposición",
      "Ganar músculo",
      "Mejorar salud",
      "Otro",
    ],
    otherField: "mainGoalOther",
  },
  {
    id: "trainingDuration",
    question: "¿Cuánto tiempo llevas entrenando de forma consistente?",
    type: "choice",
    options: [
      "Menos de 6 meses",
      "6 meses a 1 año",
      "1 a 3 años",
      "3 a 5 años",
      "5+ años",
    ],
  },
  {
    id: "biggestObstacle",
    question: "¿Qué es lo que más te frena para alcanzar tus metas?",
    type: "choice",
    options: [
      "Falta de accountability",
      "Confusión con la nutrición",
      "Entrenamiento inconsistente",
      "Falta de tiempo",
      "Estancado en un plateau",
      "Otro",
    ],
    otherField: "obstacleOther",
  },
  {
    id: "monthlyInvestment",
    question: "¿Cuánto estarías dispuesto a invertir al mes para lograr tus metas?",
    type: "choice",
    options: [
      "Menos de $150/mes",
      "$150-$250/mes",
      "$250-$400/mes",
      "$400+/mes",
      "Aún no estoy seguro",
    ],
  },
  {
    id: "fullName",
    question: "¿Cuál es tu nombre completo?",
    type: "text",
    placeholder: "Tu nombre",
    inputType: "text",
  },
  {
    id: "email",
    question: "¿Cuál es tu correo electrónico?",
    type: "text",
    placeholder: "tu@email.com",
    inputType: "email",
  },
  {
    id: "instagram",
    question: "¿Cuál es tu usuario de Instagram?",
    type: "text",
    placeholder: "@tuusuario",
    inputType: "text",
  },
];

const SUMMARY_STEP: SummaryStep = {
  id: "summary",
  question: "Revisa tu aplicación",
  type: "summary",
};

const STEPS: Step[] = [...QUESTION_STEPS, SUMMARY_STEP];

function isQuestionStep(step: Step): step is QuestionStep {
  return step.type !== "summary";
}

function isQuestionComplete(step: QuestionStep, answers: Answers): boolean {
  const value = answers[step.id];

  if (step.id === "readyToChange" && answers.readyToChange === "No") {
    return false;
  }

  if (step.type === "text") {
    if (step.id === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    }
    if (step.id === "instagram") {
      return value.replace(/^@/, "").trim().length >= 2;
    }
    return value.trim().length >= 2;
  }

  if (!value) return false;

  if (step.otherField && value === "Otro") {
    return answers[step.otherField].trim().length >= 2;
  }

  return true;
}

function areAllQuestionsComplete(answers: Answers): boolean {
  return QUESTION_STEPS.every((step) => isQuestionComplete(step, answers));
}

function getDisplayValue(step: QuestionStep, answers: Answers): string {
  const value = answers[step.id];
  if (step.otherField && value === "Otro") {
    return answers[step.otherField];
  }
  return value;
}

async function submitApplication(answers: Answers) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fuente: "coaching",
      nombre: answers.fullName.trim(),
      email: normalizeEmail(answers.email),
      instagram: normalizeInstagram(answers.instagram),
      readyToChange: answers.readyToChange,
      mainGoal:
        answers.mainGoal === "Otro" ? answers.mainGoalOther : answers.mainGoal,
      trainingDuration: answers.trainingDuration,
      biggestObstacle:
        answers.biggestObstacle === "Otro"
          ? answers.obstacleOther
          : answers.biggestObstacle,
      monthlyInvestment: answers.monthlyInvestment,
    }),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      error?: string
    } | null
    throw new Error(data?.error ?? "Failed to submit application")
  }
}

function ChoiceOption({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "w-full text-left px-5 py-4 border transition-all duration-200 font-mono text-sm",
        selected
          ? "border-primary bg-primary/10 text-foreground"
          : "border-border text-muted hover:border-primary/30 hover:text-foreground bg-surface"
      )}
    >
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "w-4 h-4 rounded-full border shrink-0 flex items-center justify-center",
            selected ? "border-primary" : "border-border"
          )}
        >
          {selected && <span className="w-2 h-2 rounded-full bg-primary" />}
        </span>
        {label}
      </span>
    </button>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const step = STEPS[currentStep];
  const isSummary = step.type === "summary";
  const stepComplete = isSummary
    ? areAllQuestionsComplete(answers)
    : isQuestionComplete(step, answers);
  const isLastStep = currentStep === STEPS.length - 1;
  const progress = ((currentStep + 1) / STEPS.length) * 100;
  const showNotReadyWarning =
    !isSummary &&
    step.id === "readyToChange" &&
    answers.readyToChange === "No";

  const updateAnswer = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setSubmitError("");
  };

  const handleNext = async () => {
    if (!stepComplete) return;

    if (isLastStep) {
      setSubmitting(true);
      setSubmitError("");
      try {
        await submitApplication(answers);
        markLeadAccess("coaching");
        setSubmitted(true);
      } catch {
        setSubmitError(
          "Algo salió mal al enviar tu aplicación. Por favor intenta de nuevo."
        );
      } finally {
        setSubmitting(false);
      }
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      stepComplete &&
      isQuestionStep(step) &&
      step.type === "text"
    ) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      id="apply"
      className="relative z-10 flex min-h-svh flex-col justify-center border-t border-border scroll-mt-28 bg-background py-16 md:py-24"
    >
      <div className="container max-w-2xl">
        <div className="section-divider mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted whitespace-nowrap">
            Aplicación
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-center mb-4">
          {brand.apply.title}
        </h2>
        <p className="text-muted text-center mb-12 text-sm md:text-base">
          {brand.apply.subtitle}
        </p>

        {submitted ? (
          <div className="border border-border bg-surface p-12 text-center">
            <p className="font-serif text-2xl mb-3">
              {brand.apply.confirmationTitle}
            </p>
            <p className="text-muted text-sm">
              Gracias, {answers.fullName.split(" ")[0]}.{" "}
              {brand.apply.confirmationMessage}
            </p>
          </div>
        ) : (
          <div className="border border-border bg-surface p-6 md:p-10 shadow-sm">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {isSummary
                    ? "Revisión"
                    : `Pregunta ${currentStep + 1} de ${QUESTION_STEPS.length}`}
                </span>
                <span className="font-mono text-xs text-muted">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-px bg-border w-full">
                <div
                  className="h-px bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl mb-8 leading-snug">
              {step.question}
            </h3>

            {isSummary ? (
              <div className="space-y-4 mb-8">
                {QUESTION_STEPS.map((questionStep) => (
                  <div
                    key={questionStep.id}
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 border-b border-border pb-4 last:border-b-0"
                  >
                    <p className="text-sm text-muted max-w-[60%]">
                      {questionStep.question}
                    </p>
                    <p className="text-sm font-medium text-foreground sm:text-right">
                      {getDisplayValue(questionStep, answers)}
                    </p>
                  </div>
                ))}
                {submitError && (
                  <p className="text-sm text-red-700">{submitError}</p>
                )}
              </div>
            ) : (
              <>
                {step.type === "choice" && (
                  <div className="space-y-3 mb-8">
                    {step.options?.map((option) => (
                      <ChoiceOption
                        key={option}
                        label={option}
                        selected={answers[step.id] === option}
                        onSelect={() => updateAnswer(step.id, option)}
                      />
                    ))}

                    {step.otherField && answers[step.id] === "Otro" && (
                      <input
                        type="text"
                        value={answers[step.otherField]}
                        onChange={(e) =>
                          updateAnswer(step.otherField!, e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        placeholder="Especifica..."
                        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors mt-2"
                        autoFocus
                      />
                    )}

                    {showNotReadyWarning && (
                      <p className="text-sm text-red-700 border border-red-200 bg-red-50 px-4 py-3">
                        El coaching funciona mejor cuando estás listo para
                        comprometerte. Si aún no estás ahí, está bien. Vuelve
                        cuando lo estés.
                      </p>
                    )}
                  </div>
                )}

                {step.type === "text" && (
                  <div className="mb-8">
                    <input
                      type={step.inputType}
                      value={answers[step.id]}
                      onChange={(e) => updateAnswer(step.id, e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={step.placeholder}
                      className="w-full bg-background border border-border px-4 py-4 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                      autoFocus
                    />
                  </div>
                )}
              </>
            )}

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className={cn(
                  "inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-150",
                  currentStep === 0
                    ? "text-muted/30 cursor-not-allowed"
                    : "text-muted hover:text-foreground"
                )}
              >
                <ChevronLeft className="w-4 h-4" />
                Atrás
              </button>

              {isLastStep ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!areAllQuestionsComplete(answers) || submitting}
                  className={cn(
                    (!areAllQuestionsComplete(answers) || submitting) &&
                      "opacity-40 pointer-events-none"
                  )}
                >
                  {submitting ? "Enviando..." : brand.apply.submit}
                </Button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!stepComplete}
                  className={cn(
                    "inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-150",
                    stepComplete
                      ? "text-primary hover:text-primary/80"
                      : "text-muted/30 cursor-not-allowed"
                  )}
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
