(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),r=t("q1tI"),i=t.n(r),s=t("2+3N"),l=t("1lec"),c=t("+ejy"),o=t("+9zj"),b=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(l).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var r=Object(o.a)(e.location),p=e.version||r.substring(r.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?i.a.createElement(b,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},ulS3:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return p}));var n,r=t("zLVn"),i=(t("q1tI"),t("7ljp")),s=t("JkCF"),l={},c=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),o={_frontmatter:l},b=s.a;function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(b,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"date"},"17th May 2019"),Object(i.b)("h2",{id:"new-features",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now bind your Service to a certain HTTP method or enable HTTP content-type negotiation very easily with the new ",Object(i.b)("inlineCode",{parentName:"p"},"ServerBuilder.route()")," method. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1737"},"#1737")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = new ServerBuilder();\nsb.route()\n  .get("/users/{id}")\n  .delete("/users/{id}")\n  .post("/users")\n  .consumes(MediaType.JSON)\n  .produces(MediaType.JSON_UTF_8)\n  .build(new MyUserService());\n\n// You can also configure using a lambda expression.\nsb.withRoute(b -> {\n    b.path("/foo")\n     .build(new MyFooService());\n});\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It is now also possible to specify different settings for different services using the new ",Object(i.b)("inlineCode",{parentName:"p"},"route()")," method. It means you can specify a large timeout for a certain service only conveniently. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1737"},"#1737")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = new ServerBuilder();\nsb.route()\n  .path("/long_poll")\n  .requestTimeoutMillis(0) // Disable timeout for /service.\n  .build(new MyLongPollingService());\nsb.route()\n  .path("/get_now")\n  .build(new MyOtherService()); // Use the default timeout.\n```java\n\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We revamped our ",Object(i.b)("inlineCode",{parentName:"p"},"HttpHeaders")," API to make it cleaner and safer. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1731"},"#1731")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"HttpHeaders")," has been split into three types:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RequestHeaders")," for request headers with ",Object(i.b)("inlineCode",{parentName:"li"},":method")," and ",Object(i.b)("inlineCode",{parentName:"li"},":path")," header"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ResponseHeaders")," for response headers with ",Object(i.b)("inlineCode",{parentName:"li"},":status")," header"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpHeaders")," for trailers and other headers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RequestHeaders")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ResponseHeaders")," extend ",Object(i.b)("inlineCode",{parentName:"li"},"HttpHeaders"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"HttpHeaders")," and its subtypes are immutable and thus must be built using a factory method or a builder.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Quick examples:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'RequestHeaders reqHdrs = RequestHeaders.of(HttpMethod.GET, "/get",\n                                           HttpHeaderNames.ACCEPT, MediaType.JSON_UTF_8);\nRequestHeaders newReqHdrs = reqHdrs.toBuilder()\n                                   .add("foo", "bar")\n                                   .build();\nResponseHeaders resHdrs = ResponseHeaders.of(200 /* OK */);\n\nHttpHeaders hdrs = HttpHeaders.builder()\n                              .add("alice", "bob");\n                              .build();\nHttpHeaders newHdrs = hdrs.withMutations(builder -> {\n    builder.add("charlie", "debora");\n});\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"See ",Object(i.b)("inlineCode",{parentName:"p"},"HttpHeaders")," Javadoc for more examples.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now test your Armeria app with JUnit 5. A new module ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-testing-junit5")," has been added with the following extensions: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1736"},"#1736")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.testing.junit.server.ServerExtension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.testing.junit.server.SelfSignedCertificateExtension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.testing.junit.common.EventLoopGroupExtension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.testing.junit.common.EventLoopExtension")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now customize the behavior of gRPC JSON marshaller. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1696"},"#1696")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1753"},"#1753")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = new ServerBuilder();\nsb.service(new GrpcServiceBuilder()\n               .addService(new MyServiceImpl())\n               .supportedSerializationFormats(GrpcSerializationFormats.values())\n               .jsonMarshallerCustomizer(marshaller -> {\n                   marshaller.preservingProtoFieldNames(true);\n               })\n               .build());\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now write a unary gRPC client without depending on grpc-java at all. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1703"},"#1703")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1748"},"#1748")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1751"},"#1751")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'HelloRequest req = HelloRequest.newBuilder()\n                               .setName("Alice")\n                               .build();\nUnaryGrpcClient client = new UnaryGrpcClient(HttpClient.of("http://127.0.0.1:8080"));\nbyte[] resBytes = client.execute("/com.example.HelloService/Greet",\n                                 req.toByteArray()).join();\nHelloResponse res = HelloResponse.parseFrom(resBytes);\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now use ",Object(i.b)("inlineCode",{parentName:"p"},"GrpcServiceRegistrationBean")," to register a gRPC service when using Spring Boot integration. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1749"},"#1749")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic GrpcServiceRegistrationBean helloService() {\n    return new GrpcServiceRegistrationBean()\n        .setServiceName("helloService")\n        .setService(new GrpcServiceBuilder()\n                        .addService(new HelloService())\n                        .supportedSerializationFormats(GrpcSerializationFormats.values())\n                        .enableUnframedRequests(true)\n                        .build())\n        .setDecorators(LoggingService.newDecorator())\n        .setExampleRequests(List.of(ExampleRequest.of(HelloServiceGrpc.SERVICE_NAME,\n                                                      "Hello",\n                                                      HelloRequest.newBuilder()\n                                                                  .setName("Armeria")\n                                                                  .build())));\n}\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now use ",Object(i.b)("inlineCode",{parentName:"p"},"wildcard")," pattern when specifying built-in properties in Logback ",Object(i.b)("inlineCode",{parentName:"p"},"RequestContextExportingAppender"),". ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/489"},"#489")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1742"},"#1742")))),Object(i.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Trailing slashes in a path pattern is now handled correctly. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1741"},"#1741")),Object(i.b)("li",{parentName:"ul"},"It is now disallowed to apply ",Object(i.b)("inlineCode",{parentName:"li"},"CorsDecorator")," more than once. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1740"},"#1740")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpTracingClient")," and ",Object(i.b)("inlineCode",{parentName:"li"},"HttpTracingService")," now adds a valid addressable ",Object(i.b)("inlineCode",{parentName:"li"},"http.url")," tag. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1733"},"#1733")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1762"},"#1762")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SessionProtocol")," and ",Object(i.b)("inlineCode",{parentName:"li"},"SerializationFormat")," are now added to ",Object(i.b)("inlineCode",{parentName:"li"},"http.protocol")," and ",Object(i.b)("inlineCode",{parentName:"li"},"http.serfmt")," tag instead.")),Object(i.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Artifact armeria-testing has been renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"armeria-testing-junit4"),". Please update your project dependencies. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1736"},"#1736")),Object(i.b)("li",{parentName:"ul"},"Many places in the public API that use ",Object(i.b)("inlineCode",{parentName:"li"},"HttpHeaders")," as a parameter or a return value have been changed due to the revamped ",Object(i.b)("inlineCode",{parentName:"li"},"HttpHeaders")," API. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1731"},"#1731")),Object(i.b)("li",{parentName:"ul"},"The following ",Object(i.b)("inlineCode",{parentName:"li"},"ServerBuilder")," methods were removed:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"virtualHost(VirtualHost)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"defaultVirtualHost(VirtualHost)"))))),Object(i.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Deprecations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The default prefix found in various configuration properties has been deprecated. Use the property setters without the default prefix. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1737"},"#1737")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = new ServerBuilder();\n// Do NOT use this:\nsb.defaultRequestTimeout(...);\n// Use this:\nsb.requestTimeout(...);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"HttpHeaders.EMPTY")," has been deprecated. Use ",Object(i.b)("inlineCode",{parentName:"p"},"HttpHeaders.of()"),"."))),Object(i.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dropwizard Metrics 4.0.5 -> 4.1.0"),Object(i.b)("li",{parentName:"ul"},"Jetty 9.4.17 -> 9.4.18"),Object(i.b)("li",{parentName:"ul"},"Project Reactor 3.2.8 -> 3.2.9")),Object(i.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),Object(i.b)(c,{usernames:["anuraaga","codefromthecrypt","delegacy","ejona86","hyangtack","huydx","karthikraman22","masonshin","matsumana","minwoox","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-85-0-mdx-c8f4f056ecdf11564762.js.map