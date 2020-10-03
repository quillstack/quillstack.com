<template>
    <div>
        <h1>
            Headers
        </h1>
        <p>
            Header Bag is a small library which helps manage headers. It's useful in HTTP request or response
            classes. This library covers part of
            <a class="link" href="https://www.php-fig.org/psr/psr-7/#12-http-headers" target="_blank" rel="noopener noreferrer">
                PSR-7: HTTP message</a>.
        </p>
        <div class="toc">
            <h3 class="text-center">
                Table of contents
            </h3>
            <ol class="list-decimal main">
                <li>
                    <a href="#" class="link" v-scroll-to="'#what-are-headers'">
                        What are headers?
                    </a>
                </li>
                <li>
                    <a href="#" class="link" v-scroll-to="'#installation'">
                        Installation
                    </a>
                </li>
            </ol>
        </div>
        <h2 id="what-are-headers">
            What are headers?
        </h2>
        <p>
            Headers are part of the request and the response in HTTP. It's not just a simple array of values.
            Field names are case-insensitive, you can overwrite any header. You can also use multiple values,
            so you decide if you need to retrieve a header as an array or a string.
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
                        composer require quillstack/header-bag
                    </span>
                </li>
            </ul>
        </div>
        <p>
            The package will be ready to use after that.
        </p>
    </div>
</template>

<script>
export default {
    name: 'Headers',
    head: {
        title: 'Headers - QuillStack'
    }
}
</script>
