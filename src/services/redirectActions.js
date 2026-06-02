// src/services/redirectActions.js

export const executarAcaoRedirect = (tipoAcao) => {
  switch (tipoAcao) {
    case 'LINK_TABUA_MARES':
      window.open('https://www.maragogialagoas.com/tabua-da-mare-maragogi/', '_blank', 'noopener,noreferrer');
      break;
      
    // --- MAPAS DOS RESTAURANTES ---
    case 'MAPS_TUA_CASA':
      // Troque o link abaixo pelo link real do Google Maps do restaurante
      window.open('https://www.google.com/maps/place/Restaurante+Tua+Casa+Hamburgueria+e+Petiscaria+Delivery/@-8.9545136,-35.1768388,16.91z/data=!4m14!1m7!3m6!1s0x700637447c398c9:0x935140fa95c48770!2sCondom%C3%ADnio+Beach+House!8m2!3d-8.937823!4d-35.1686562!16s%2Fg%2F11j1cddcpy!3m5!1s0x70061532966c9c1:0x9db4302ac9485892!8m2!3d-8.9560518!4d-35.1770935!16s%2Fg%2F11gnpkwrtx?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D', '_blank', 'noopener,noreferrer'); 
      break;

    case 'MAPS_CASA_DA_PRAIA':
      // Troque o link abaixo pelo link real do Google Maps da pizzaria
      window.open('https://www.google.com/maps/place/Casa+da+Praia+Lounge+e+Pizzaria/@-8.984901,-35.1911321,17z/data=!3m1!4b1!4m6!3m5!1s0x70061e318307f8b:0xc69f42e6b7b18414!8m2!3d-8.984901!4d-35.1911321!16s%2Fg%2F11mmlx07pk?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D', '_blank', 'noopener,noreferrer');
      break;

    case 'MAPS_REI_DAS_COXINHAS':
      // Troque o link abaixo pelo link real
      window.open('https://goo.gl/maps/https://www.google.com/maps/place/O+Rei+das+Coxinhas+-+Peroba/@-8.9379895,-35.1712969,17.81z/data=!4m14!1m7!3m6!1s0x70061e318307f8b:0xc69f42e6b7b18414!2sCasa+da+Praia+Lounge+e+Pizzaria!8m2!3d-8.984901!4d-35.1911321!16s%2Fg%2F11mmlx07pk!3m5!1s0x70063bffd6f803d:0x33a24f6ec7ae906!8m2!3d-8.9374022!4d-35.1705036!16s%2Fg%2F11sk89zy4q?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D', '_blank', 'noopener,noreferrer');
      break;
      
    default:
      console.warn("Ação não reconhecida para este card: ", tipoAcao);
      break;
  }
};