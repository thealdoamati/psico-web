declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function gtagSendEvent(url: string): boolean {
  var callback = function () {
    if (typeof url === "string") {
      window.location.href = url as unknown as string;
    }
  };
  window.gtag("event", "conversion_event_phone_call_lead", {
    event_callback: callback,
    event_timeout: 2000,
    // <event_parameters>
  });
  return false;
}

export const handleAgendarConsultaClick = () => {
  gtagSendEvent("https://api.whatsapp.com/send/?phone=%2B5511956558397&text=Ol%C3%A1!+Gostaria+de+marcar+uma+consulta+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1");
};

export const handleReceberLigacaoClick = () => {
  gtagSendEvent("https://api.whatsapp.com/send/?phone=%2B5511956558397&text=Ol%C3%A1!+Gostaria+de+receber+ligação+para+marcar+uma+consulta+com+a+Psic%C3%B3loga+Hellen.&utm_source=Chat+site&utm_medium=Whatsapp&utm_campaign=Site+hellen+v1");
};
