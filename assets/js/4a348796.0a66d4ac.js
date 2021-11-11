"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[19],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],c={},i="Streaming Response",p={unversionedId:"advanced-examples/stream-response",id:"advanced-examples/stream-response",isDocsHomePage:!1,title:"Streaming Response",description:"",source:"@site/docs/advanced-examples/stream-response.md",sourceDirName:"advanced-examples",slug:"/advanced-examples/stream-response",permalink:"/zio-http/docs/advanced-examples/stream-response",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Streaming File",permalink:"/zio-http/docs/advanced-examples/stream-file"},next:{title:"Web Socket Server",permalink:"/zio-http/docs/advanced-examples/web-socket-advanced"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streaming-response"},"Streaming Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\nimport zhttp.service.Server\nimport zio._\nimport zio.stream.ZStream\n\n/**\n * Example to encode content using a ZStream\n */\nobject StreamingResponse extends App {\n  // Create a message as a Chunk[Byte]\n  val message = Chunk.fromArray("Hello world !\\r\\n".getBytes(HTTP_CHARSET))\n\n  // Use `Http.collect` to match on route\n  val app: HttpApp[Any, Nothing] = HttpApp.collect {\n\n    // Simple (non-stream) based route\n    case Method.GET -> !! / "health" => Response.ok\n\n    // ZStream powered response\n    case Method.GET -> !! / "stream" =>\n      Response.http(\n        status = Status.OK,\n        headers = List(Header.contentLength(message.length.toLong)),\n        content = HttpData.fromStream(ZStream.fromChunk(message)), \n            // Encoding content using a ZStream\n      )\n\n  }\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {\n\n    // Starting the server (for more advanced startup \n    // configuration checkout `HelloWorldAdvanced`)\n    Server.start(8090, app.silent).exitCode\n  }\n}\n\n')))}m.isMDXComponent=!0}}]);