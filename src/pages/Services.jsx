import React from "react";
import { Helmet } from "react-helmet";
import { PixelCard } from "../components/PixelCard";
import { PixelButton } from "../components/PixelButton";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Serviços | Huolong Apps</title>
        <meta
          name="description"
          content="Serviços de desenvolvimento mobile Android e iOS."
        />
      </Helmet>

      <h1 className="font-pixel text-[16px] text-brandMagenta">SERVIÇOS</h1>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <PixelCard>
          <h2 className="font-pixel text-[12px]">DESENVOLVIMENTO</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>App do zero (MVP → produção)</li>
            <li>Novas features e refactor</li>
            <li>Publicação Android / iOS</li>
          </ul>
        </PixelCard>

        <PixelCard>
          <h2 className="font-pixel text-[12px]">BACKEND & DADOS</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>Firebase (Auth/Firestore/Storage)</li>
            <li>Integração com APIs</li>
            <li>Node.js (Express/Nest)</li>
          </ul>
        </PixelCard>

        <PixelCard>
          <h2 className="font-pixel text-[12px]">QUALIDADE</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>Padronização e arquitetura</li>
            <li>Testes (quando faz sentido)</li>
            <li>Observabilidade (Crash/Analytics)</li>
          </ul>
        </PixelCard>

        <PixelCard>
          <h2 className="font-pixel text-[12px]">PAGAMENTOS</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>Stripe (assinatura / checkout)</li>
            <li>Paywall e controle de plano</li>
            <li>Webhooks e validação</li>
          </ul>
        </PixelCard>
      </div>

      <div className="mt-8">
        <PixelButton as="a" href="/contact" variant="primary">
          FALAR AGORA
        </PixelButton>
      </div>
    </>
  );
}
