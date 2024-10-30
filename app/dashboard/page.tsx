"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Users, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Configurações
        </Button>
      </div>

      <Tabs defaultValue="groups" className="space-y-4">
        <TabsList>
          <TabsTrigger value="groups">
            <Users className="mr-2 h-4 w-4" />
            Meus Grupos
          </TabsTrigger>
          <TabsTrigger value="credits">
            <CreditCard className="mr-2 h-4 w-4" />
            Créditos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Netflix Premium</h3>
                <p className="text-sm text-muted-foreground">4 membros • Próximo pagamento em 7 dias</p>
              </div>
              <Button>Gerenciar</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Spotify Família</h3>
                <p className="text-sm text-muted-foreground">6 membros • Próximo pagamento em 15 dias</p>
              </div>
              <Button>Gerenciar</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="credits" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Saldo disponível</h3>
              <p className="text-2xl font-bold">R$ 50,00</p>
            </div>
            <Button className="w-full">Adicionar créditos</Button>
          </Card>

          <div className="space-y-2">
            <h4 className="font-semibold mb-2">Histórico de transações</h4>
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Pagamento Netflix</p>
                    <p className="text-sm text-muted-foreground">23/04/2024</p>
                  </div>
                  <p className="text-red-500">- R$ 13,90</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}