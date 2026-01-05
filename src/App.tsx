import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Digitalizacion from "./pages/Digitalizacion";
import Automatizacion from "./pages/Automatizacion";
import GestionDocumental from "./pages/GestionDocumental";
import Capacitacion from "./pages/Capacitacion";
import RespaldoServidores from "./pages/RespaldoServidores";
import UsbEncriptados from "./pages/UsbEncriptados";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/digitalizacion-de-documentos" element={<Digitalizacion />} />
          <Route path="/automatizacion-procesos-empresariales" element={<Automatizacion />} />
          <Route path="/gestion-documental" element={<GestionDocumental />} />
          <Route path="/capacitacion" element={<Capacitacion />} />
          <Route path="/respaldo-servidores" element={<RespaldoServidores />} />
          <Route path="/usb-encriptados" element={<UsbEncriptados />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
