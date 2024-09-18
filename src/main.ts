#!/usr/bin/env deno run --allow-read --allow-write

import { parse } from "https://deno.land/std@0.177.0/flags/mod.ts";

class CodeSnippetGenerator {
    private templates: Record<string, string>;

    constructor() {
        this.templates = {
            "function": `
function {{functionName}}({{parameters}}) {
    // Your code here
    return {{returnValue}};
}
`,
            "class": `
class {{className}} {
    {{constructor}}

    {{methods}}
}
`,
            "interface": `
interface {{interfaceName}} {
    {{properties}}
}
`,
            "enum": `
enum {{enumName}} {
    {{enumValues}}
}
`,
            "type": `
type {{typeName}} = {{typeDefinition}};
`,
            "asyncFunction": `
async function {{functionName}}({{parameters}}): Promise<{{returnType}}> {
    // Your code here
}
`,
            "promiseFunction": `
function {{functionName}}({{parameters}}): Promise<{{returnType}}> {
    return new Promise((resolve, reject) => {
        // Your code here
    });
}
`,
            "arrowFunction": `
const {{functionName}} = ({{parameters}}): {{returnType}} => {
    // Your code here
};
`,
            "getter": `
get {{propertyName}}(): {{returnType}} {
    // Your code here
}
`,
            "setter": `
set {{propertyName}}(value: {{valueType}}) {
    // Your code here
}
`,
            "constructor": `
constructor({{parameters}}) {
    // Initialization code
}
`,
            "method": `
{{visibility}} {{methodName}}({{parameters}}): {{returnType}} {
    // Your code here
}
`,
            "abstractClass": `
abstract class {{className}} {
    abstract {{methodName}}(): {{returnType}};
}
`,
            "module": `
export module {{moduleName}} {
    {{exports}}
}
`,
            "namespace": `
namespace {{namespaceName}} {
    {{declarations}}
}
`,
            "interfaceImplementation": `
class {{className}} implements {{interfaceName}} {
    {{methods}}
}
`,
            "genericFunction": `
function <T>({{functionName}}(param: T): T {
    // Your code here
}
`,
            "decorator": `
function {{decoratorName}}(target: any, key: string, descriptor: PropertyDescriptor) {
    // Your code here
}
`,
            "typeAlias": `
type {{aliasName}} = {{type}};
`,
            "literalType": `
type {{typeName}} = '{{literal1}}' | '{{literal2}}';
`,
            "unionType": `
type {{typeName}} = {{type1}} | {{type2}};
`,
            "intersectionType": `
type {{typeName}} = {{type1}} & {{type2}};
`,
            "tupleType": `
type {{typeName}} = [{{element1}}, {{element2}}, {{element3}}];
`,
            "recordType": `
type {{typeName}} = Record<{{keyType}}, {{valueType}}>;
`,
            "functionType": `
type {{typeName}} = ({{parameters}}) => {{returnType}};
`,
            "classWithMethods": `
class {{className}} {
    {{methods}}
}
`,
            "abstractMethod": `
abstract class {{className}} {
    abstract {{methodName}}(): {{returnType}};
}
`,
            "typeUnion": `
type {{typeName}} = {{type1}} | {{type2}} | {{type3}};
`,
            "typeIntersection": `
type {{typeName}} = {{type1}} & {{type2}} & {{type3}};
`,
            "constant": `
const {{constantName}}: {{type}} = {{value}};
`,
            "letVariable": `
let {{variableName}}: {{type}} = {{value}};
`,
            "varVariable": `
var {{variableName}}: {{type}} = {{value}};
`,
            "exportFunction": `
export function {{functionName}}({{parameters}}): {{returnType}} {
    // Your code here
}
`,
            "importStatement": `
import { {{items}} } from '{{module}}';
`,
            "defaultExport": `
export default {{identifier}};
`,
            "defaultImport": `
import {{identifier}} from '{{module}}';
`,
            "interfaceWithMethods": `
interface {{interfaceName}} {
    {{methods}}
}
`,
            "abstractClassWithProperties": `
abstract class {{className}} {
    {{properties}}
}
`,
            "namespaceWithFunctions": `
namespace {{namespaceName}} {
    export function {{functionName}}({{parameters}}): {{returnType}} {
        // Your code here
    }
}
`,
            "functionWithDefaults": `
function {{functionName}}({{param1}}: {{type1}} = {{default1}}, {{param2}}: {{type2}} = {{default2}}): {{returnType}} {
    // Your code here
}
`,
            "constFunction": `
const {{functionName}} = ({{parameters}}): {{returnType}} => {
    // Your code here
};
`,
            "setMethod": `
set {{propertyName}}(value: {{type}}) {
    // Your code here
}
`
        };
    }

    generate(templateName: string, data: Record<string, string>): string {
        const template = this.templates[templateName];
        if (!template) {
            throw new Error(`Template "${templateName}" not found.`);
        }

        let code = template;
        for (const [key, value] of Object.entries(data)) {
            const placeholder = `{{${key}}}`;
            code = code.replace(new RegExp(placeholder, 'g'), value);
        }
        return code;
    }
}

const args = parse(Deno.args);
const templateName = args.template;
const data = args.data ? JSON.parse(args.data) : {};

if (!templateName) {
    console.error("Please provide a template name.");
    Deno.exit(1);
}

const generator = new CodeSnippetGenerator();
try {
    const snippet = generator.generate(templateName, data);
    console.log(snippet);
} catch (error) {
    console.error(error.message);
    Deno.exit(1);
}