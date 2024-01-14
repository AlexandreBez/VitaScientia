'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" data-src="images/documentationlogo.png">
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AnotacaoModule.html" data-type="entity-link" >AnotacaoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AnotacaoModule-21115059eee1852c28091318e91f0c68a465726947fe12c13bdfc6082041ab61d193530251a65c1796bb9e21910fe605426288078d7c6cc18eb9db2ae85eb03d"' : 'data-bs-target="#xs-components-links-module-AnotacaoModule-21115059eee1852c28091318e91f0c68a465726947fe12c13bdfc6082041ab61d193530251a65c1796bb9e21910fe605426288078d7c6cc18eb9db2ae85eb03d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnotacaoModule-21115059eee1852c28091318e91f0c68a465726947fe12c13bdfc6082041ab61d193530251a65c1796bb9e21910fe605426288078d7c6cc18eb9db2ae85eb03d"' :
                                            'id="xs-components-links-module-AnotacaoModule-21115059eee1852c28091318e91f0c68a465726947fe12c13bdfc6082041ab61d193530251a65c1796bb9e21910fe605426288078d7c6cc18eb9db2ae85eb03d"' }>
                                            <li class="link">
                                                <a href="components/AnotacaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnotacaoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AnotacaoModule-21115059eee1852c28091318e91f0c68a465726947fe12c13bdfc6082041ab61d193530251a65c1796bb9e21910fe605426288078d7c6cc18eb9db2ae85eb03d"' : 'data-bs-target="#xs-injectables-links-module-AnotacaoModule-21115059eee1852c28091318e91f0c68a465726947fe12c13bdfc6082041ab61d193530251a65c1796bb9e21910fe605426288078d7c6cc18eb9db2ae85eb03d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnotacaoModule-21115059eee1852c28091318e91f0c68a465726947fe12c13bdfc6082041ab61d193530251a65c1796bb9e21910fe605426288078d7c6cc18eb9db2ae85eb03d"' :
                                        'id="xs-injectables-links-module-AnotacaoModule-21115059eee1852c28091318e91f0c68a465726947fe12c13bdfc6082041ab61d193530251a65c1796bb9e21910fe605426288078d7c6cc18eb9db2ae85eb03d"' }>
                                        <li class="link">
                                            <a href="injectables/AnotacaoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnotacaoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-1d58ce49c4a6d337f66f07ba85f2c7787494e0dda25e8cab6fd447428713731ffdca669371cde7b1a561ed9422b785fea86b09e48ea84ef47e00bf1334f17947"' : 'data-bs-target="#xs-components-links-module-AppModule-1d58ce49c4a6d337f66f07ba85f2c7787494e0dda25e8cab6fd447428713731ffdca669371cde7b1a561ed9422b785fea86b09e48ea84ef47e00bf1334f17947"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1d58ce49c4a6d337f66f07ba85f2c7787494e0dda25e8cab6fd447428713731ffdca669371cde7b1a561ed9422b785fea86b09e48ea84ef47e00bf1334f17947"' :
                                            'id="xs-components-links-module-AppModule-1d58ce49c4a6d337f66f07ba85f2c7787494e0dda25e8cab6fd447428713731ffdca669371cde7b1a561ed9422b785fea86b09e48ea84ef47e00bf1334f17947"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-6388bdada3fc84259c3d1ecdc43865366affb1cc4595b386ec7bc24700b1dddbca53da8f243fade8f3e12826ca980a48cf41cc9c9e591ad61ca25ddd01ba2720"' : 'data-bs-target="#xs-components-links-module-HomePageModule-6388bdada3fc84259c3d1ecdc43865366affb1cc4595b386ec7bc24700b1dddbca53da8f243fade8f3e12826ca980a48cf41cc9c9e591ad61ca25ddd01ba2720"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-6388bdada3fc84259c3d1ecdc43865366affb1cc4595b386ec7bc24700b1dddbca53da8f243fade8f3e12826ca980a48cf41cc9c9e591ad61ca25ddd01ba2720"' :
                                            'id="xs-components-links-module-HomePageModule-6388bdada3fc84259c3d1ecdc43865366affb1cc4595b386ec7bc24700b1dddbca53da8f243fade8f3e12826ca980a48cf41cc9c9e591ad61ca25ddd01ba2720"' }>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HomePageModule-6388bdada3fc84259c3d1ecdc43865366affb1cc4595b386ec7bc24700b1dddbca53da8f243fade8f3e12826ca980a48cf41cc9c9e591ad61ca25ddd01ba2720"' : 'data-bs-target="#xs-injectables-links-module-HomePageModule-6388bdada3fc84259c3d1ecdc43865366affb1cc4595b386ec7bc24700b1dddbca53da8f243fade8f3e12826ca980a48cf41cc9c9e591ad61ca25ddd01ba2720"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomePageModule-6388bdada3fc84259c3d1ecdc43865366affb1cc4595b386ec7bc24700b1dddbca53da8f243fade8f3e12826ca980a48cf41cc9c9e591ad61ca25ddd01ba2720"' :
                                        'id="xs-injectables-links-module-HomePageModule-6388bdada3fc84259c3d1ecdc43865366affb1cc4595b386ec7bc24700b1dddbca53da8f243fade8f3e12826ca980a48cf41cc9c9e591ad61ca25ddd01ba2720"' }>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginPageModule-ee3eac981570fc8240420a3ad1641b2b79ece1de148517d6b5bb00ff326f9dc0df577f3a769f2da9d4a5a627745b86a0d811661148549ce9e973ca5c9ca745c6"' : 'data-bs-target="#xs-components-links-module-LoginPageModule-ee3eac981570fc8240420a3ad1641b2b79ece1de148517d6b5bb00ff326f9dc0df577f3a769f2da9d4a5a627745b86a0d811661148549ce9e973ca5c9ca745c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-ee3eac981570fc8240420a3ad1641b2b79ece1de148517d6b5bb00ff326f9dc0df577f3a769f2da9d4a5a627745b86a0d811661148549ce9e973ca5c9ca745c6"' :
                                            'id="xs-components-links-module-LoginPageModule-ee3eac981570fc8240420a3ad1641b2b79ece1de148517d6b5bb00ff326f9dc0df577f3a769f2da9d4a5a627745b86a0d811661148549ce9e973ca5c9ca745c6"' }>
                                            <li class="link">
                                                <a href="components/LoginPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LoginPageModule-ee3eac981570fc8240420a3ad1641b2b79ece1de148517d6b5bb00ff326f9dc0df577f3a769f2da9d4a5a627745b86a0d811661148549ce9e973ca5c9ca745c6"' : 'data-bs-target="#xs-injectables-links-module-LoginPageModule-ee3eac981570fc8240420a3ad1641b2b79ece1de148517d6b5bb00ff326f9dc0df577f3a769f2da9d4a5a627745b86a0d811661148549ce9e973ca5c9ca745c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginPageModule-ee3eac981570fc8240420a3ad1641b2b79ece1de148517d6b5bb00ff326f9dc0df577f3a769f2da9d4a5a627745b86a0d811661148549ce9e973ca5c9ca745c6"' :
                                        'id="xs-injectables-links-module-LoginPageModule-ee3eac981570fc8240420a3ad1641b2b79ece1de148517d6b5bb00ff326f9dc0df577f3a769f2da9d4a5a627745b86a0d811661148549ce9e973ca5c9ca745c6"' }>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundModule.html" data-type="entity-link" >NotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NotFoundModule-3d9693cd09df0cceceddc3d083e5e7ae4a7bfd1ca02a249d45980f6e81bcd7fd945824131f95c2199d01caba8e54811a267541d0d7e72ac7650b234249d8f415"' : 'data-bs-target="#xs-components-links-module-NotFoundModule-3d9693cd09df0cceceddc3d083e5e7ae4a7bfd1ca02a249d45980f6e81bcd7fd945824131f95c2199d01caba8e54811a267541d0d7e72ac7650b234249d8f415"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotFoundModule-3d9693cd09df0cceceddc3d083e5e7ae4a7bfd1ca02a249d45980f6e81bcd7fd945824131f95c2199d01caba8e54811a267541d0d7e72ac7650b234249d8f415"' :
                                            'id="xs-components-links-module-NotFoundModule-3d9693cd09df0cceceddc3d083e5e7ae4a7bfd1ca02a249d45980f6e81bcd7fd945824131f95c2199d01caba8e54811a267541d0d7e72ac7650b234249d8f415"' }>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PesquisaModule.html" data-type="entity-link" >PesquisaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PesquisaModule-4015721ca5b6f2d17f7c4d5ddb2f173bf808ac0c4126f73ad1d1c166801a83c6e0429ea2b9aef2cb82b9e9e263bbf9f5cb013d13473ff464ee115b485e516028"' : 'data-bs-target="#xs-components-links-module-PesquisaModule-4015721ca5b6f2d17f7c4d5ddb2f173bf808ac0c4126f73ad1d1c166801a83c6e0429ea2b9aef2cb82b9e9e263bbf9f5cb013d13473ff464ee115b485e516028"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PesquisaModule-4015721ca5b6f2d17f7c4d5ddb2f173bf808ac0c4126f73ad1d1c166801a83c6e0429ea2b9aef2cb82b9e9e263bbf9f5cb013d13473ff464ee115b485e516028"' :
                                            'id="xs-components-links-module-PesquisaModule-4015721ca5b6f2d17f7c4d5ddb2f173bf808ac0c4126f73ad1d1c166801a83c6e0429ea2b9aef2cb82b9e9e263bbf9f5cb013d13473ff464ee115b485e516028"' }>
                                            <li class="link">
                                                <a href="components/PesquisasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PesquisasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PesquisaModule-4015721ca5b6f2d17f7c4d5ddb2f173bf808ac0c4126f73ad1d1c166801a83c6e0429ea2b9aef2cb82b9e9e263bbf9f5cb013d13473ff464ee115b485e516028"' : 'data-bs-target="#xs-injectables-links-module-PesquisaModule-4015721ca5b6f2d17f7c4d5ddb2f173bf808ac0c4126f73ad1d1c166801a83c6e0429ea2b9aef2cb82b9e9e263bbf9f5cb013d13473ff464ee115b485e516028"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PesquisaModule-4015721ca5b6f2d17f7c4d5ddb2f173bf808ac0c4126f73ad1d1c166801a83c6e0429ea2b9aef2cb82b9e9e263bbf9f5cb013d13473ff464ee115b485e516028"' :
                                        'id="xs-injectables-links-module-PesquisaModule-4015721ca5b6f2d17f7c4d5ddb2f173bf808ac0c4126f73ad1d1c166801a83c6e0429ea2b9aef2cb82b9e9e263bbf9f5cb013d13473ff464ee115b485e516028"' }>
                                        <li class="link">
                                            <a href="injectables/PesquisaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PesquisaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjetoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjetoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjetosModule.html" data-type="entity-link" >ProjetosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProjetosModule-1238084da20eb4be47ba71562e4c345430ab2338c0c7c6caf38b0b06da869c735b720f00af59aebac0290009b0a4e45d228308effa77d4b51cc20939c06a98f9"' : 'data-bs-target="#xs-components-links-module-ProjetosModule-1238084da20eb4be47ba71562e4c345430ab2338c0c7c6caf38b0b06da869c735b720f00af59aebac0290009b0a4e45d228308effa77d4b51cc20939c06a98f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjetosModule-1238084da20eb4be47ba71562e4c345430ab2338c0c7c6caf38b0b06da869c735b720f00af59aebac0290009b0a4e45d228308effa77d4b51cc20939c06a98f9"' :
                                            'id="xs-components-links-module-ProjetosModule-1238084da20eb4be47ba71562e4c345430ab2338c0c7c6caf38b0b06da869c735b720f00af59aebac0290009b0a4e45d228308effa77d4b51cc20939c06a98f9"' }>
                                            <li class="link">
                                                <a href="components/ProjetosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjetosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProjetosModule-1238084da20eb4be47ba71562e4c345430ab2338c0c7c6caf38b0b06da869c735b720f00af59aebac0290009b0a4e45d228308effa77d4b51cc20939c06a98f9"' : 'data-bs-target="#xs-injectables-links-module-ProjetosModule-1238084da20eb4be47ba71562e4c345430ab2338c0c7c6caf38b0b06da869c735b720f00af59aebac0290009b0a4e45d228308effa77d4b51cc20939c06a98f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProjetosModule-1238084da20eb4be47ba71562e4c345430ab2338c0c7c6caf38b0b06da869c735b720f00af59aebac0290009b0a4e45d228308effa77d4b51cc20939c06a98f9"' :
                                        'id="xs-injectables-links-module-ProjetosModule-1238084da20eb4be47ba71562e4c345430ab2338c0c7c6caf38b0b06da869c735b720f00af59aebac0290009b0a4e45d228308effa77d4b51cc20939c06a98f9"' }>
                                        <li class="link">
                                            <a href="injectables/ProjetoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjetoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecuperarSenhaModule.html" data-type="entity-link" >RecuperarSenhaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RecuperarSenhaModule-604327298b3ddb7e8472a76f9139ac09d70396252d9d71b6d1f644f96a17e0edfdadd0229f2845188b968fa893d0e3a951ca850d7b3eb460d3341c5ea17d3275"' : 'data-bs-target="#xs-components-links-module-RecuperarSenhaModule-604327298b3ddb7e8472a76f9139ac09d70396252d9d71b6d1f644f96a17e0edfdadd0229f2845188b968fa893d0e3a951ca850d7b3eb460d3341c5ea17d3275"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RecuperarSenhaModule-604327298b3ddb7e8472a76f9139ac09d70396252d9d71b6d1f644f96a17e0edfdadd0229f2845188b968fa893d0e3a951ca850d7b3eb460d3341c5ea17d3275"' :
                                            'id="xs-components-links-module-RecuperarSenhaModule-604327298b3ddb7e8472a76f9139ac09d70396252d9d71b6d1f644f96a17e0edfdadd0229f2845188b968fa893d0e3a951ca850d7b3eb460d3341c5ea17d3275"' }>
                                            <li class="link">
                                                <a href="components/RecuperarSenhaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecuperarSenhaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RecuperarSenhaModule-604327298b3ddb7e8472a76f9139ac09d70396252d9d71b6d1f644f96a17e0edfdadd0229f2845188b968fa893d0e3a951ca850d7b3eb460d3341c5ea17d3275"' : 'data-bs-target="#xs-injectables-links-module-RecuperarSenhaModule-604327298b3ddb7e8472a76f9139ac09d70396252d9d71b6d1f644f96a17e0edfdadd0229f2845188b968fa893d0e3a951ca850d7b3eb460d3341c5ea17d3275"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RecuperarSenhaModule-604327298b3ddb7e8472a76f9139ac09d70396252d9d71b6d1f644f96a17e0edfdadd0229f2845188b968fa893d0e3a951ca850d7b3eb460d3341c5ea17d3275"' :
                                        'id="xs-injectables-links-module-RecuperarSenhaModule-604327298b3ddb7e8472a76f9139ac09d70396252d9d71b6d1f644f96a17e0edfdadd0229f2845188b968fa893d0e3a951ca850d7b3eb460d3341c5ea17d3275"' }>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResetaSenhaModule.html" data-type="entity-link" >ResetaSenhaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ResetaSenhaModule-3a35eb7d485aee65859d317f0a677f36ee7daffced8a3c78b0b4605139c6f730ae2254510c1789cd619e3b40012a4e501089819b15bb5c62fbc3fc278b24e7ca"' : 'data-bs-target="#xs-components-links-module-ResetaSenhaModule-3a35eb7d485aee65859d317f0a677f36ee7daffced8a3c78b0b4605139c6f730ae2254510c1789cd619e3b40012a4e501089819b15bb5c62fbc3fc278b24e7ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResetaSenhaModule-3a35eb7d485aee65859d317f0a677f36ee7daffced8a3c78b0b4605139c6f730ae2254510c1789cd619e3b40012a4e501089819b15bb5c62fbc3fc278b24e7ca"' :
                                            'id="xs-components-links-module-ResetaSenhaModule-3a35eb7d485aee65859d317f0a677f36ee7daffced8a3c78b0b4605139c6f730ae2254510c1789cd619e3b40012a4e501089819b15bb5c62fbc3fc278b24e7ca"' }>
                                            <li class="link">
                                                <a href="components/ResetaSenhaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetaSenhaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResetaSenhaModule-3a35eb7d485aee65859d317f0a677f36ee7daffced8a3c78b0b4605139c6f730ae2254510c1789cd619e3b40012a4e501089819b15bb5c62fbc3fc278b24e7ca"' : 'data-bs-target="#xs-injectables-links-module-ResetaSenhaModule-3a35eb7d485aee65859d317f0a677f36ee7daffced8a3c78b0b4605139c6f730ae2254510c1789cd619e3b40012a4e501089819b15bb5c62fbc3fc278b24e7ca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResetaSenhaModule-3a35eb7d485aee65859d317f0a677f36ee7daffced8a3c78b0b4605139c6f730ae2254510c1789cd619e3b40012a4e501089819b15bb5c62fbc3fc278b24e7ca"' :
                                        'id="xs-injectables-links-module-ResetaSenhaModule-3a35eb7d485aee65859d317f0a677f36ee7daffced8a3c78b0b4605139c6f730ae2254510c1789cd619e3b40012a4e501089819b15bb5c62fbc3fc278b24e7ca"' }>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoutingModule.html" data-type="entity-link" >RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SpinnerModule.html" data-type="entity-link" >SpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SpinnerModule-97c6d21618b0b09fde1d2290bb6cbd3d9e20854af64a5708b0ea7e76bc45e8e427efcf9d0bc14e4baceb7ea6bd78720b41653cba114526dce34229b863ebdc0c"' : 'data-bs-target="#xs-components-links-module-SpinnerModule-97c6d21618b0b09fde1d2290bb6cbd3d9e20854af64a5708b0ea7e76bc45e8e427efcf9d0bc14e4baceb7ea6bd78720b41653cba114526dce34229b863ebdc0c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpinnerModule-97c6d21618b0b09fde1d2290bb6cbd3d9e20854af64a5708b0ea7e76bc45e8e427efcf9d0bc14e4baceb7ea6bd78720b41653cba114526dce34229b863ebdc0c"' :
                                            'id="xs-components-links-module-SpinnerModule-97c6d21618b0b09fde1d2290bb6cbd3d9e20854af64a5708b0ea7e76bc45e8e427efcf9d0bc14e4baceb7ea6bd78720b41653cba114526dce34229b863ebdc0c"' }>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnotacaoService.html" data-type="entity-link" >AnotacaoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PesquisaService.html" data-type="entity-link" >PesquisaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjetoService.html" data-type="entity-link" >ProjetoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link" >UsuarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidaTempoRestanteToken.html" data-type="entity-link" >ValidaTempoRestanteToken</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidaToken.html" data-type="entity-link" >ValidaToken</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Anotacao.html" data-type="entity-link" >Anotacao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthRequest.html" data-type="entity-link" >AuthRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthResponse.html" data-type="entity-link" >AuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginaAnotacao.html" data-type="entity-link" >PaginaAnotacao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginaPesquisas.html" data-type="entity-link" >PaginaPesquisas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginaProjeto.html" data-type="entity-link" >PaginaProjeto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pesquisa.html" data-type="entity-link" >Pesquisa</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Projeto.html" data-type="entity-link" >Projeto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Requisito.html" data-type="entity-link" >Requisito</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});