<template>
    <div class="code">
        <ul v-if="areLinesLoaded">
            <li v-for="line in getLines" v-html="line"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CodePhp',
    props: {
        lines: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            markers: {
                class: '💥',
                variable: '💧',
                string: '💣',
                keyword: '⚽',
                char: '✅',
                method: '🔮'
            },
            keywords: [
                'new',
                'class',
                'require',
                '<?php',
                'use',
            ],
            const: [
                '__DIR__',
            ],
            chars: [
                '(',
                ')',
                ';',
                '=',
                ',',
                ':',
                '-',
                '>',
                '<',
                '?',
                '.',
                '[',
                ']',
            ],
        };
    },
    methods: {
        markClassNames(line) {
            let previousWordWasNew = false;

            const words = line.split(' ');
            const markedWords = words.map(word => {
                if (previousWordWasNew) {
                    previousWordWasNew = false;

                    return this.markers.class + word + this.markers.class;
                }

                if (word === 'new') {
                    previousWordWasNew = true;
                }

                return word;
            });

            return markedWords.join(' ');
        },
        markStrings(line) {
            let stringBeginWasSet = false;
            let stringChar = "'";

            if (line.includes('"')) {
                stringChar = '"';
            }

            const words = line.split(/(?='|")/);
            const markedWords = words.map(word => {
                const firstLetter = word.charAt(0);
                const wordNoStringChar = word.replace(stringChar, '');

                if (stringBeginWasSet) {
                    stringBeginWasSet = false;

                    return wordNoStringChar;
                }

                if (firstLetter === '"' || firstLetter === "'") {
                    stringBeginWasSet = true;

                    return this.markers.string + stringChar + wordNoStringChar + stringChar + this.markers.string;
                }

                return wordNoStringChar;
            });

            return markedWords.join('');
        },
        markVariablesAndKeywords(line) {
            const words = line.split(' ');
            const markedWords = words.map(word => {
                const firstLetter = word.charAt(0);

                if (firstLetter === '$' || this.const.includes(word)) {
                    return this.markers.variable + word + this.markers.variable;
                }

                if (this.keywords.includes(word)) {
                    return this.markers.keyword + word + this.markers.keyword;
                }

                return word;
            });

            return markedWords.join(' ');
        },
        markSpecialCharacters(line) {
            if (this.keywords.includes(line)) {
                return line;
            }

            let stringBeginWasSet = false;
            let stringChar = "'";

            if (line.includes('"')) {
                stringChar = '"';
            }

            const chars = line.split('');
            const markedChars = chars.map(char => {
                if (char === '"' || char === "'") {
                    stringBeginWasSet = !stringBeginWasSet;
                }

                if (stringBeginWasSet) {
                    return char;
                }

                if (this.chars.includes(char)) {
                    return this.markers.char + char + this.markers.char;
                }

                return char;
            });

            return markedChars.join('');
        },
        markMethodCall(line) {
            const replace = `\-\>(.+)\\(`;
            const regexp = new RegExp(replace,'g');
            const marker = this.markers.method;

            return line.replaceAll(regexp, marker + '->$1(' + marker);
        },
        markImports(line) {
            const marker = this.markers.class;

            return line.replaceAll(/use (.*?);/g, 'use ' + marker + '$1' + marker + ';');
        },
        markClassNameStatic(line) {
            const marker = this.markers.class;
            const keyword = this.markers.keyword;

            return line.replaceAll(/([_a-zA-Z]+)::class/g, marker + '$1::' + marker + keyword + 'class' + keyword);
        },
        getMarkerToRegexp(marker) {
            return `${marker}([^${marker}]*)${marker}`;
        },
        getMarkerToClassRegexp(marker) {
            return `${marker}(.*?)${marker}`;
        },
        convertMethodCallsToHtml(line) {
            const replace = this.getMarkerToRegexp(this.markers.method);
            const regexp = new RegExp(replace,'g');

            return line.replaceAll(regexp, '<span class="method">$1</span>');
        },
        convertVariablesAndKeywordToHtml(line) {
            const replace = this.getMarkerToRegexp(this.markers.variable);
            const regexp = new RegExp(replace,'g');

            return line.replaceAll(regexp, '<span class="variable">$1</span>');
        },
        convertClassNamesToHtml(line) {
            const replace = this.getMarkerToClassRegexp(this.markers.class);
            const regexp = new RegExp(replace,'g');

            return line.replaceAll(regexp, '<span class="class">$1</span>');
        },
        convertCharsToHtml(line) {
            const replace = this.getMarkerToRegexp(this.markers.char);
            const regexp = new RegExp(replace,'g');

            return line.replaceAll(regexp, '<span class="char">$1</span>');
        },
        convertKeywordsToHtml(line) {
            const replace = this.getMarkerToRegexp(this.markers.keyword);
            const regexp = new RegExp(replace,'g');

            return line.replaceAll(regexp, '<span class="keyword">$1</span>');
        },
        convertStringsToHtml(line) {
            const replace = this.getMarkerToRegexp(this.markers.string);
            const regexp = new RegExp(replace,'g');

            return line.replaceAll(regexp, '<span class="string">$1</span>');
        },
        escapeHtml(line) {
            return line.replace('<', '&lt;');
        },
        addIntents(line) {
            return line.replaceAll('    ', '<span class="intent"></span>');
        }
    },
    computed: {
        areLinesLoaded() {
            if (typeof this.lines === 'object') {
                return Object.keys(this.lines).length;
            }

            return this.lines.length;
        },
        getLines() {
            return this.lines
                .map(line => this.markClassNameStatic(line))
                .map(line => this.markClassNames(line))
                .map(line => this.markImports(line))
                .map(line => this.markMethodCall(line))
                .map(line => this.markStrings(line))
                .map(line => this.markSpecialCharacters(line))
                .map(line => this.markVariablesAndKeywords(line))
                .map(line => this.escapeHtml(line))
                .map(line => this.convertClassNamesToHtml(line))
                .map(line => this.convertCharsToHtml(line))
                .map(line => this.convertKeywordsToHtml(line))
                .map(line => this.convertStringsToHtml(line))
                .map(line => this.convertMethodCallsToHtml(line))
                .map(line => this.convertVariablesAndKeywordToHtml(line))
                .map(line => this.addIntents(line))
            ;
        }
    }
}
</script>
