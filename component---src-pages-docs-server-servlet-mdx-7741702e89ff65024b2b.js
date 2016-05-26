(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-graphql"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},"6up2":function(e,t,r){"use strict";r.r(t),r.d(t,"pageTitle",(function(){return o})),r.d(t,"_frontmatter",(function(){return s})),r.d(t,"default",(function(){return m}));var a,n=r("zLVn"),i=(r("q1tI"),r("7ljp")),c=r("xCMr"),o="Embedding a servlet container",s={},l=(a="RequiredDependencies",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),d={pageTitle:o,_frontmatter:s},p=c.a;function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)(p,Object.assign({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"embedding-a-servlet-container",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#embedding-a-servlet-container","aria-label":"embedding a servlet container permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Embedding a servlet container"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#embedding-apache-tomcat"},"Embedding Apache Tomcat")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#embedding-jetty"},"Embedding Jetty"))),Object(i.b)("p",null,"You can make Armeria serve your JEE web application on the same JVM and TCP/IP port by embedding\n",Object(i.b)("a",{parentName:"p",href:"https://tomcat.apache.org/"},"Apache Tomcat")," or ",Object(i.b)("a",{parentName:"p",href:"https://www.eclipse.org/jetty/"},"Jetty"),".\nNeither Tomcat nor Jetty will open a server socket or accept an incoming connection.\nAll HTTP requests and responses go through Armeria. As a result, you get the following bonuses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your webapp gets HTTP/2 support for free even if your servlet container does not support it."),Object(i.b)("li",{parentName:"ul"},"You can run your RPC services on the same JVM and port as your webapp with no performance loss.")),Object(i.b)("h2",{id:"embedding-apache-tomcat",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#embedding-apache-tomcat","aria-label":"embedding apache tomcat permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Embedding Apache Tomcat"),Object(i.b)("p",null,"You need the ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-tomcat9")," dependency:"),Object(i.b)(l,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-tomcat9"}],mdxType:"RequiredDependencies"}),Object(i.b)("p",null,"Then, add a ",Object(i.b)("a",{parentName:"p",href:"type://TomcatService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/tomcat/TomcatService.html"},"type://TomcatService")," to a ",Object(i.b)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.tomcat.TomcatService;\n\nServerBuilder sb = Server.builder();\n\nsb.serviceUnder("/tomcat/api/rest/v2/",\n                TomcatService.forCurrentClassPath("/webapp"));\n\nsb.serviceUnder("/tomcat/api/rest/v1/",\n                TomcatService.forFileSystem("/var/lib/webapps/old_api.war"));\n')),Object(i.b)("p",null,"For more information, please refer to the API documentation of ",Object(i.b)("a",{parentName:"p",href:"type://TomcatService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/tomcat/TomcatService.html"},"type://TomcatService")," and\n",Object(i.b)("a",{parentName:"p",href:"type://TomcatServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/tomcat/TomcatServiceBuilder.html"},"type://TomcatServiceBuilder"),"."),Object(i.b)("h2",{id:"embedding-jetty",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#embedding-jetty","aria-label":"embedding jetty permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Embedding Jetty"),Object(i.b)("p",null,"You need ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-jetty9"),", additional ",Object(i.b)("inlineCode",{parentName:"p"},"jetty")," dependencies and bootstrap code due to its modular design:"),Object(i.b)(l,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"},{groupId:"org.eclipse.jetty",artifactId:"jetty-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-jetty9"},{groupId:"org.eclipse.jetty",artifactId:"jetty-webapp"},{groupId:"org.eclipse.jetty",artifactId:"jetty-annotations"},{groupId:"org.eclipse.jetty",artifactId:"apache-jsp"},{groupId:"org.eclipse.jetty",artifactId:"apache-jstl"}],mdxType:"RequiredDependencies"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.jetty.JettyService;\nimport org.eclipse.jetty.annotations.ServletContainerInitializersStarter;\nimport org.eclipse.jetty.apache.jsp.JettyJasperInitializer\nimport org.eclipse.jetty.plus.annotation.ContainerInitializer\nimport org.eclipse.jetty.util.resource.Resource;\nimport org.eclipse.jetty.webapp.WebAppContext;\n\nServerBuilder sb = Server.builder();\n\nsb.serviceUnder("/jetty/api/rest/v2/",\n                JettyService.builder()\n                            .handler(newWebAppContext("/webapp"))\n                            .build());\n\nstatic WebAppContext newWebAppContext(String resourcePath) throws MalformedURLException {\n    final WebAppContext handler = new WebAppContext();\n    handler.setContextPath("/");\n    handler.setBaseResource(Resource.newClassPathResource(resourcePath));\n    handler.setClassLoader(/* Specify your class loader here. */);\n    handler.addBean(new ServletContainerInitializersStarter(handler), true);\n    handler.setAttribute(\n            "org.eclipse.jetty.containerInitializers",\n            Collections.singletonList(\n                    new ContainerInitializer(new JettyJasperInitializer(), null)));\n    return handler;\n}\n')),Object(i.b)("p",null,"For more information, please refer to the API documentation of ",Object(i.b)("a",{parentName:"p",href:"type://JettyService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/jetty/JettyService.html"},"type://JettyService")," and\n",Object(i.b)("a",{parentName:"p",href:"type://JettyServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/jetty/JettyServiceBuilder.html"},"type://JettyServiceBuilder"),"."))}m.isMDXComponent=!0},xCMr:function(e,t,r){"use strict";var a=r("Wbzz"),n=r("q1tI"),i=r.n(n),c=r("/94A"),o=r("+ejy");t.a=function(e){var t=Object(a.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-servlet-mdx-7741702e89ff65024b2b.js.map