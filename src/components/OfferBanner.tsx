import { Bell } from "lucide-react";

const OfferBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 text-center font-bold">
      <div className="flex items-center justify-center gap-2">
        <Bell className="w-5 h-5" />
        <span>Oferta exclusiva válida apenas até 30/10</span>
      </div>
    </div>
  );
};

export default OfferBanner;
