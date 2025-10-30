const WhyNow = () => {
  return (
    <div className="bg-card py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Porque é que deves aproveitar{" "}
          <span className="text-primary">AGORA</span>?
        </h2>
        
        <div className="space-y-6 text-lg">
          <p className="leading-relaxed">
            Se já decidiste investir em ti com{" "}
            <span className="font-bold">"Aprenda a Fazer Falta"</span>, então
            sabes que a mudança começa com uma decisão.
          </p>
          
          <p className="leading-relaxed">
            Mas aqui está a verdade:{" "}
            <span className="text-primary font-bold">
              conhecimento sem ação não transforma nada
            </span>
            .
          </p>
          
          <p className="leading-relaxed">
            O programa <span className="font-bold">"21 Dias de Poder"</span> foi
            desenhado para garantir que não ficas apenas com teoria, mas que{" "}
            <span className="font-bold">ages todos os dias</span> durante 3
            semanas consecutivas.
          </p>
          
          <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
            <p className="text-xl font-bold mb-2">
              Esta oferta exclusiva só está disponível NESTE momento.
            </p>
            <p className="text-muted-foreground">
              Se saíres desta página, perdes esta oportunidade de ter o programa
              completo por apenas €19,99 (valor normal: €47).
            </p>
          </div>
          
          <p className="leading-relaxed">
            Em apenas 21 dias, vais criar a versão de ti que sempre quiseste ser.
            A versão que{" "}
            <span className="text-primary font-bold">faz falta</span>, que tem{" "}
            <span className="text-primary font-bold">poder</span> e que vive com{" "}
            <span className="text-primary font-bold">propósito</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyNow;
