(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],v=0,u=[];v<o.length;v++)r=o[v],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("8c4f"),i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(" Dependency Injection Container ")]),a("p",[a("strong",[e._v("QuillStack DI")]),e._v(" is the dependency injection container based on "),a("a",{staticClass:"link",attrs:{href:"https://www.php-fig.org/psr/psr-11/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" PSR-11: Container interface")]),e._v(". The library was built with the main goal: to be fast! ")]),a("h3",[e._v(" Table of contents ")]),a("p",[e._v(" 1. "),a("a",{staticClass:"link",attrs:{href:"#what-is-a-di-container"}},[e._v("What is a DI Container?")]),a("br"),e._v(" 1.1. "),a("a",{staticClass:"link",attrs:{href:"#repository-service-pattern"}},[e._v("The Repository-Service Pattern")]),a("br"),e._v(" 1.2. "),a("a",{staticClass:"link",attrs:{href:"#mvc-pattern"}},[e._v("MVC Pattern")]),a("br"),e._v(" 2. "),a("a",{staticClass:"link",attrs:{href:"#installation"}},[e._v("Installation")]),a("br"),e._v(" 3. "),a("a",{staticClass:"link",attrs:{href:"#usage"}},[e._v("Usage")]),a("br"),e._v(" 3.1. "),a("a",{staticClass:"link",attrs:{href:"#simple-usage"}},[e._v("Simple usage")]),a("br"),e._v(" 3.2. "),a("a",{staticClass:"link",attrs:{href:"#dependencies-based-on-interfaces"}},[e._v("Dependencies based on interfaces")]),a("br"),e._v(" 3.3. "),a("a",{staticClass:"link",attrs:{href:"#dependencies-with-parameters"}},[e._v("Dependencies with parameters")])]),a("h2",[a("a",{attrs:{name:"what-is-a-di-container"}},[e._v("What is the DI Container?")])]),a("p",[e._v(" Every time you need a create a new instance of some class, you use the keyword "),a("em",[e._v("new")]),e._v(", like here: ")]),a("div",{staticClass:"code"},[a("p",[e._v(" $dog = new Dog('Forest'); ")])]),a("p",[e._v(" In our example the string parameter "),a("em",[e._v("Forest")]),e._v(", which is a lovely name for a dog, is a dependency we need to know when we're creating a new "),a("em",[e._v("Dog")]),e._v(" object. ")]),a("p",[e._v(" Of course our example is very simple. Life brings us more difficult problems to solve. ")]),a("h3",[a("a",{attrs:{name:"repository-service-pattern"}},[e._v("The Repository-Service Pattern")])]),a("p",[e._v(" One of the most popular design patterns is "),a("em",[e._v("the Repository-Service pattern")]),e._v(". More complex systems requires layers of abstraction, to keep the code maintainable and easy to understand, learn, and extend. This pattern is a good example of the usage for containers. ")]),a("p",[a("em",[e._v("The Repository-Service pattern")]),e._v(" allows you to separate two layers from the rest of you application. ")]),a("p",{staticClass:"glue-top"},[a("strong",[e._v("Services")]),e._v(" provide some business logic and can be used e.g. in Controllers or other Services. ")]),a("p",{staticClass:"glue-top"},[a("strong",[e._v("Repositories")]),e._v(" are the data access layer and can connect e.g. to the database, and should be used only in Services. ")]),a("p",[e._v(" In that way we can end up with a lot of dependencies, usually injected via constructors: ")]),a("div",{staticClass:"code"},[a("p",[a("span",[e._v("$media = new MediaService(")]),a("span",{staticClass:"i-1"},[e._v("new Logger(),")]),a("span",{staticClass:"i-1"},[e._v("new MediaRepository(")]),a("span",{staticClass:"i-2"},[e._v("new Database(),")]),a("span",{staticClass:"i-2"},[e._v("new Logger()")]),a("span",{staticClass:"i-1"},[e._v(")")]),a("span",[e._v(");")])])]),a("p",[e._v(" Do we want to remember all these classes when we need to have an instance of the Media Service? No! ")]),a("p",[e._v(" This is a moment when a container helps us to sort it out and change it to this: ")]),a("div",{staticClass:"code"},[a("p",[a("span",[e._v("$media = $container->get(")]),a("span",{staticClass:"i-1"},[e._v("MediaService::class")]),a("span",[e._v(");")])])]),a("p",[e._v(" So much better! And there's no magic. The dependency injection container checks every parameter of the given class and create a new instance of required objects. If these classes are dependent on other objects, the DI Container also creates them. ")]),a("p",[e._v(" The implementation of this kind of library is very often based on recursion. ")]),a("h3",[a("a",{attrs:{name:"mvc-pattern"}},[e._v("MVC Pattern")])]),a("p",[e._v(" Containers are often used in MVC frameworks. The first initialized class is a "),a("em",[e._v("Controller")]),e._v(", where we can inject some dependencies, usually services: ")]),a("div",{staticClass:"code"},[a("p",[a("span",[e._v("new MediaController(")]),a("span",{staticClass:"i-1"},[e._v("new MediaService(")]),a("span",{staticClass:"i-2"},[e._v("new Logger(),")]),a("span",{staticClass:"i-2"},[e._v("new MediaRepository(")]),a("span",{staticClass:"i-2"},[a("span",{staticClass:"i-1"},[e._v("new Database(),")])]),a("span",{staticClass:"i-2"},[a("span",{staticClass:"i-1"},[e._v("new Logger()")])]),a("span",{staticClass:"i-2"},[e._v(")")]),a("span",{staticClass:"i-1"},[e._v(")")]),a("span",[e._v(");")])])]),a("p",[e._v(" Without a DI Container our life is hard. We can easily fix it: ")]),a("div",{staticClass:"code"},[a("p",[a("span",[e._v("$media = $container->get(")]),a("span",{staticClass:"i-1"},[e._v("MediaController::class")]),a("span",[e._v(");")])])]),a("p",[e._v(" All of this work is done by framework for us, so we don't have to worry about it. ")]),a("h2",[a("a",{attrs:{name:"installation"}},[e._v("Installation")])]),a("p",[e._v(" To install this package, run the standard command using "),a("a",{staticClass:"link",attrs:{target:"_blank",href:"https://getcomposer.org/",rel:"noopener noreferrer"}},[e._v("Composer")]),e._v(": ")]),a("div",{staticClass:"code"},[a("p",[e._v(" composer require quillstack/di ")])]),a("p",[e._v(" The package will be ready to use after that. ")]),a("h2",[a("a",{attrs:{name:"usage"}},[e._v("Usage")])]),a("p",[e._v(" You can use QuillStack DI when you want: ")]),a("ul",{staticClass:"list-disc"},[a("li",[e._v("To have a simple and fast DI container.")]),a("li",[e._v("Define dependencies based on interfaces.")]),a("li",[e._v("Define parameters e.g. credentials for a database in "),a("em",[e._v("Database")]),e._v(" class.")])]),a("h3",[a("a",{attrs:{name:"simple-usage"}},[e._v("Simple usage")])]),a("p",[e._v(" You can easily start using a DI Container: ")]),a("div",{staticClass:"code"},[a("p",[a("span",{staticClass:"mb-4"},[e._v("<?php")]),a("span",{staticClass:"mb-4"},[e._v("use QuillStack\\DI\\Container;")]),a("span",{staticClass:"mb-4"},[e._v("require __DIR__ . '/../vendor/autoload.php';")]),a("span",[e._v("$container = new Container();")]),a("span",[e._v("$controller = $container->get(")]),a("span",{staticClass:"i-1"},[e._v("ExampleController::class")]),a("span",[e._v(");")])])]),a("p",[e._v(" This code creates an instance of the container class. The container creates every class with "),a("em",[e._v("get")]),e._v(" method, in our case it will be "),a("em",[e._v("ExampleController")]),e._v(". ")]),a("h3",[a("a",{attrs:{name:"dependencies-based-on-interfaces"}},[e._v("Dependencies based on interfaces")])]),a("p",[e._v(" If you want to define which class should be loaded based on an interface, you can easily do that: ")]),a("div",{staticClass:"code"},[a("p",[a("span",[e._v("$container = new Container([")]),a("span",{staticClass:"i-1"},[e._v("LoggerInterface::class => Logger::class,")]),a("span",[e._v("]);")])])]),a("p",[e._v(" When you create a new container, you can define a configuration of interfaces and class which should be use when these interfaces are called. ")]),a("p",[e._v(" In this example everytime when "),a("em",[e._v("LoggerInterface")]),e._v(" will be used as a dependency, an object of "),a("em",[e._v("Logger")]),e._v(" class will be injected. ")]),a("p",[e._v(" It's very useful when you want to use an implementation of some interface, but you want to keep your code open to changes of this implementation in the future. If you decide to do that, you'll have to change just one line. ")]),a("h3",[a("a",{attrs:{name:"dependencies-with-parameters"}},[e._v("Dependencies with parameters")])]),a("p",[e._v(" If some of your classes require parameters, define them as an array passed on the second parameter to the container: ")]),a("div",{staticClass:"code"},[a("p",[a("span",[e._v("$container = new Container([], [")]),a("span",{staticClass:"i-1"},[e._v("Database::class => [")]),a("span",{staticClass:"i-2"},[e._v("'hostname' => 'localhost',")]),a("span",{staticClass:"i-1"},[e._v("],")]),a("span",[e._v("]);")])])]),a("p",[e._v(" Of course you can take the value of the hostname from the configuration files. ")])])}],o={name:"DependencyInjection"},l=o,c=a("2877"),p=Object(c["a"])(l,i,r,!1,null,null,null),v=p.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(" QuillStack ")]),a("p",[e._v(" Components: ")]),a("ul",{staticClass:"list-disc"},[a("li",[a("router-link",{staticClass:"link",attrs:{to:{name:"di"}}},[e._v(" Dependency Injection Container ")])],1)])])},d=[],h={name:"HomePage"},_=h,m=Object(c["a"])(_,u,d,!1,null,null,null),f=m.exports;n["a"].use(s["a"]);var w=[{path:"/di/",name:"di",component:v,meta:{title:"QuillStack - Dependency Injection"}},{path:"/",name:"home",component:f,meta:{title:"QuillStack"}}],y=new s["a"]({mode:"history",base:"/",routes:w}),g=y,b=(a("6672"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("my-header"),a("router-view"),a("my-footer")],1)}),C=[],k={watch:{$route:{immediate:!0,handler:function(e){document.title=e.meta.title||"QuillStack",document.body.scrollTop=0,document.documentElement.scrollTop=0}}}},S=k,j=Object(c["a"])(S,b,C,!1,null,null,null),D=j.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"mt-32"},[a("p",[e._v(" © 2020 "),a("router-link",{staticClass:"link",attrs:{to:{name:"home"}}},[e._v(" The Quill Stack ")])],1)])},x=[],T={name:"Footer"},O=T,$=Object(c["a"])(O,I,x,!1,null,null,null),M=$.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-11/12 md:w-1/3 lg:w-1/4 my-4 pl-2 mx-auto"},[a("router-link",{attrs:{to:{name:"home"}}},[a("img",{staticClass:"mx-auto",attrs:{src:"https://quillstack.com/quillstack.png",alt:"The Quill Stack"}})])],1)},E=[],L={name:"Header"},Q=L,R=Object(c["a"])(Q,P,E,!1,null,null,null),q=R.exports;n["a"].config.productionTip=!1,n["a"].component("my-footer",M),n["a"].component("my-header",q),new n["a"]({router:g,render:function(e){return e(D)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},6672:function(e,t,a){}});
//# sourceMappingURL=app.5dc9ae88.js.map