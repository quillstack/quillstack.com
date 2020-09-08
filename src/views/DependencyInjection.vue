<template>
    <div>
        <h1>
            Dependency Injection Container
        </h1>
        <p>
            <strong>QuillStack DI</strong> is the dependency injection container based on
            <a class="link" href="https://www.php-fig.org/psr/psr-11/" target="_blank" rel="noopener noreferrer">
                PSR-11: Container interface</a>.
            The library was built with the main goal: to be fast!
        </p>
        <h3>
            Table of contents
        </h3>
        <p>
            1. <a class="link" href="#what-is-a-di-container">What is a DI Container?</a><br>
            1.1. <a class="link" href="#repository-service-pattern">The Repository-Service Pattern</a><br>
            1.2. <a class="link" href="#mvc-pattern">MVC Pattern</a><br>
            2. <a class="link" href="#installation">Installation</a><br>
            3. <a class="link" href="#usage">Usage</a><br>
            3.1. <a class="link" href="#simple-usage">Simple usage</a><br>
            3.2. <a class="link" href="#dependencies-based-on-interfaces">Dependencies based on interfaces</a><br>
            3.3. <a class="link" href="#dependencies-with-parameters">Dependencies with parameters</a>
        </p>
        <h2>
            <a name="what-is-a-di-container">What is the DI Container?</a>
        </h2>
        <p>
            Every time you need a create a new instance of some class, you use the keyword <em>new</em>, like here:
        </p>
        <code-php :lines="newDog"/>
        <p>
            In our example the string parameter <em>Forest</em>, which is a lovely name for a dog, is a dependency we
            need to know when we're creating a new <em>Dog</em> object.
        </p>
        <p>
            Of course our example is very simple. Life brings us more difficult problems to solve.
        </p>
        <h3>
            <a name="repository-service-pattern">The Repository-Service Pattern</a>
        </h3>
        <p>
            One of the most popular design patterns is <em>the Repository-Service pattern</em>. More complex systems
            requires layers of abstraction, to keep the code maintainable and easy to understand, learn, and extend.
            This pattern is a good example of the usage for containers.
        </p>
        <p>
            <em>The Repository-Service pattern</em> allows you to separate two layers from the rest of you application.
        </p>
        <p class="glue-top">
            <strong>Services</strong> provide some business logic and can be used e.g. in Controllers or other Services.
        </p>
        <p class="glue-top">
            <strong>Repositories</strong> are the data access layer and can connect e.g. to the database, and should
            be used only in Services.
        </p>
        <p>
            In that way we can end up with a lot of dependencies, usually injected via constructors:
        </p>
        <code-php :lines="lotOfDependencies"/>
        <p>
            Do we want to remember all these classes when we need to have an instance of the Media Service? No!
        </p>
        <p>
            This is a moment when a container helps us to sort it out and change it to this:
        </p>
        <code-php :lines="mediaService"/>
        <p>
            So much better! And there's no magic. The dependency injection container checks every parameter of the given
            class and create a new instance of required objects. If these classes are dependent on other objects,
            the DI Container also creates them.
        </p>
        <p>
            The implementation of this kind of library is very often based on recursion.
        </p>
        <h3>
            <a name="mvc-pattern">MVC Pattern</a>
        </h3>
        <p>
            Containers are often used in MVC frameworks. The first initialized class is a <em>Controller</em>, where
            we can inject some dependencies, usually services:
        </p>
        <code-php :lines="mvcDependencies"/>
        <p>
            Without a DI Container our life is hard. We can easily fix it:
        </p>
        <code-php :lines="mvcContainer"/>
        <p>
            All of this work is done by framework for us, so we don't have to worry about it.
        </p>
        <h2>
            <a name="installation">Installation</a>
        </h2>
        <p>
            To install this package, run the standard command using
            <a class="link" target="_blank" href="https://getcomposer.org/" rel="noopener noreferrer">Composer</a>:
        </p>
        <div class="code">
            <ul>
                <li>
                    <span class="char">
                        composer require quillstack/di
                    </span>
                </li>
            </ul>
        </div>
        <p>
            The package will be ready to use after that.
        </p>
        <h2>
            <a name="usage">Usage</a>
        </h2>
        <p>
            You can use QuillStack DI when you want:
        </p>
        <ul class="list-disc">
            <li>To have a simple and fast DI container.</li>
            <li>Define dependencies based on interfaces.</li>
            <li>Define parameters e.g. credentials for a database in <em>Database</em> class.</li>
        </ul>
        <h3>
            <a name="simple-usage">Simple usage</a>
        </h3>
        <p>
            You can easily start using a DI Container:
        </p>
        <code-php :lines="simpleUsage"/>
        <p>
            This code creates an instance of the container class. The container creates every class with <em>get</em>
            method, in our case it will be <em>ExampleController</em>.
        </p>
        <h3>
            <a name="dependencies-based-on-interfaces">Dependencies based on interfaces</a>
        </h3>
        <p>
            If you want to define which class should be loaded based on an interface, you can easily do that:
        </p>
        <code-php :lines="interfaces"/>
        <p>
            When you create a new container, you can define a configuration of interfaces and class which should be
            use when these interfaces are called.
        </p>
        <p>
            In this example everytime when <em>LoggerInterface</em> will be used
            as a dependency, an object of <em>Logger</em> class will be injected.
        </p>
        <p>
            It's very useful when you want to use an implementation of some interface, but you want to keep your code
            open to changes of this implementation in the future. If you decide to do that, you'll have to change
            just one line.
        </p>
        <h3>
            <a name="dependencies-with-parameters">Dependencies with parameters</a>
        </h3>
        <p>
            If some of your classes require parameters, define them as an array passed on the second parameter to
            the container:
        </p>
        <code-php :lines="parameters"/>
        <p>
            Of course you can take the value of the hostname from the configuration files.
        </p>
    </div>
</template>

<script>
import CodePhp from "@/components/CodePhp";
import NewDog from '@/content/code-php/di/new-dog.json';
import LotOfDependencies from '@/content/code-php/di/lot-of-dependencies.json';
import MediaService from '@/content/code-php/di/media-service.json';
import MvcDependencies from '@/content/code-php/di/mvc-dependencies.json';
import MvcContainer from '@/content/code-php/di/mvc-container.json';
import SimpleUsage from '@/content/code-php/di/simple-usage.json';
import Interfaces from '@/content/code-php/di/interfaces.json';
import Parameters from '@/content/code-php/di/parameters.json';

export default {
    name: 'DependencyInjection',
    components: {CodePhp},
    data() {
        return {
            newDog: [],
            lotOfDependencies: [],
            mediaService: [],
            mvcDependencies: [],
            mvcContainer: [],
            simpleUsage: [],
            interfaces: [],
            parameters: []
        }
    },
    mounted() {
        this.newDog = NewDog;
        this.lotOfDependencies = LotOfDependencies;
        this.mediaService = MediaService;
        this.mvcDependencies = MvcDependencies;
        this.mvcContainer = MvcContainer;
        this.simpleUsage = SimpleUsage;
        this.interfaces = Interfaces;
        this.parameters = Parameters;
    }
};
</script>
