import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import SlideVideo from "@/components/SlideVideo";
import { useGlitterEffect, useClickGlitter } from "@/hooks/useGlitter";
import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, ShoppingBag, TreePine, Heart, Sparkles } from "lucide-react";

const Index = () => {
  // Ativa o efeito de glitter no mouse e no clique
  useGlitterEffect();
  useClickGlitter();

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      {/* Menu de navegação fixo */}
      <Navbar />

      {/* ===== SEÇÃO 1: INÍCIO ===== */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center relative px-4"
      >
        {/* Círculos decorativos de fundo */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="text-center z-10 max-w-3xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-muted border border-secondary/30 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Trabalho Escolar • 2º Ano EM</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          >
            <span className="text-primary">Futuro</span>{" "}
            <span className="text-foreground">Sustentável</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 font-body max-w-xl mx-auto"
          >
            Como podemos contribuir para um planeta mais saudável? 
            Descubra as ações que fazem a diferença. 🌍
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg text-lg animate-pulse-glow"
          >
            Explorar ↓
          </motion.button>

          {/* Vídeo do slide 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <SlideVideo src="/videos/1.mp4" title="Slide 1 - Introdução" />
          </motion.div>
        </div>
      </section>

      {/* ===== SEÇÃO 2: O PROBLEMA ===== */}
      <Section id="problema">
        <div className="flex items-center gap-3 mb-8">
          <Droplets className="w-8 h-8 text-primary" />
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary">
            O Problema Ambiental
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ContentCard>
            <h3 className="font-display font-bold text-xl text-secondary mb-4">
              Desafios Globais
            </h3>
            <ul className="space-y-3 text-muted-foreground font-body">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Aquecimento global e mudanças climáticas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Poluição dos oceanos e desmatamento
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Escassez de recursos naturais
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Extinção de espécies e perda de biodiversidade
              </li>
            </ul>
          </ContentCard>
          <ContentCard delay={0.2}>
            <SlideVideo src="/videos/2.mp4" title="Slide 2 - O Problema" />
          </ContentCard>
        </div>
      </Section>

      {/* ===== SEÇÃO 3: SOLUÇÕES ===== */}
      <Section id="solucoes">
        <div className="flex items-center gap-3 mb-8">
          <Leaf className="w-8 h-8 text-accent" />
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary">
            Soluções Sustentáveis
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ContentCard>
            <SlideVideo src="/videos/3.mp4" title="Slide 3 - Soluções" />
          </ContentCard>
          <ContentCard delay={0.2}>
            <h3 className="font-display font-bold text-xl text-secondary mb-4">
              O Que Podemos Fazer
            </h3>
            <ul className="space-y-3 text-muted-foreground font-body">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                Reduzir, reutilizar e reciclar materiais
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                Adotar energias renováveis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                Preservar áreas verdes e florestas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                Consumir de forma consciente
              </li>
            </ul>
          </ContentCard>
        </div>
      </Section>

      {/* ===== SEÇÃO 4: ENERGIA LIMPA ===== */}
      <Section id="energia">
        <div className="flex items-center gap-3 mb-8">
          <Sun className="w-8 h-8 text-primary" />
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary">
            Energia Limpa
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <ContentCard>
            <div className="text-center">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="font-display font-bold text-lg text-secondary mb-2">Solar</h3>
              <p className="text-muted-foreground text-sm font-body">
                Energia abundante e renovável captada através de painéis fotovoltaicos.
              </p>
            </div>
          </ContentCard>
          <ContentCard delay={0.15}>
            <div className="text-center">
              <div className="text-4xl mb-3">💨</div>
              <h3 className="font-display font-bold text-lg text-secondary mb-2">Eólica</h3>
              <p className="text-muted-foreground text-sm font-body">
                Turbinas que transformam a força do vento em eletricidade limpa.
              </p>
            </div>
          </ContentCard>
          <ContentCard delay={0.3}>
            <div className="text-center">
              <div className="text-4xl mb-3">💧</div>
              <h3 className="font-display font-bold text-lg text-secondary mb-2">Hidrelétrica</h3>
              <p className="text-muted-foreground text-sm font-body">
                Aproveitamento da força das águas para gerar energia sustentável.
              </p>
            </div>
          </ContentCard>
        </div>
        <ContentCard>
          <SlideVideo src="/videos/4.mp4" title="Slide 4 - Energia Limpa" />
        </ContentCard>
      </Section>

      {/* ===== SEÇÃO 5: CONSUMO CONSCIENTE ===== */}
      <Section id="consumo">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-8 h-8 text-accent" />
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary">
            Consumo Consciente
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ContentCard>
            <h3 className="font-display font-bold text-xl text-secondary mb-4">
              Repense Seus Hábitos
            </h3>
            <ul className="space-y-3 text-muted-foreground font-body">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">♻️</span>
                Compre apenas o necessário
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">🛍️</span>
                Prefira produtos locais e orgânicos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">📦</span>
                Evite embalagens descartáveis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">👕</span>
                Doe roupas e objetos que não usa mais
              </li>
            </ul>
          </ContentCard>
          <ContentCard delay={0.2}>
            <SlideVideo src="/videos/5.mp4" title="Slide 5 - Consumo Consciente" />
          </ContentCard>
        </div>
      </Section>

      {/* ===== SEÇÃO 6: AÇÃO LOCAL ===== */}
      <Section id="acao">
        <div className="flex items-center gap-3 mb-8">
          <TreePine className="w-8 h-8 text-accent" />
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary">
            Ação Local
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ContentCard>
            <SlideVideo src="/videos/6.mp4" title="Slide 6 - Ação Local" />
          </ContentCard>
          <ContentCard delay={0.2}>
            <h3 className="font-display font-bold text-xl text-secondary mb-4">
              Comece na Sua Comunidade
            </h3>
            <ul className="space-y-3 text-muted-foreground font-body">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">🌱</span>
                Plante árvores no seu bairro
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">🚲</span>
                Use transporte sustentável
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">💡</span>
                Economize água e energia em casa
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📢</span>
                Compartilhe conhecimento com amigos
              </li>
            </ul>
          </ContentCard>
        </div>
      </Section>

      {/* ===== SEÇÃO 7: CONCLUSÃO ===== */}
      <Section id="conclusao">
        <div className="text-center max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6 animate-float" />
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-6">
            O Futuro Está em Nossas Mãos
          </h2>
          <p className="text-lg text-muted-foreground font-body mb-8">
            Cada pequena ação conta. Juntos, podemos construir um mundo mais sustentável
            para as próximas gerações. A mudança começa agora, começa com você! 🌍💚
          </p>
          <ContentCard className="mb-8">
            <SlideVideo src="/videos/7.mp4" title="Slide 7 - Conclusão" />
          </ContentCard>

          {/* Botão interativo com mensagem */}
          <InteractiveButton />

          <p className="text-sm text-muted-foreground mt-12 font-body">
            Feito com 💜 para o trabalho escolar • 2º Ano do Ensino Médio
          </p>
        </div>
      </Section>
    </div>
  );
};

// Botão que muda de cor e mostra uma mensagem ao clicar
const InteractiveButton = () => {
  const messages = [
    "🌱 Você é incrível! Continue cuidando do planeta!",
    "💜 Pequenas ações fazem grandes diferenças!",
    "🌍 O futuro sustentável começa com você!",
    "✨ Juntos somos mais fortes pela natureza!",
    "♻️ Reciclar é um ato de amor pelo mundo!",
  ];

  const handleClick = () => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const toast = document.createElement("div");
    toast.textContent = msg;
    toast.style.cssText = `
      position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%);
      background: linear-gradient(135deg, hsl(292,91%,58%), hsl(258,90%,66%));
      color: white; padding: 16px 32px; border-radius: 12px; font-family: Montserrat;
      font-weight: 700; font-size: 16px; z-index: 9999; box-shadow: 0 0 30px hsl(292,91%,58%,0.5);
      animation: glitter-fall 2s ease-out forwards; pointer-events: none;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="bg-secondary text-secondary-foreground font-display font-bold px-8 py-4 rounded-lg text-lg animate-pulse-glow"
    >
      ✨ Clique para uma mensagem especial! ✨
    </motion.button>
  );
};

export default Index;
