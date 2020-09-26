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
        <div class="toc">
            <h3 class="text-center">
                Table of contents
            </h3>
            <ol class="list-decimal main">
                <li>
                    <a href="#" class="link" v-scroll-to="'#what-is-a-di-container'">
                        What is a DI Container?
                    </a>
                </li>
                <ul class="list-disc">
                    <li>
                        <a href="#" class="link" v-scroll-to="'#repository-service-pattern'">
                            The Repository-Service Pattern
                        </a>
                    </li>
                    <li>
                        <a href="#" class="link" v-scroll-to="'#mvc-pattern'">
                            MVC Pattern
                        </a>
                    </li>
                </ul>
                <li>
                    <a href="#" class="link" v-scroll-to="'#installation'">
                        Installation
                    </a>
                </li>
                <li>
                    <a href="#" class="link" v-scroll-to="'#usage'">
                        Usage
                    </a>
                </li>
                <ul class="list-disc">
                    <li>
                        <a href="#" class="link" v-scroll-to="'#simple-usage'">
                            Simple usage
                        </a>
                    </li>
                    <li>
                        <a href="#" class="link" v-scroll-to="'#dependencies-based-on-interfaces'">
                            Dependencies based on interfaces
                        </a>
                    </li>
                    <li>
                        <a href="#" class="link" v-scroll-to="'#dependencies-with-parameters'">
                            Dependencies with parameters
                        </a>
                    </li>
                </ul>
            </ol>
        </div>
        <h2 id="what-is-a-di-container">
            What is the DI Container?
        </h2>
        <p>
            Every time you need a create a new instance of some class, you use the keyword <em>new</em>, like here:
        </p>
        <code-php :lines="newDog"></code-php>
        <p>
            In our example the string parameter <em>Forest</em>, which is a lovely name for a dog, is a dependency we
            need to know when we're creating a new <em>Dog</em> object.
        </p>
        <p>
            Of course our example is very simple. Life brings us more difficult problems to solve.
        </p>
        <h3 id="repository-service-pattern">
            The Repository-Service Pattern
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
        <h3 id="mvc-pattern">
            MVC Pattern
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
        <h2 id="installation">
            Installation
        </h2>
        <p>
            To install this package, run the standard command using
            <a class="link" target="_blank" href="https://getcomposer.org/" rel="noopener noreferrer">Composer</a>:
        </p>
        <div class="code">
            <ul class="main">
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
        <h2 id="usage">
            Usage
        </h2>
        <p>
            You can use QuillStack DI when you want:
        </p>
        <ul class="list-disc main">
            <li>To have a simple and fast DI container.</li>
            <li>Define dependencies based on interfaces.</li>
            <li>Define parameters e.g. credentials for a database in <em>Database</em> class.</li>
        </ul>
        <h3 id="simple-usage">
            Simple usage
        </h3>
        <p>
            You can easily start using a DI Container:
        </p>
        <code-php :lines="simpleUsage"/>
        <p>
            This code creates an instance of the container class. The container creates every class with <em>get</em>
            method, in our case it will be <em>ExampleController</em>.
        </p>
        <h3 id="dependencies-based-on-interfaces">
            Dependencies based on interfaces
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
        <h3 id="dependencies-with-parameters">
            Dependencies with parameters
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
import CodePhp from '@/components/CodePhp';

export default {
    name: 'DependencyInjection',
    head: {
        title: 'Dependency Injection - QuillStack'
    },
    components: {
        CodePhp
    },
    data() {
        return {
            newDog: [
                "$dog = new Dog('Forest');"
            ],
            lotOfDependencies: [
                "$media = new MediaService(",
                "    new Logger(), new MediaRepository(",
                "        new Database(), new Logger()",
                "    )",
                ");"
            ],
            mediaService: [
                "$media = $container->get(MediaService::class);"
            ],
            mvcDependencies: [
                "new MediaController(",
                "    new MediaService(",
                "        new Logger(), new MediaRepository(",
                "            new Database(), new Logger()",
                "        )",
                "    )",
                ");"
            ],
            mvcContainer: [
                "$media = $container->get(MediaController::class);"
            ],
            simpleUsage: [
                "<?php",
                "    ",
                "use QuillStack\\DI\\Container;",
                "    ",
                "require __DIR__ . '/../vendor/autoload.php';",
                "    ",
                "$container = new Container();",
                "$controller = $container->get(ExampleController::class);"
            ],
            interfaces: [
                "$container = new Container([",
                "    LoggerInterface::class => Logger::class,",
                "]);"
            ],
            parameters: [
                "$container = new Container([",
                "    Database::class => [",
                "        'hostname' => 'localhost',",
                "    ],",
                "]);"
            ]
        }
    }
};
</script>
