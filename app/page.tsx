"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShoppingCart, Award, Truck, Shield, Phone, Mail, Clock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Pink Header Banner */}
      <section className="w-full bg-pink-400 text-white p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Diga Adeus à Queda de Cabelo</h1>
          <p className="text-sm md:text-base max-w-md uppercase">
            Novo queridinho entre as donas de casa vem fazendo sucesso contra queda de cabelos
          </p>
        </div>
      </section>

      {/* How Caplux Works */}
      <section id="como-funciona" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">Como o Caplux Age no Seu Organismo</h2>

        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-pink-500">9 Nutrientes Importados para Transformar Seu Cabelo</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">Selênio:</span> Protege as células capilares contra danos
                  oxidativos e fortalece a estrutura do cabelo.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">Biotina Premium:</span> Conhecida como vitamina da beleza,
                  estimula o crescimento capilar e fortalece os folículos.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">Vitamina C:</span> Potente antioxidante que melhora a
                  circulação no couro cabeludo e ajuda na produção de colágeno.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">Vitamina B:</span> Complexo essencial para o metabolismo
                  celular e saúde dos folículos capilares.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">Ferro:</span> Fundamental para o transporte de oxigênio
                  aos folículos capilares, prevenindo a queda por deficiência.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">Zinco:</span> Regula a produção de sebo e auxilia na
                  regeneração do tecido capilar.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">Metilsulfonilmetano (MSM):</span> Composto de enxofre que
                  fortalece a queratina e promove o crescimento de fios mais resistentes.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">L-Prolina:</span> Aminoácido essencial para a formação de
                  colágeno e fortalecimento da estrutura capilar.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">L-Cistina:</span> Aminoácido rico em enxofre que forma as
                  pontes de dissulfeto na queratina, proteína principal do cabelo.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-pink-500">Pantotentato de Cálcio:</span> Forma de vitamina B5 que
                  estimula o crescimento capilar e previne o envelhecimento dos fios.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold text-pink-500 mb-2">CAPLUX</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pote1%20%281%29-y3KyCRLGKufgQT6xirJcitbgNctpXx.png"
                alt="Caplux - Suplemento Alimentar em Cápsulas"
                width={300}
                height={450}
                priority
                className="object-contain mx-auto"
              />
            </div>

            <Button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg uppercase"
              onClick={() => (window.location.href = "#ofertas")}
            >
              Quero Experimentar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section id="qualidade" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">Qualidade Garantida</h2>

        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-pink-500">Veja como é a fabricação dos nossos produtos</h3>

            <p className="text-gray-700">
              Cada cápsula do Caplux é produzida com os mais rigorosos padrões de qualidade em laboratório certificado
              pela ANVISA.
            </p>

            <p className="text-gray-700">
              Utilizamos apenas ingredientes premium importados, garantindo a máxima eficácia no combate à queda de
              cabelo.
            </p>
          </div>

          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4">
            <div className="relative w-full aspect-video flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">Vídeo de fabricação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-12 px-4 max-w-6xl mx-auto bg-pink-50">
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">
          Veja os resultados de pessoas que viveram a transformação com o Caplux
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-center mb-3">
              <div className="grid grid-cols-2 gap-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2859%29-C2UEaUvPKr6S0Medwf8R5RdbAjN7Oj.png"
                  alt="Antes - Mariana"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2859%29-C2UEaUvPKr6S0Medwf8R5RdbAjN7Oj.png"
                  alt="Depois - Mariana"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-medium text-center text-pink-500">Mariana, 37 anos</h3>
            <p className="text-sm text-center text-gray-600">
              "Após 2 meses usando Caplux, meu couro parou de cair e novos fios começaram a nascer!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-center mb-3">
              <div className="grid grid-cols-2 gap-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2860%29-c21pOgPKRNSvNMgMh1cSlP7PafeFXz.png"
                  alt="Antes - Carla"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2860%29-c21pOgPKRNSvNMgMh1cSlP7PafeFXz.png"
                  alt="Depois - Carla"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-medium text-center text-pink-500">Carla, 42 anos</h3>
            <p className="text-sm text-center text-gray-600">
              "Minha autoestima voltou! Meu cabelo está mais forte e volumoso do que nunca!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-center mb-3">
              <div className="grid grid-cols-2 gap-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2861%29-mqKeLRPQbRLQTLV7H8HI9DtHKkpZ7y.png"
                  alt="Antes - Patricia"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2861%29-mqKeLRPQbRLQTLV7H8HI9DtHKkpZ7y.png"
                  alt="Depois - Patricia"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-medium text-center text-pink-500">Patricia, 35 anos</h3>
            <p className="text-sm text-center text-gray-600">
              "Depois de tentar vários produtos, finalmente encontrei algo que realmente funciona!"
            </p>
          </div>
        </div>
      </section>

      {/* Pediu, Chegou Section */}
      <section id="entregas" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">Pediu, Chegou!</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Customer 1 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-center mb-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vanessadepoimento%20.jpg-yXMFCg5zW726js03vO9Eq4Hl57AsYv.jpeg"
                alt="Cliente com Caplux"
                width={250}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Customer 2 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-center mb-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yasmindepoimento.jpg-GCTxz7lkNMdN5Fira7Izaz7Wuxwm24.jpeg"
                alt="Cliente com Caplux"
                width={250}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Customer 3 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-center mb-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2016.43.01-7nxr9qAwdxWK5aJV3dGT2kaREjelMK.jpeg"
                alt="Cliente com Caplux"
                width={250}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Truck className="h-5 w-5 text-pink-500" />
            Entregamos para todo o Brasil com total segurança e discrição
          </p>
        </div>
      </section>

      {/* Formulation Section */}
      <section id="formula" className="py-12 px-4 max-w-6xl mx-auto bg-pink-50">
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">Conheça a formulação do Caplux</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="space-y-4">
            <p className="text-gray-700">
              O Caplux foi desenvolvido com uma combinação exclusiva de ingredientes naturais e nutrientes essenciais
              para a saúde capilar.
            </p>
            <p className="text-gray-700">
              Nossa fórmula é livre de hormônios e substâncias químicas agressivas, sendo segura para uso contínuo.
            </p>
            <p className="text-gray-700">
              Cada cápsula contém a dosagem exata dos nutrientes importados, cientificamente comprovados para combater a
              queda de cabelo e estimular o crescimento de novos fios.
            </p>
          </div>
        </div>

        {/* 90-Day Guarantee */}
        <div id="garantia" className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-500">Garantia de 90 dias</h3>
              <p className="text-gray-700">
                Estamos tão confiantes nos resultados do Caplux que oferecemos uma garantia incondicional de 90 dias.
              </p>
              <p className="text-gray-700">
                Se você não ficar satisfeita com os resultados, basta entrar em contato conosco e devolveremos 100% do
                seu dinheiro, sem perguntas.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microagulhamento.png-4W4pkUul7BZSnCG48stnMucq7kKgMc.png"
                alt="Caplux com Selo de Garantia 90 Dias"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ofertas" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">Escolha sua oferta com desconto</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Package 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pote1%20%281%29-y3KyCRLGKufgQT6xirJcitbgNctpXx.png"
                alt="1 Pote de Caplux"
                width={150}
                height={200}
                className="object-contain"
              />
              <h3 className="text-lg font-medium text-pink-500 mt-4">Tratamento Inicial</h3>
              <p className="text-sm text-gray-600">1 Pote de Caplux</p>
              <p className="text-2xl font-bold text-pink-500 mt-2">R$ 197,00</p>
            </div>
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => window.open("https://app.keedpay.com.br/checkout/M25ASgqq68u", "_blank")}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> COMPRAR AGORA
            </Button>
          </div>

          {/* Package 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pote3-lu0VfOiWv3t2BCZUPwH9FsI4MFr6xD.png"
                alt="3 Potes de Caplux"
                width={250}
                height={200}
                className="object-contain"
              />
              <h3 className="text-lg font-medium text-pink-500 mt-4">Tratamento Recomendado</h3>
              <p className="text-sm text-gray-600">3 Potes de Caplux</p>
              <p className="text-2xl font-bold text-pink-500 mt-2">R$ 397,00</p>
            </div>
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => window.open("https://app.keedpay.com.br/checkout/VlAYMSrnAiq", "_blank")}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> COMPRAR AGORA
            </Button>
          </div>

          {/* Package 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
            <div className="absolute -top-3 right-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
              MAIS POPULAR
            </div>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2857%29-LFDEisybDi7HHM6KK7qyHTlLIcnvnN.png"
                alt="5 Potes de Caplux"
                width={250}
                height={200}
                className="object-contain"
              />
              <h3 className="text-lg font-medium text-pink-500 mt-4">Tratamento Intensivo</h3>
              <p className="text-sm text-gray-600">5 Potes de Caplux</p>
              <p className="text-2xl font-bold text-pink-500 mt-2">R$ 597,00</p>
            </div>
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => window.open("https://app.keedpay.com.br/checkout/Sf546LYWUO8", "_blank")}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> COMPRAR AGORA
            </Button>
          </div>

          {/* Package 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
            <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              MELHOR CUSTO-BENEFÍCIO
            </div>
            <div className="flex flex-col items-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%2858%29-w63Wd7lPo8NPuci76AZGdoLoTCJ89Y.png"
                alt="6 Potes de Caplux"
                width={250}
                height={200}
                className="object-contain"
              />
              <h3 className="text-lg font-medium text-pink-500 mt-4">Tratamento Completo</h3>
              <p className="text-sm text-gray-600">6 Potes de Caplux</p>
              <p className="text-2xl font-bold text-pink-500 mt-2">R$ 697,00</p>
            </div>
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => window.open("https://app.keedpay.com.br/checkout/hb3zvS6Qon8", "_blank")}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> COMPRAR AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto bg-pink-50">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-pink-500 mb-6">
            O espelho se tornou seu inimigo? Entendemos sua dor...
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Você já sentiu aquele aperto no coração ao ver tufos de cabelo na escova? Ou o desespero ao perceber que
              seu rabo de cavalo está cada vez mais fino?
            </p>

            <p>
              A queda de cabelo não é apenas um problema estético. É uma ferida emocional que afeta sua autoestima, sua
              confiança e até mesmo sua vida social.
            </p>

            <p>
              Muitas mulheres nos relatam que deixaram de ir a eventos, que evitam fotos, como sentem vergonha ao olhar
              no espelho... Tudo por causa de queda de cabelo que parece não ter solução.
            </p>

            <p>
              Você já tentou diversos produtos que prometiam resultados milagrosos, mas só te deixaram com menos
              dinheiro e a mesma frustração?
            </p>

            <p>
              O problema é que a maioria dos tratamentos convencionais apenas mascara o problema, sem tratar a causa
              real da queda.
            </p>

            <p className="font-medium text-pink-500">Foi pensando em mulheres como você que desenvolvemos o Caplux.</p>

            <p>
              Nossa fórmula exclusiva com nutrientes importados age diretamente na raiz do problema, nutrindo os
              folículos capilares e criando o ambiente perfeito para o crescimento de novos fios.
            </p>

            <p>
              Imagine acordar todas as manhãs e ver seu cabelo mais forte, mais volumoso e, principalmente, parando de
              cair no ralo do chuveiro.
            </p>

            <p>
              Imagine recuperar a confiança para usar o penteado que quiser, para tirar fotos sem preocupação, para se
              sentir bonita novamente.
            </p>

            <p className="font-medium">
              Isso não é apenas um sonho. É a realidade de milhares de mulheres que já experimentaram o Caplux.
            </p>

            <p>E agora é a sua vez de transformar sua história.</p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg uppercase"
              onClick={() => (window.location.href = "#ofertas")}
            >
              Quero Transformar Meu Cabelo Agora
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="duvidas" className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">Dúvidas Frequentes</h2>

        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-pink-500 mb-2">Funciona mesmo?</h3>
            <p className="text-gray-700">
              Sim! O Caplux foi desenvolvido após anos de pesquisas e testes clínicos. Nossa fórmula exclusiva com
              nutrientes importados age diretamente nos folículos capilares, combatendo a queda e estimulando o
              crescimento de novos fios. Milhares de mulheres já comprovaram a eficácia do tratamento.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-pink-500 mb-2">Quando vejo resultados?</h3>
            <p className="text-gray-700">
              Os primeiros resultados começam a aparecer entre 15 e 30 dias de uso contínuo, com a redução significativa
              da queda. Entre 60 e 90 dias, você já poderá notar o crescimento de novos fios e um aumento na densidade
              capilar. Para resultados completos, recomendamos o tratamento de 3 a 6 meses.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-pink-500 mb-2">Vai chegar?</h3>
            <p className="text-gray-700">
              Com certeza! Trabalhamos com empresas de logística de confiança que entregam em todo o Brasil. Após a
              confirmação do pagamento, seu pedido é enviado em até 24 horas úteis e você recebe um código de
              rastreamento para acompanhar a entrega. O prazo médio é de 3 a 7 dias úteis, dependendo da sua região.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-pink-500 mb-2">Posso confiar?</h3>
            <p className="text-gray-700">
              Absolutamente! Somos uma empresa séria, com CNPJ ativo e todos os registros necessários. Nosso produto é
              fabricado em laboratório certificado pela ANVISA e seguimos rigorosos padrões de qualidade. Além disso,
              oferecemos garantia de 90 dias: se não estiver satisfeita, devolvemos seu dinheiro.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-pink-500 mb-2">Tem efeitos colaterais?</h3>
            <p className="text-gray-700">
              O Caplux é formulado com ingredientes naturais e não contém hormônios ou substâncias químicas agressivas.
              Por isso, não causa efeitos colaterais na grande maioria das usuárias. Como todo suplemento, recomendamos
              consultar um médico caso você esteja grávida, amamentando ou em tratamento de alguma condição específica.
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-pink-500 mb-2">É aprovado pela Anvisa?</h3>
            <p className="text-gray-700">
              Sim! O Caplux é um suplemento alimentar devidamente registrado na ANVISA (Agência Nacional de Vigilância
              Sanitária). Nosso produto segue todas as normas e regulamentações exigidas para garantir sua segurança e
              eficácia.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 px-4 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Transforme seu cabelo e sua autoestima hoje mesmo!</h2>
          <p className="mb-8">
            Junte-se às milhares de mulheres que já recuperaram a beleza e a confiança com o Caplux.
          </p>
          <Button
            className="bg-white text-pink-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg uppercase"
            onClick={() => (window.location.href = "#ofertas")}
          >
            Quero Experimentar Com Desconto
          </Button>
        </div>
      </section>

      {/* Footer with Trust Badges */}
      <footer id="rodape" className="py-8 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-10 w-10 text-pink-500 mb-2" />
              <h3 className="text-sm font-medium">Compra Segura</h3>
              <p className="text-xs text-gray-600">Site 100% seguro</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-pink-500 mb-2" />
              <h3 className="text-sm font-medium">Garantia de 90 dias</h3>
              <p className="text-xs text-gray-600">Satisfação garantida</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="h-10 w-10 text-pink-500 mb-2" />
              <h3 className="text-sm font-medium">Entrega para todo Brasil</h3>
              <p className="text-xs text-gray-600">Rápido e discreto</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShoppingCart className="h-10 w-10 text-pink-500 mb-2" />
              <h3 className="text-sm font-medium">Formas de Pagamento</h3>
              <p className="text-xs text-gray-600">Cartão, boleto e Pix</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Sobre o Caplux</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <button onClick={() => (window.location.href = "#ingredientes")} className="hover:text-pink-500">
                      Ingredientes
                    </button>
                  </li>
                  <li>
                    <button onClick={() => (window.location.href = "#depoimentos")} className="hover:text-pink-500">
                      Depoimentos
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Ajuda</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <button onClick={() => (window.location.href = "#duvidas")} className="hover:text-pink-500">
                      Dúvidas Frequentes
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => (window.location.href = "#politica-privacidade")}
                      className="hover:text-pink-500"
                    >
                      Política de Privacidade
                    </button>
                  </li>
                  <li>
                    <button onClick={() => (window.location.href = "#termos-uso")} className="hover:text-pink-500">
                      Termos de Uso
                    </button>
                  </li>
                  <li>
                    <button onClick={() => (window.location.href = "#garantia")} className="hover:text-pink-500">
                      Garantia e Devoluções
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Contato</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-pink-500" />
                    bullcompanydigital@gmail.com
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-pink-500" />
                    (37) 99858-1957
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-pink-500" />
                    Horário: 8h às 18h, Seg a Sex
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="politica-privacidade" className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="font-medium text-gray-800 mb-4">Política de Privacidade e Termos de Uso</h3>
            <div className="text-sm text-gray-600 space-y-3">
              <p>
                Ao utilizar nosso site, você concorda com nossa política de privacidade e termos de uso. Respeitamos sua
                privacidade e protegemos seus dados pessoais.
              </p>
              <p>
                <strong>Garantia de 90 dias:</strong> Oferecemos garantia de satisfação de 90 dias para todos os nossos
                produtos. Caso não esteja satisfeito com os resultados, entre em contato conosco para solicitar o
                reembolso.
              </p>
              <p>
                <strong>Política de devolução:</strong> De acordo com o Código de Defesa do Consumidor, você tem direito
                ao arrependimento em até 7 dias após o recebimento do produto. Após este período, não realizamos
                devoluções por arrependimento, apenas por garantia de eficácia.
              </p>
              <p>
                Para solicitar a garantia, o produto deve estar em sua embalagem original, mesmo que aberto e
                parcialmente utilizado. Entre em contato com nosso suporte para iniciar o processo.
              </p>
            </div>
          </div>

          <div id="termos-uso" className="text-center text-sm text-gray-600 mt-8">
            <p>© {new Date().getFullYear()} Caplux. Todos os direitos reservados.</p>
            <p className="mt-2">
              Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook,
              a responsabilidade não é deles e sim do nosso site.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
