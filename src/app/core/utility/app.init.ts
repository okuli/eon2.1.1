import { KeycloakService } from 'keycloak-angular';


export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        //url: 'https://docportal.dev.livecontract.de/auth/',
        url: 'https://rc.syncpilot.com/auth/',
        realm: 'v-terminal',
        clientId: 'vterminal-admin-app'
      },
      initOptions: {
        checkLoginIframe: true
      }
    });
}
