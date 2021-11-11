"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[208],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),v=o,f=u["".concat(i,".").concat(v)]||u[v]||d[v]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5955:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],p={},i="Advanced Server",l={unversionedId:"advanced-examples/hello-world-advanced",id:"advanced-examples/hello-world-advanced",isDocsHomePage:!1,title:"Advanced Server",description:"",source:"@site/docs/advanced-examples/hello-world-advanced.md",sourceDirName:"advanced-examples",slug:"/advanced-examples/hello-world-advanced",permalink:"/zio-http/docs/advanced-examples/hello-world-advanced",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CORS Handling",permalink:"/zio-http/docs/advanced-examples/cors"},next:{title:"Sticky Threads",permalink:"/zio-http/docs/advanced-examples/sticky-threads"}},s=[],d={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-server"},"Advanced Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\nimport zhttp.service._\nimport zhttp.service.server.ServerChannelFactory\nimport zio._\n\nimport scala.util.Try\n\nobject HelloWorldAdvanced extends App {\n  // Set a port\n  private val PORT = 8090\n\n  private val fooBar: HttpApp[Any, Nothing] = HttpApp.collect {\n    case Method.GET -> !! / "foo" => Response.text("bar")\n    case Method.GET -> !! / "bar" => Response.text("foo")\n  }\n\n  private val app = HttpApp.collectM {\n    case Method.GET -> !! / "random" => random.nextString(10).map(Response.text)\n    case Method.GET -> !! / "utc"    => clock.currentDateTime.map(s => Response.text(s.toString))\n  }\n\n  private val server =\n    Server.port(PORT) ++              // Setup port\n      Server.paranoidLeakDetection ++ // Paranoid leak detection (affects performance)\n      Server.app(fooBar +++ app)      // Setup the Http app\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {\n    // Configure thread count using CLI\n    val nThreads: Int = args.headOption.flatMap(x => Try(x.toInt).toOption).getOrElse(0)\n\n    // Create a new server\n    server.make\n      .use(_ =>\n        // Waiting for the server to start\n        console.putStrLn(s"Server started on port $PORT")\n\n        // Ensures the server doesn\'t die after printing\n          *> ZIO.never,\n      )\n      .provideCustomLayer(ServerChannelFactory.auto ++ EventLoopGroup.auto(nThreads))\n      .exitCode\n  }\n}\n')))}u.isMDXComponent=!0}}]);