"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Award, CheckCircle, Clock, ShieldCheck, Tool } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Domů",
          id: "hero",
        },
        {
          name: "Služby",
          id: "services",
        },
        {
          name: "O nás",
          id: "about",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="Petr Kaňka – Žaluzie"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="35 let preciznosti ve stínění"
      description="Petr Kaňka – Žaluzie. Dodáváme a montujeme kvalitní stínicí techniku na míru pro váš domov i firmu s důrazem na dlouhou životnost."
      testimonials={[
        {
          name: "Jan Novák",
          handle: "Majitel RD",
          testimonial: "Skvělá práce a profesionální přístup. Žaluzie fungují bezchybně roky.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-holds-glue-attaches-window_1150-23996.jpg",
        },
        {
          name: "Eva Svobodová",
          handle: "Bytová jednotka",
          testimonial: "Velmi rychlá realizace a odborné poradenství. Děkuji!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-worker-factory_1303-14086.jpg",
        },
        {
          name: "Petr Černý",
          handle: "Firma",
          testimonial: "Spolehlivý partner pro naše kanceláře. Doporučuji.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/glass-broken-from-house-by-accident-man-checking-repair_138670-205.jpg",
        },
        {
          name: "Lucie Bílá",
          handle: "Majitelka bytu",
          testimonial: "Designově čisté řešení, které skvěle stíní. Naprostá spokojenost.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-engineer-with-plans_23-2148480366.jpg",
        },
        {
          name: "Tomáš Marek",
          handle: "Projektový manažer",
          testimonial: "Velmi kvalitní materiály a rychlá montáž. Vše proběhlo dle dohody.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/building-construction-worker-site_23-2149124298.jpg?_wi=1",
        },
      ]}
      buttons={[
        {
          text: "Nezávazná poptávka",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/building-construction-worker-site_23-2149124298.jpg?_wi=2"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/building-construction-worker-site_23-2149124298.jpg",
          alt: "Jan Novák",
        },
        {
          src: "http://img.b2bpic.net/free-photo/wooden-blinds_1203-1112.jpg",
          alt: "Eva Svobodová",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-building-with-bricks-stone_23-2148252830.jpg",
          alt: "Petr Černý",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bridesmaids-with-bride-dressed-silky-nightwear-are-smelling-wedding-bouquet-scent_8353-11167.jpg",
          alt: "Lucie Bílá",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-couple-posing-streets-city-love-tenderness_1296-820.jpg",
          alt: "Tomáš Marek",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "35 Let tradice",
          icon: Award,
        },
        {
          type: "text-icon",
          text: "Montáž na míru",
          icon: Tool,
        },
        {
          type: "text-icon",
          text: "Odborné poradenství",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Kvalitní materiály",
          icon: CheckCircle,
        },
        {
          type: "text-icon",
          text: "Záruka životnosti",
          icon: Clock,
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Interiérové žaluzie",
          description: "Klasické i moderní řešení pro zastínění interiéru.",
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-blinds_1203-1112.jpg",
          buttonIcon: "ArrowRight",
        },
        {
          title: "Exteriérové žaluzie",
          description: "Efektivní ochrana proti přehřívání domu.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-building-with-bricks-stone_23-2148252830.jpg",
          buttonIcon: "ArrowRight",
        },
        {
          title: "Rolety den/noc",
          description: "Variabilní regulace světla podle vašich potřeb.",
          imageSrc: "http://img.b2bpic.net/free-photo/bridesmaids-with-bride-dressed-silky-nightwear-are-smelling-wedding-bouquet-scent_8353-11167.jpg",
          buttonIcon: "ArrowRight",
        },
        {
          title: "Markýzy na míru",
          description: "Příjemné stínění vaší terasy pro letní pohodu.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-couple-posing-streets-city-love-tenderness_1296-820.jpg",
          buttonIcon: "ArrowRight",
        },
      ]}
      title="Naše služby"
      description="Nabízíme komplexní řešení pro stínění vašeho interiéru i exteriéru."
    />
  </div>

  <div id="benefits" data-section="benefits">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",
          value: "35+",
          title: "Let zkušeností",
          items: [
            "Tradice od roku 1989",
            "Ověřené postupy",
            "Stovky realizací",
          ],
        },
        {
          id: "2",
          value: "100%",
          title: "Individuální přístup",
          items: [
            "Zaměření na míru",
            "Profesionální návrh",
            "Osobní konzultace",
          ],
        },
        {
          id: "3",
          value: "Kvalita",
          title: "Materiály",
          items: [
            "Dlouhá životnost",
            "Kvalitní komponenty",
            "Odolné povrchy",
          ],
        },
      ]}
      title="Proč si vybrat nás"
      description="Záruka kvality a léty prověřené zkušenosti."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="O nás"
      title="Petr Kaňka – Žaluzie"
      description="Firma působící na trhu více než 35 let. Naším cílem je spokojený zákazník, který se k nám rád vrací pro další služby a servis."
      subdescription="Ke každé zakázce přistupujeme s maximální precizností a zodpovědností. Ať už jde o malý byt nebo firemní budovu, kvalita je u nás na prvním místě."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/male-with-skipping-rope-neck_23-2148241592.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="process" data-section="process">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Kontaktování",
          content: "Stačí zavolat nebo napsat nezávaznou poptávku prostřednictvím formuláře.",
        },
        {
          id: "2",
          title: "Konzultace a zaměření",
          content: "Domluvíme si termín, přijedeme k vám, vše odborně zaměříme a navrhneme optimální řešení.",
        },
        {
          id: "3",
          title: "Realizace",
          content: "Po odsouhlasení ceny provedeme montáž v dohodnutém termínu s důrazem na čistotu práce.",
        },
      ]}
      title="Jak probíhá spolupráce"
      description="Jednoduchý proces, který vede k vaší spokojenosti."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Kontakt"
      title="Máte dotaz nebo zájem o poptávku?"
      description="Ozveme se vám zpět v co nejkratším čase. Zavolejte nám na +420 123 456 789 nebo napište na info@kankazaluzie.cz"
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-couple-with-plans_23-2148889742.jpg"
      mediaAnimation="slide-up"
      buttonText="Odeslat poptávku"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Petr Kaňka – Žaluzie"
      leftLink={{
        text: "© 2024 Všechna práva vyhrazena",
        href: "#",
      }}
      rightLink={{
        text: "GDPR",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
