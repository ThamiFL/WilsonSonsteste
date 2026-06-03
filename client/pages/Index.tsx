import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, AlertCircle, CheckCircle, Users, Calendar, MapPin } from 'lucide-react';

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
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 via-blue-25 to-white">
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
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 text-lg"
              >
                🎯 Inscrever-se Agora
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>

            {/* Right - Ship Illustration */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="relative w-full max-w-md mx-auto">
                {/* Water waves background */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-200 to-transparent rounded-full blur-xl opacity-40"></div>

                {/* Ship SVG Illustration */}
                <svg
                  viewBox="0 0 400 300"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-lg animate-float"
                >
                  {/* Water */}
                  <defs>
                    <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#0369a1', stopOpacity: 0.6 }} />
                    </linearGradient>
                  </defs>

                  {/* Ship Hull */}
                  <path
                    d="M 80 180 Q 120 140 200 140 Q 280 140 320 180 L 340 200 Q 330 210 70 210 Q 60 200 80 180 Z"
                    fill="#1a3a52"
                    stroke="#0f2438"
                    strokeWidth="2"
                  />

                  {/* Ship Bottom/Keel */}
                  <ellipse cx="200" cy="210" rx="135" ry="20" fill="#0f2438" opacity="0.6" />

                  {/* Cabin/Bridge */}
                  <rect x="170" y="110" width="60" height="45" fill="#2c5aa0" stroke="#1a3a52" strokeWidth="2" rx="4" />

                  {/* Cabin Window */}
                  <circle cx="200" cy="130" r="6" fill="#87ceeb" />

                  {/* Smokestacks */}
                  <rect x="185" y="85" width="10" height="30" fill="#d4a574" stroke="#a0826d" strokeWidth="1" />
                  <rect x="205" y="85" width="10" height="30" fill="#d4a574" stroke="#a0826d" strokeWidth="1" />

                  {/* Smoke */}
                  <circle cx="190" cy="75" r="6" fill="#bfdbfe" opacity="0.7" />
                  <circle cx="195" cy="70" r="5" fill="#bfdbfe" opacity="0.6" />
                  <circle cx="210" cy="75" r="6" fill="#bfdbfe" opacity="0.7" />
                  <circle cx="215" cy="70" r="5" fill="#bfdbfe" opacity="0.6" />

                  {/* Mast Main */}
                  <line x1="200" y1="100" x2="200" y2="30" stroke="#8b7355" strokeWidth="2" />

                  {/* Sails */}
                  <path
                    d="M 200 40 L 280 80 L 200 90 Z"
                    fill="#e0e7ff"
                    stroke="#818cf8"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                  <path
                    d="M 200 50 L 140 85 L 200 100 Z"
                    fill="#f0f9ff"
                    stroke="#0284c7"
                    strokeWidth="1"
                    opacity="0.7"
                  />

                  {/* Flag */}
                  <rect x="198" y="25" width="18" height="12" fill="#2c5aa0" stroke="#1a3a52" strokeWidth="1" />
                  <circle cx="220" cy="31" r="3" fill="#fbbf24" />

                  {/* Anchor Chain */}
                  <line x1="100" y1="190" x2="100" y2="240" stroke="#a0aec0" strokeWidth="2" strokeDasharray="4,4" />

                  {/* Waves */}
                  <path d="M 0 240 Q 50 230 100 240 T 200 240 T 300 240 T 400 240" stroke="#0369a1" strokeWidth="2" fill="none" opacity="0.5" />
                  <path d="M 0 255 Q 50 245 100 255 T 200 255 T 300 255 T 400 255" stroke="#0ea5e9" strokeWidth="1.5" fill="none" opacity="0.4" />
                </svg>

                {/* Floating accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-300 rounded-full opacity-10 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="px-4 py-6 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex-1">
              <p className="text-lg md:text-xl font-semibold">⏰ Inscrições Abertas até 31 de Dezembro</p>
              <p className="text-sm md:text-base text-red-100 mt-1">Vagas limitadas - não perca essa oportunidade!</p>
            </div>
            <button
              onClick={() => scrollToSection('registration')}
              className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Inscrever Agora →
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-4">
              Conheça a Wilson Sons
            </h2>
            <p className="text-lg text-gray-600">
              Assista ao vídeo de apresentação do evento e da empresa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/qaum5s9GaGw?list=PLWyZ9ag5XaAJQlxp3_ZG2eQa4hV3X4v4t"
                title="Wilson Sons - Apresentação do Evento"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Highlight 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-blue-900 mb-2">500+</h3>
              <p className="text-gray-600">Participantes esperados</p>
            </div>

            {/* Highlight 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-blue-900 mb-2">8 Horas</h3>
              <p className="text-gray-600">De conteúdo e networking</p>
            </div>

            {/* Highlight 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-blue-900 mb-2">On-Site</h3>
              <p className="text-gray-600">Visita às instalações portuárias</p>
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

      {/* Safety Rules Section */}
      <section id="safety" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-10 h-10 text-blue-600 mr-3" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900">
                Segurança e Regras
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Informações importantes sobre vestimenta adequada e equipamentos de proteção individual
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Clothing Section */}
            <div className="p-8 bg-white rounded-2xl border border-blue-200 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                  👔
                </div>
                <h3 className="text-2xl font-display font-bold text-blue-900">
                  Vestimenta Adequada
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Calçado fechado:</strong> Sapatos ou botinas de segurança com solado antiderrapante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Calças compridas:</strong> Preferencialmente em tecido resistente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Camiseta ou blusa:</strong> De manga comprida é recomendado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Evitar:</strong> Saia, shorts, sandálias e roupas soltas</span>
                </li>
              </ul>
            </div>

            {/* PPE Section */}
            <div className="p-8 bg-white rounded-2xl border border-orange-200 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4">
                  🦺
                </div>
                <h3 className="text-2xl font-display font-bold text-blue-900">
                  Equipamentos de Proteção
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Capacete:</strong> Será fornecido pela Wilson Sons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Coletes de segurança:</strong> Obrigatórios em áreas portuárias</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Óculos de proteção:</strong> Fornecidos quando necessário</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Protetor auditivo:</strong> Disponível em áreas de alto ruído</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Alert */}
          <div className="mt-12 max-w-4xl mx-auto p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-red-900 mb-2">Regras de Segurança Essenciais</h4>
                <ul className="space-y-2 text-red-800">
                  <li>• O não cumprimento das regras de segurança pode resultar em exclusão do evento</li>
                  <li>• Siga todas as orientações dos coordenadores de segurança durante a visita</li>
                  <li>• Não execute ações não autorizadas em área de risco</li>
                  <li>• Reporte imediatamente qualquer situação perigosa aos responsáveis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section - PROMINENT */}
      <section id="registration" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white font-medium text-sm mb-4 backdrop-blur-sm">
              ✨ Últimas Vagas Disponíveis
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Inscreva-se Agora
            </h2>
            <p className="text-xl text-blue-100 mb-2">
              Vagas limitadas - não perca essa oportunidade
            </p>
            <div className="inline-block px-6 py-3 bg-red-500 text-white rounded-full text-lg font-bold animate-pulse">
              ⏰ Inscrições abertas até 31 de Dezembro
            </div>
          </div>

          {/* Google Form Iframe */}
          <div className="flex justify-center bg-white rounded-2xl p-2 shadow-2xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScgebX0wuS7MkvPWLXGtq2HkAmVJ5mCus9ioMhE3zXC1ys6Og/viewform?embedded=true"
              width="700"
              height="520"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full max-w-2xl rounded-xl"
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
            <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors">
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
            <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors">
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
            <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors">
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
