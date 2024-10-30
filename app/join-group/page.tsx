"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function JoinGroup() {
  const router = useRouter();
  const [groupCode, setGroupCode] = useState("");

  const handleJoin = () => {
    if (groupCode) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="container max-w-2xl py-8">
      <Card className="p-8">
        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="code">Código do Grupo</TabsTrigger>
            <TabsTrigger value="browse">Ver Grupos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="code">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Entrar com código</h2>
              <p className="text-muted-foreground">
                Digite o código do grupo fornecido pelo administrador
              </p>
              <Input
                placeholder="Ex: GROUP-123456"
                value={groupCode}
                onChange={(e) => setGroupCode(e.target.value)}
              />
              <Button className="w-full" onClick={handleJoin} disabled={!groupCode}>
                Entrar no Grupo
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="browse">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Grupos Disponíveis</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">Netflix Premium</h3>
                        <p className="text-sm text-muted-foreground">2 vagas disponíveis</p>
                      </div>
                      <Button onClick={() => router.push("/dashboard")}>
                        Participar
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}