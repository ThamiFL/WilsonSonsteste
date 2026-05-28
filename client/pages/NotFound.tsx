import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-blue-900 mb-2">
            404
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded mx-auto"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida. Continue desenvolvendo o conteúdo desta página conforme necessário.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Voltar para Início
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
