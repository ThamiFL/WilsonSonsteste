import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WS</span>
              </div>
              <span className="font-display font-bold text-lg text-blue-900 hidden sm:inline">Wilson Sons</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('registration')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Inscrição
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('registration')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Inscrição
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slideInUp">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm">
                Evento Wilson Sons 2024
              </div>

              <h1 className="text-5xl md:text-6xl font-display font-bold text-blue-900 leading-tight">
                Navegue o Futuro Marítimo
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Um evento exclusivo para estudantes, profissionais e entusiastas da área naval, promovido pela Wilson Sons, líder em soluções marítimas e portuárias.
              </p>

              <div className="space-y-2 pt-4">
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Networking com profissionais do setor
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Palestras sobre inovação marítima
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Oportunidades de carreira
                </p>
              </div>

              <button
                onClick={() => scrollToSection('registration')}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                Inscrever-se Agora
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-white rounded-3xl overflow-hidden">
                {/* Decorative wave pattern */}
                <svg
                  className="absolute w-full h-full opacity-20"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M0,50 Q25,40 50,50 T100,50" stroke="currentColor" fill="none" className="text-blue-400" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#waves)" />
                </svg>

                {/* Ship icon animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-blue-500 opacity-30 animate-float">
                    <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 150C50 150 50 100 100 80C150 100 150 150 150 150M40 150H160M60 150L65 170H135L140 150" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="100" cy="80" r="8" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Accent circles */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-10"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-4">
              Sobre o Evento
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma oportunidade única de explorar as tendências e inovações do setor marítimo e portuário
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                🎓
              </div>
              <h3 className="text-xl font-display font-bold text-blue-900 mb-3">
                Para Estudantes
              </h3>
              <p className="text-gray-600">
                Conheça as oportunidades de estágio e desenvolvimento profissional no setor marítimo.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                💼
              </div>
              <h3 className="text-xl font-display font-bold text-blue-900 mb-3">
                Para Profissionais
              </h3>
              <p className="text-gray-600">
                Expanda sua rede de contatos e descubra novos desafios na indústria marítima.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                🌊
              </div>
              <h3 className="text-xl font-display font-bold text-blue-900 mb-3">
                Para Entusiastas
              </h3>
              <p className="text-gray-600">
                Mergulhe no mundo da inovação marítima e conheça os projetos mais avançados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-4">
              Inscreva-se Agora
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Vagas limitadas - não perca essa oportunidade
            </p>
            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold animate-pulse">
              ⏰ Inscrições abertas até 31 de Dezembro
            </div>
          </div>

          {/* Google Form Iframe */}
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScgebX0wuS7MkvPWLXGtq2HkAmVJ5mCus9ioMhE3zXC1ys6Og/viewform?embedded=true"
              width="700"
              height="520"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full max-w-2xl rounded-xl shadow-lg"
              title="Formulário de Inscrição"
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600">
              Dúvidas? Fale conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Email */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                ✉️
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:eventos@wilsonsons.com.br" className="hover:text-blue-600 transition-colors">
                  eventos@wilsonsons.com.br
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                📞
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Telefone</h3>
              <p className="text-gray-600">
                <a href="tel:+551140000000" className="hover:text-blue-600 transition-colors">
                  +55 (11) 4000-0000
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                📍
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Localização</h3>
              <p className="text-gray-600">
                São Paulo, SP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">WS</span>
                </div>
                <span className="font-display font-bold text-lg">Wilson Sons</span>
              </div>
              <p className="text-blue-100">
                Líder em soluções marítimas e portuárias, promovendo inovação e excelência na indústria naval.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('registration')}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Inscrição
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 pt-8">
            <p className="text-center text-blue-100">
              Projeto desenvolvido para fins educativos na KODIE Academy
            </p>
            <p className="text-center text-blue-200 text-sm mt-2">
              © 2024 Wilson Sons. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
