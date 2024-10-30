"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const services = [
  { id: "netflix", name: "Netflix", plans: ["Básico", "Padrão", "Premium"] },
  { id: "spotify", name: "Spotify", plans: ["Individual", "Duo", "Família"] },
  { id: "youtube", name: "YouTube", plans: ["Individual", "Família"] },
  { id: "disney", name: "Disney+", plans: ["Mensal", "Anual"] },
  { id: "prime", name: "Prime Video", plans: ["Mensal", "Anual"] },
];

export default function CreateGroup() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleNext = () => {
    if (step === 1 && selectedService) {
      setStep(2);
    } else if (step === 2 && selectedPlan) {
      setStep(3);
    } else if (step === 3) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="container max-w-2xl py-8">
      <Card className="p-8">
        <div className="mb-8">
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= i ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {i}
              </div>
            ))}
          </div>
          
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Selecione o serviço</h2>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha um serviço" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Escolha o plano</h2>
              <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um plano" />
                </SelectTrigger>
                <SelectContent>
                  {services
                    .find((s) => s.id === selectedService)
                    ?.plans.map((plan) => (
                      <SelectItem key={plan} value={plan}>
                        {plan}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Grupo criado!</h2>
              <p className="text-muted-foreground">
                Seu grupo foi criado com sucesso. Compartilhe o código abaixo com seus amigos:
              </p>
              <Card className="p-4 bg-muted">
                <code className="text-lg font-mono">GROUP-123456</code>
              </Card>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <Button onClick={handleNext} disabled={step === 1 && !selectedService || step === 2 && !selectedPlan}>
              {step === 3 ? "Ir para Dashboard" : "Próximo"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}