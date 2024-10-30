import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Share2, Users, CreditCard, Percent } from "lucide-react";

const streamingServices = [
  {
    name: "Netflix",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop",
    activeGroups: 238,
    savings: "75%",
    price: "R$ 55,90",
    splitPrice: "R$ 13,97",
  },
  {
    name: "Spotify Premium",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000&auto=format&fit=crop",
    activeGroups: 156,
    savings: "80%",
    price: "R$ 34,90",
    splitPrice: "R$ 6,98",
  },
  {
    name: "Disney+",
    image: "https://images.unsplash.com/photo-1604877594191-662ec8075da2?q=80&w=1000&auto=format&fit=crop",
    activeGroups: 142,
    savings: "70%",
    price: "R$ 33,90",
    splitPrice: "R$ 10,17",
  },
  {
    name: "HBO Max",
    image: "https://images.unsplash.com/photo-1612404819070-77c6da472e68?q=80&w=1000&auto=format&fit=crop",
    activeGroups: 98,
    savings: "75%",
    price: "R$ 34,90",
    splitPrice: "R$ 8,72",
  },
  {
    name: "Amazon Prime",
    image: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=1000&auto=format&fit=crop",
    activeGroups: 187,
    savings: "75%",
    price: "R$ 14,90",
    splitPrice: "R$ 3,72",
  },
  {
    name: "YouTube Premium",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
    activeGroups: 134,
    savings: "70%",
    price: "R$ 24,90",
    splitPrice: "R$ 7,47",
  },
  {
    name: "Globoplay",
    image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?q=80&w=1000&auto=format&fit=crop",
    activeGroups: 76,
    savings: "75%",
    price: "R$ 49,90",
    splitPrice: "R$ 12,47",
  },
  {
    name: "Paramount+",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop",
    activeGroups: 64,
    savings: "70%",
    price: "R$ 19,90",
    splitPrice: "R$ 5,97",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Divida assinaturas e economize até <span className="text-primary">80%</span> em
                <br />
                <span className="text-primary">Streamings</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Com o Splitpass você pode compartilhar mais de 500 serviços e assinaturas de forma fácil, rápida e segura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link href="/create-group">
                    <Share2 className="mr-2 h-4 w-4" />
                    Criar Grupo
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="min-w-[200px]">
                  <Link href="/join-group">
                    <Users className="mr-2 h-4 w-4" />
                    Entrar em Grupo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Muito mais assinaturas para você
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Aproveite para ter uma gama de serviços que sempre quis por um preço mais acessível
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {streamingServices.map((service) => (
                <Card key={service.name} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary">
                      Economia de {service.savings}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {service.activeGroups} grupos ativos
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">De {service.price}</span>
                        <span className="font-bold text-lg">Por {service.splitPrice}</span>
                      </div>
                      <Button size="sm">Participar</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl">Crie ou Entre</h3>
                  <p className="text-muted-foreground">
                    Crie um novo grupo de compartilhamento ou entre em um existente
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl">Conecte-se</h3>
                  <p className="text-muted-foreground">
                    Encontre pessoas para dividir sua assinatura de forma segura
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Percent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl">Seu bolso agradece</h3>
                  <p className="text-muted-foreground">
                    Pague apenas sua parte da assinatura e economize todo mês
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}