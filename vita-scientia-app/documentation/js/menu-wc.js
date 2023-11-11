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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' : 'data-bs-target="#xs-components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' :
                                            'id="xs-components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-a219567541a08ee6048c19930b387116df9c1e9ce7acd013175462311a3297d201366f5513091a619edf46d041b219804e109fab6217175a108937a604ce7d63"' : 'data-bs-target="#xs-components-links-module-HomePageModule-a219567541a08ee6048c19930b387116df9c1e9ce7acd013175462311a3297d201366f5513091a619edf46d041b219804e109fab6217175a108937a604ce7d63"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-a219567541a08ee6048c19930b387116df9c1e9ce7acd013175462311a3297d201366f5513091a619edf46d041b219804e109fab6217175a108937a604ce7d63"' :
                                            'id="xs-components-links-module-HomePageModule-a219567541a08ee6048c19930b387116df9c1e9ce7acd013175462311a3297d201366f5513091a619edf46d041b219804e109fab6217175a108937a604ce7d63"' }>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' : 'data-bs-target="#xs-components-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' :
                                            'id="xs-components-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' }>
                                            <li class="link">
                                                <a href="components/LoginPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' : 'data-bs-target="#xs-injectables-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' :
                                        'id="xs-injectables-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' }>
                                        <li class="link">
                                            <a href="injectables/LoginPageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageService</a>
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
                                <a href="modules/RecoverPasswordModule.html" data-type="entity-link" >RecoverPasswordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' : 'data-bs-target="#xs-components-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' :
                                            'id="xs-components-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' }>
                                            <li class="link">
                                                <a href="components/RecoverPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecoverPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' : 'data-bs-target="#xs-injectables-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' :
                                        'id="xs-injectables-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' }>
                                        <li class="link">
                                            <a href="injectables/RecoverPasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecoverPasswordService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResetPasswordModule.html" data-type="entity-link" >ResetPasswordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' : 'data-bs-target="#xs-components-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' :
                                            'id="xs-components-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' }>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' : 'data-bs-target="#xs-injectables-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' :
                                        'id="xs-injectables-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' }>
                                        <li class="link">
                                            <a href="injectables/ResetPasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                    <a href="injectables/AuthenticatedGuard.html" data-type="entity-link" >AuthenticatedGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginPageService.html" data-type="entity-link" >LoginPageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecoverPasswordService.html" data-type="entity-link" >RecoverPasswordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResetPasswordService.html" data-type="entity-link" >ResetPasswordService</a>
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
                                <a href="interfaces/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatePassword.html" data-type="entity-link" >UpdatePassword</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
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