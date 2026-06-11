export interface Loja {
  nome: string;
  endereco: string;
  whatsappUrl: string;
  mapsUrl: string;
}

export const lojasData: Loja[] = [
  {
    nome: "Ocidental - Friburgo",
    endereco: "Shopping Ocidental, Friburgo",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5561999095880&text&type=phone_number&app_absent=0",
    mapsUrl: "https://www.google.com/search?sca_esv=110a515e0d96392e&sxsrf=ANbL-n6wRRLP_hwutOD0g2ePDG0zST4P1g:1773169555185&kgmid=/g/11xmxphh3y&q=Discarada+Acess%C3%B3rios+-+Friburgo&shndl=30&source=sh/x/loc/uni/m1/1&kgs=e70cb7112cb39152&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/uni/m1/1",
  },
  {
    nome: "Gama",
    endereco: "Gama, DF",
    whatsappUrl: "https://api.whatsapp.com/message/C5CQMAYUIOL5O1?autoload=1&app_absent=0",
    mapsUrl: "https://www.google.com/search?sca_esv=110a515e0d96392e&biw=1366&bih=607&sxsrf=ANbL-n43fAdXbv-9dPlWYtbyzIO44zxu-g:1773167672865&kgmid=/g/11hbkdv1qm&q=Discarada+Acess%C3%B3rios+Gama&shndl=30&source=sh/x/loc/uni/m1/1&kgs=499b8422170b1d81&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/uni/m1/1",
  },
  {
    nome: "Ocidental - Centro",
    endereco: "Centro, Ocidental",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5561998483940&text&type=phone_number&app_absent=0",
    mapsUrl: "https://www.google.com/search?sca_esv=110a515e0d96392e&biw=1366&bih=607&sxsrf=ANbL-n4CBpnp3Fj-2ij228cK-Jf6Op9OTw:1773169653436&kgmid=/g/11gsmt3j9r&q=Discarada+Acessorios+Cidade+Ocidental&shndl=30&source=sh/x/loc/uni/m1/1&kgs=746cd258c153723d&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/uni/m1/1",
  },
  {
    nome: "Valparaíso",
    endereco: "Valparaíso de Goiás",
    whatsappUrl: "https://api.whatsapp.com/message/W44QK4QWU6ZDF1?autoload=1&app_absent=0",
    mapsUrl: "https://www.google.com/search?sca_esv=110a515e0d96392e&cs=0&sxsrf=ANbL-n6ZXhuq6NSSnJ73JsItvX9WD8mKHg:1773169614537&kgmid=/g/11lzml37wy&q=Discarada+Acess%C3%B3rios+-+Valpara%C3%ADso&shndl=30&source=sh/x/loc/uni/m1/1&kgs=26a273f1ab269a71&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/uni/m1/1",
  },
];
