import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock } from "lucide-react";

const FinalCTA = () => {
  return (
    <div className="bg-gradient-to-b from-background to-card py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Última Oportunidade
          </h2>
          <p className="text-xl text-primary font-bold">
            Esta oferta desaparece quando saíres desta página
          </p>
        </div>

        <div className="bg-card border-2 border-primary p-8 rounded-lg space-y-6">
          <h3 className="text-2xl font-bold">O que vais receber AGORA:</h3>
          
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">
                Programa completo "21 Dias de Poder" (valor: €97)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">
                21 exercícios práticos diários em formato PDF
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">Plano de ação estruturado dia-a-dia</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">
                Acesso vitalício - repete quantas vezes quiseres
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg">Acesso imediato via E-mail + WhatsApp</p>
            </div>
          </div>

          <div className="border-t border-border pt-6 space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Oferta expira em breve</span>
            </div>
            
            <div>
              <p className="text-lg line-through text-muted-foreground">
                Valor normal: €97
              </p>
              <p className="text-4xl font-bold text-primary mb-2">
                Apenas €39,99
              </p>
              <p className="text-sm text-muted-foreground">
                (pagamento único - sem mensalidades)
              </p>
            </div>

            <Button variant="neon" size="lg" className="w-full text-xl py-8">
              SIM! Quero transformar a minha vida em 21 dias
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              ✓ Compra 100% segura | ✓ Acesso imediato | ✓ Garantia de satisfação
            </p>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground italic">
            "O melhor momento para começar foi há 21 dias. O segundo melhor
            momento é AGORA."
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
