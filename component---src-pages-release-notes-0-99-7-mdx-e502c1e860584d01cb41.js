(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var r=t("wFql"),n=t("q1tI"),i=t.n(n),o=t("2+3N"),c=t("1lec"),s=t("+ejy"),l=t("+9zj"),p=r.a.Title;a.a=function(e){var a={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(o).forEach((function(e){var t=e[0],r=e[1];a[r]=t})),Object.entries(c).forEach((function(e){var a=e[0],r=e[1];t[r]=a}));var n=Object(l.a)(e.location),m=e.version||n.substring(n.lastIndexOf("/")+1);return m.match(/^[0-9]/)||(m=void 0),i.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:m?m+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),m?i.a.createElement(p,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),m," release notes"):"",e.children)}},QGkW:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return m}));var r,n=t("zLVn"),i=(t("q1tI"),t("7ljp")),o=t("JkCF"),c={},s=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:c},p=o.a;function m(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(p,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"date"},"22nd June 2020"),Object(i.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now specify the maximum lifespan of server-side connections using\n",Object(i.b)("a",{parentName:"p",href:"type://ServerBuilder#maxConnectionAge(Duration):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html#maxConnectionAge(java.time.Duration)"},"type://ServerBuilder#maxConnectionAge(Duration)"),". This is useful when you have to deal with a load balancer\nwithout HTTP/2 support. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2747"},"#2747")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2796"},"#2796")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"Server server =\n    Server.builder()\n          .maxConnectionAge(Duration.ofMinutes(1))\n          ...\n          .build();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now record the name of the service that handled a request into ",Object(i.b)("a",{parentName:"p",href:"type://RequestOnlyLog#serviceName():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/RequestOnlyLog.html#serviceName()"},"type://RequestOnlyLog#serviceName()"),".\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2768"},"#2768")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2780"},"#2780")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2809"},"#2809")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2820"},"#2820")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"By using ",Object(i.b)("a",{parentName:"p",href:"type://ServiceBindingBuilder#defaultServiceName(String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceBindingBuilder.html#defaultServiceName(java.lang.String)"},"type://ServiceBindingBuilder#defaultServiceName(String)"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'Server server =\n    Server.builder()\n          .route().path("/service")\n                  .defaultServiceName("my-service")\n                  .build(new MyService())\n          .build();\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"By using ",Object(i.b)("a",{parentName:"p",href:"type://@ServiceName:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/ServiceName.html"},"type://@ServiceName"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'@ServiceName("my-service")\npublic class MyAnnotatedService {\n    @Get("/get")\n    public String get() { ... }\n\n    @Post("/set")\n    @ServiceName("my-post-service")\n    public String post(@Param String value) { ... }\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Programmatically:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'Server server =\n    Server.builder()\n          .service("/service", (ctx, req) -> {\n              ctx.logBuilder().serviceName("my-service");\n          })\n          .build();\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Armeria will use the FQCN of the service class if you did not specify a service name.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now use ",Object(i.b)("inlineCode",{parentName:"p"},"@Nullable")," annotation to specify an optional parameter or request object in annotated\nservices. Previously, only the parameters with ",Object(i.b)("a",{parentName:"p",href:"type://@Default:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Default.html"},"type://@Default")," annotation or ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," type were accepted.\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2773"},"#2773")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"public class MyAnnotatedService {\n    // null will be injected into 'value' instead of returning\n    // '400 Bad Request' when 'value' is missing.\n    @Get(\"/get\")\n    public String get(@Param @Nullable String value) { ... }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now use the classes in the ",Object(i.b)("inlineCode",{parentName:"p"},"java.time")," package in annotated services. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2760"},"#2760")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2783"},"#2783")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2792"},"#2792")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2799"},"#2799")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class MyAnnotatedService {\n    @Get("/sleep/{duration}")\n    public void sleep(@Param Duration duration) { ... }\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now determine whether a request was successful or not from HTTP trailers in\n",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient")," and ",Object(i.b)("a",{parentName:"p",href:"type://RetryingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClient.html"},"type://RetryingClient")," using ",Object(i.b)("inlineCode",{parentName:"p"},"onResponseTrailers()")," method.\nThis can be useful when you work with gRPC, whose status code is encoded in the ",Object(i.b)("inlineCode",{parentName:"p"},"grpc-status")," trailer. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2816"},"#2816")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'CircuitBreaker cb = CircuitBreaker.of("my-service");\nCircuitBreakerRule cbr =\n    CircuitBreakerRule.builder()\n                      .onResponseTrailers(trailers -> {\n                          return trailers.getInt("grpc-status", -1) != 0;\n                      })\n                      .thenFailure()\n                      .build();\n\nMyServiceStub myService =\n    Clients.builder("gproto+h2c://example.com/")\n           .decorator(CircuitBreakerClient.newDecorator(cb, cbr))\n           .build(MyServiceStub.class);\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"type://RequestLog:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/RequestLog.html"},"type://RequestLog")," sanitizers now accept ",Object(i.b)("a",{parentName:"p",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext")," as an additional input, so that\nthe sanitizers can behave differently depending on the current path, etc. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2803"},"#2803")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'Server server =\n    Server.builder()\n          .decorator(LoggingService.builder()\n                                   .headersSanitizer((ctx, headers) -> {\n                                       if (ctx.path().startsWith("/secret/")) {\n                                           return "<secret>";\n                                       } else {\n                                           return headers;\n                                       }\n                                   })\n                                   .newDecorator())\n          ...\n          .build();\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Armeria now supports service discovery and registration for\n",Object(i.b)("a",{parentName:"p",href:"https://curator.apache.org/curator-x-discovery/index.html"},"Curator Service Discovery")," and\n",Object(i.b)("a",{parentName:"p",href:"http://stevenskelton.ca/finagle-serverset-clusters-using-zookeeper/"},"Finagle ServerSets"),". ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2673"},"#2673")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2749"},"#2749")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2791"},"#2791")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'CuratorFramework curator = ...;\n// Client side:\n//// Curator Service Discovery:\nEndpointGroup curatorEndpointGroup =\n    ZooKeeperEndpointGroup.of(curator, "/discovery/curator",\n                              ZooKeeperDiscoverySpec.curator("my-service"));\n//// Finagle ServerSets:\nEndpointGroup serverSetsEndpointGroup =\n    ZooKeeperEndpointGroup.of(curator, "/discovery/serversets"\n                              ZooKeeperDiscoverySpec.serverSets());\n\n// Server-side:\nServer server = ...;\n//// Curator Service Discovery:\nserver.addListener(ZooKeeperUpdatingListener.of(\n    curator, "/discovery/curator",\n    ZooKeeperRegistrationSpec.curator("my-service")));\n//// Finagle ServerSets:\nserver.addListener(ZooKeeperUpdatingListener.of(\n    curator, "/discovery/serversets",\n    ZooKeeperRegistrationSpec.serverSets()));\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now build ",Object(i.b)("a",{parentName:"p",href:"type://OAuth1aToken:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/auth/OAuth1aToken.html"},"type://OAuth1aToken")," more conveniently using the builder API. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2770"},"#2770")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'OAuth1aToken token =\n    OAuth1aToken.builder()\n                .realm("...")\n                .consumerKey("...")\n                .token("...")\n                ...\n                .build();\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Spring Boot integration now hides all services under ",Object(i.b)("inlineCode",{parentName:"p"},"/internal/")," for non-management ports when\n",Object(i.b)("inlineCode",{parentName:"p"},"management.server.port")," property is set. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2408"},"#2408")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2502"},"#2502"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Spring Boot integration now supports\n",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.3.0.RELEASE/reference/html/spring-boot-features.html#boot-features-graceful-shutdown"},"the new graceful shutdown properties"),"\nintroduced in Spring Boot 2.3. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2784"},"#2784")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2802"},"#2802"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Added a new API for handling reference counted or pooled objects such as ",Object(i.b)("a",{parentName:"p",href:"type://PooledHttpData"},"type://PooledHttpData")," in\na relatively safer way. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2448"},"#2448")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"See ",Object(i.b)("a",{parentName:"li",href:"type://PooledHttpData"},"type://PooledHttpData"),", ",Object(i.b)("a",{parentName:"li",href:"type://PooledWebClient"},"type://PooledWebClient"),", ",Object(i.b)("a",{parentName:"li",href:"type://PooledHttpRequest"},"type://PooledHttpRequest")," and\n",Object(i.b)("a",{parentName:"li",href:"type://PooledHttpResponse"},"type://PooledHttpResponse")," for more information.")))),Object(i.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cleaned up minor issues reported by ",Object(i.b)("a",{parentName:"li",href:"https://errorprone.info/"},"errorprone"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2772"},"#2772")),Object(i.b)("li",{parentName:"ul"},"Made some exception messages more user-friendly. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2751"},"#2751"))),Object(i.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It's now allowed to specify an absolute URL ",Object(i.b)("em",{parentName:"li"},"only when")," a ",Object(i.b)("a",{parentName:"li",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," was created ",Object(i.b)("em",{parentName:"li"},"without")," a base\nURL. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2757"},"#2757"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'WebClient clientWithoutBaseUrl = WebClient.of();\nWebClient clientWithBaseUrl = WebClient.of("https://example.com/");\n// Good\nclientWithBaseUrl.get("/bar");\nclientWithoutBaseUrl.get("https://foo.com/");\n// Bad\nclientWithBaseUrl.get("https://foo.com/");\nclientWithoutBaseUrl.get("/bar");\n'))),Object(i.b)("li",{parentName:"ul"},"Boolean parameter conversion became more strict in annotated services. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2767"},"#2767")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2774"},"#2774"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Only ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", ",Object(i.b)("inlineCode",{parentName:"li"},"1")," and ",Object(i.b)("inlineCode",{parentName:"li"},"0")," are accepted. Other values will cause a ",Object(i.b)("inlineCode",{parentName:"li"},"400 Bad Request")," response."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," web UI now shows the 'request body' field for ",Object(i.b)("inlineCode",{parentName:"li"},"DELETE")," and ",Object(i.b)("inlineCode",{parentName:"li"},"PATCH")," methods in the debug\nform. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2756"},"#2756")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2819"},"#2819")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://JacksonRequestConverterFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/JacksonRequestConverterFunction.html"},"type://JacksonRequestConverterFunction")," now handles the case where the target type has a type parameter,\ne.g. ",Object(i.b)("inlineCode",{parentName:"li"},"List<Long>"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2769"},"#2769")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2779"},"#2779")),Object(i.b)("li",{parentName:"ul"},"Fixed a bug where the current ",Object(i.b)("a",{parentName:"li",href:"type://ServiceRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html"},"type://ServiceRequestContext")," is not pushed when invoking\n",Object(i.b)("a",{parentName:"li",href:"type://ResponseConverterFunction#convertResponse(ServiceRequestContext,ResponseHeaders,Object,HttpHeaders):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/ResponseConverterFunction.html#convertResponse(com.linecorp.armeria.server.ServiceRequestContext,com.linecorp.armeria.common.ResponseHeaders,java.lang.Object,com.linecorp.armeria.common.HttpHeaders)"},"type://ResponseConverterFunction#convertResponse(ServiceRequestContext,ResponseHeaders,Object,HttpHeaders)"),".\n",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2789"},"#2789")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://RequestContextExportingAppender:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logback/RequestContextExportingAppender.html"},"type://RequestContextExportingAppender")," now handles the ",Object(i.b)("inlineCode",{parentName:"li"},"<exports />")," tag correctly. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2781"},"#2781")),Object(i.b)("li",{parentName:"ul"},"Fixed a bug where some Reactive Streams ",Object(i.b)("inlineCode",{parentName:"li"},"Subscriber")," implementations violate the specification. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2815"},"#2815")),Object(i.b)("li",{parentName:"ul"},"You no longer get sporadic ",Object(i.b)("a",{parentName:"li",href:"type://WriteTimeoutException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WriteTimeoutException.html"},"type://WriteTimeoutException")," from proxied connections. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2801"},"#2801")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2805"},"#2805")),Object(i.b)("li",{parentName:"ul"},"You no longer get a ",Object(i.b)("a",{parentName:"li",href:"type://CancelledSubscriptionException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/CancelledSubscriptionException.html"},"type://CancelledSubscriptionException")," unnecessarily when using\n",Object(i.b)("a",{parentName:"li",href:"type://PublisherBasedStreamMessage:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/PublisherBasedStreamMessage.html"},"type://PublisherBasedStreamMessage"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2797"},"#2797")),Object(i.b)("li",{parentName:"ul"},"You no longer get sporadic ",Object(i.b)("inlineCode",{parentName:"li"},"EncoderException"),"s from HTTP/1 connections. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2765"},"#2765")),Object(i.b)("li",{parentName:"ul"},"It's now disallowed to specify the following headers in gRPC ",Object(i.b)("inlineCode",{parentName:"li"},"Metadata"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2718"},"#2718"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},":status")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"grpc-message")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"grpc-status")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"armeria.grpc.ThrowableProto-bin"))))),Object(i.b)("h2",{id:"️-deprecations",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://AbstractUnwrappable#delegate()"},"type://AbstractUnwrappable#delegate()")," has been deprecated in favor of ",Object(i.b)("a",{parentName:"li",href:"type://Unwrappable#unwrap():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/util/Unwrappable.html#unwrap()"},"type://Unwrappable#unwrap()"),".")),Object(i.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can specify an absolute URL ",Object(i.b)("em",{parentName:"li"},"only when")," a ",Object(i.b)("a",{parentName:"li",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," was created ",Object(i.b)("em",{parentName:"li"},"without")," a base URL.\nIt was previously allowed to specify an absolute URL even when created with a base URL. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2757"},"#2757")),Object(i.b)("li",{parentName:"ul"},"The method signature of\n",Object(i.b)("a",{parentName:"li",href:"type://RequestConverterFunction#convertRequest(ServiceRequestContext,AggregatedHttpRequest,Class,ParameterizedType):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/RequestConverterFunction.html#convertRequest(com.linecorp.armeria.server.ServiceRequestContext,com.linecorp.armeria.common.AggregatedHttpRequest,java.lang.Class,java.lang.reflect.ParameterizedType)"},"type://RequestConverterFunction#convertRequest(ServiceRequestContext,AggregatedHttpRequest,Class,ParameterizedType)"),"\nhas been changed to support parameterized types. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2779"},"#2779")),Object(i.b)("li",{parentName:"ul"},"The default ",Object(i.b)("a",{parentName:"li",href:"type://MeterIdPrefixFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/metric/MeterIdPrefixFunction.html"},"type://MeterIdPrefixFunction")," returned by ",Object(i.b)("a",{parentName:"li",href:"type://MeterIdPrefixFunction#ofDefault(String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/metric/MeterIdPrefixFunction.html#ofDefault(java.lang.String)"},"type://MeterIdPrefixFunction#ofDefault(String)"),"\nnow generates the meter IDs with different tags. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2780"},"#2780"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"route")," tag has been replaced with the ",Object(i.b)("inlineCode",{parentName:"li"},"service")," tag."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RetrofitMeterIdPrefixFunctionBuilder")," has been removed and superseded by\n",Object(i.b)("a",{parentName:"li",href:"type://RequestOnlyLog#serviceName():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/RequestOnlyLog.html#serviceName()"},"type://RequestOnlyLog#serviceName()"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2780"},"#2780")),Object(i.b)("li",{parentName:"ul"},"ZooKeeper-based service discovery: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2749"},"#2749")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2791"},"#2791"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You now must specify ",Object(i.b)("a",{parentName:"li",href:"type://ZooKeeperRegistrationSpec:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html"},"type://ZooKeeperRegistrationSpec")," or ",Object(i.b)("a",{parentName:"li",href:"type://ZooKeeperDiscoverySpec:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/zookeeper/ZooKeeperDiscoverySpec.html"},"type://ZooKeeperDiscoverySpec")," when creating\n",Object(i.b)("a",{parentName:"li",href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"},"type://ZooKeeperUpdatingListener")," or ",Object(i.b)("a",{parentName:"li",href:"type://ZooKeeperEndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/zookeeper/ZooKeeperEndpointGroup.html"},"type://ZooKeeperEndpointGroup"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NodeValueCodec")," has been removed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZooKeeperEndpointGroupBuilder.codec()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ZooKeeperUpdatingListenerBuilder.codec()")," have been removed."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ByteBufHttpData")," has been replaced with ",Object(i.b)("a",{parentName:"li",href:"type://PooledHttpData"},"type://PooledHttpData"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2448"},"#2448")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpRequest.aggregateWithPooledObjects()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"HttpResponse.aggregateWithPooledObject")," have been replaced\nwith ",Object(i.b)("a",{parentName:"li",href:"type://PooledHttpRequest"},"type://PooledHttpRequest")," and ",Object(i.b)("a",{parentName:"li",href:"type://PooledHttpResponse"},"type://PooledHttpResponse"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2448"},"#2448")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SubscriptionOption.WITH_POOLED_OBJECTS")," has been removed. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2448"},"#2448"))),Object(i.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Bouncy Castle 1.65 → 1.65.01"),Object(i.b)("li",{parentName:"ul"},"Dropwizard 2.0.9 → 2.0.10"),Object(i.b)("li",{parentName:"ul"},"gRPC 1.29.0 → 1.30.1"),Object(i.b)("li",{parentName:"ul"},"Jetty 9.4.29 → 9.4.30"),Object(i.b)("li",{parentName:"ul"},"Reactor 3.3.5 → 3.3.6"),Object(i.b)("li",{parentName:"ul"},"Spring Boot 2.3.0 → 2.3.1, 2.1.14 → 2.1.15"),Object(i.b)("li",{parentName:"ul"},"Tomcat 9.0.35 → 9.0.36, 8.5.55 → 8.5.56"),Object(i.b)("li",{parentName:"ul"},"Example dependencies",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Dagger 2.27 → 2.28"),Object(i.b)("li",{parentName:"ul"},"grpc-kotlin-stub 0.1.2 → 0.1.3")))),Object(i.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(i.b)(s,{usernames:["anuraaga","cbornet","eonezhang","ghkim3221","heowc","huydx","ikhoon","jongmin92","joonhaeng","jrhee17","KarboniteKream","kojilin","max904-github","minwoox","okue","sokangmin","tobias-","trustin"],mdxType:"ThankYou"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-7-mdx-e502c1e860584d01cb41.js.map