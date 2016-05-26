(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-graphql"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},F5Vl:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return c})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a("zLVn"),n=(a("q1tI"),a("7ljp")),i=a("xCMr"),c="RequestContext custom attributes",s={},o={pageTitle:c,_frontmatter:s},l=i.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(l,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"requestcontext-custom-attributes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#requestcontext-custom-attributes","aria-label":"requestcontext custom attributes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(n.b)("inlineCode",{parentName:"h1"},"RequestContext")," custom attributes"),Object(n.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#setting-attributes-using-typewebclientrequestpreparation"},"Setting attributes using type://WebClientRequestPreparation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#setting-attributes-using-typerequestoptions"},"Setting attributes using type://RequestOptions"))),Object(n.b)("p",null,"When you are using multiple decorators, you might want to pass some value to the next decorator.\nYou can do this by attaching attributes to a ",Object(n.b)("a",{parentName:"p",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext"),". To attach an attribute,\nyou need to define an ",Object(n.b)("inlineCode",{parentName:"p"},"AttributeKey")," first:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import io.netty.util.AttributeKey;\n\npublic final class MyAttributeKeys {\n    public static final AttributeKey<Integer> INT_ATTR =\n            AttributeKey.valueOf(MyAttributeKeys.class, "INT_ATTR");\n    public static final AttributeKey<MyBean> BEAN_ATTR =\n            AttributeKey.valueOf(MyAttributeKeys.class, "BEAN_ATTR");\n    ...\n}\n')),Object(n.b)("p",null,"Then, you can access them via ",Object(n.b)("a",{parentName:"p",href:"type://RequestContext#attr(AttributeKey):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#attr(io.netty.util.AttributeKey)"},"type://RequestContext#attr(AttributeKey)"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},"// Setting\nctx.setAttr(INT_ATTR, 42);\nMyBean myBean = new MyBean();\nctx.setAttr(BEAN_ATTR, new MyBean());\n\n// Getting\nInteger i = ctx.attr(INT_ATTR); // i == 42\nMyBean bean = ctx.attr(BEAN_ATTR); // bean == myBean\n")),Object(n.b)("p",null,"You can also iterate over all the attributes in a context using ",Object(n.b)("a",{parentName:"p",href:"type://RequestContext#attrs():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#attrs()"},"type://RequestContext#attrs()"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'ctx.attrs().forEachRemaining(e -> {\n    System.err.println(e.getKey() + ": " + e.getValue());\n});\n')),Object(n.b)("h2",{id:"setting-attributes-using-typewebclientrequestpreparation",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#setting-attributes-using-typewebclientrequestpreparation","aria-label":"setting attributes using typewebclientrequestpreparation permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Setting attributes using ",Object(n.b)("a",{parentName:"h2",href:"type://WebClientRequestPreparation:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClientRequestPreparation.html"},"type://WebClientRequestPreparation")),Object(n.b)("p",null,"You can set attributes when building a request using ",Object(n.b)("a",{parentName:"p",href:"type://WebClient#prepare():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html#prepare()"},"type://WebClient#prepare()"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.WebClient;\n\nstatic final AttributeKey<Integer> USER_ID = AttributeKey.valueOf(MyAttributeKeys.class, "USER_ID");\nstatic final AttributeKey<String> USER_SECRET = AttributeKey.valueOf(MyAttributeKeys.class, "USER_SECRET");\n\nWebClient client = WebClient.of("http://example.com"); \nclient.prepare()\n      .get("/my-service")\n      .attr(USER_ID, userId)\n      .attr(USER_SECRET, secret)\n      .execute();\n')),Object(n.b)("h2",{id:"setting-attributes-using-typerequestoptions",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#setting-attributes-using-typerequestoptions","aria-label":"setting attributes using typerequestoptions permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Setting attributes using ",Object(n.b)("a",{parentName:"h2",href:"type://RequestOptions:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/RequestOptions.html"},"type://RequestOptions")),Object(n.b)("p",null,"You can also create a ",Object(n.b)("a",{parentName:"p",href:"type://RequestOptions:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/RequestOptions.html"},"type://RequestOptions")," and pass it\nto ",Object(n.b)("a",{parentName:"p",href:"type://WebClient#execute(HttpRequest,RequestOptions):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html#execute(com.linecorp.armeria.common.HttpRequest,com.linecorp.armeria.client.RequestOptions)?full"},"type://WebClient#execute(HttpRequest,RequestOptions)?full")," with an ",Object(n.b)("a",{parentName:"p",href:"type://HttpRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpRequest.html"},"type://HttpRequest"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.RequestOptions;\nimport com.linecorp.armeria.common.HttpRequest;\n\nHttpRequest req = HttpRequest.of(HttpMethod.GET, "/my-service");\nRequestOptions options = RequestOptions.builder()\n                                       .attr(USER_ID, userId)\n                                       .attr(USER_SECRET, secret)\n                                       .build();\nclient.execute(req, options);\n')))}p.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var r=a("Wbzz"),n=a("q1tI"),i=a.n(n),c=a("/94A"),s=a("+ejy");t.a=function(e){var t=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-custom-attributes-mdx-62b5e9b9bd8c40dcdfd4.js.map