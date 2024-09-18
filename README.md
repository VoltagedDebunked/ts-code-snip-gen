# TypeScript Code Snippet Generator

This project is a **TypeScript Code Snippet Generator** built using Deno. It allows you to generate various code snippets from pre-defined templates using command-line arguments.

## Features

- 40 different templates for generating common TypeScript code structures.
- Easily extendable and customizable templates.
- Generates code using command-line commands.
- Supports JSON input for filling in template placeholders.

## Requirements

- [Deno](https://deno.land/) installed on your system.

## Installation

1. Clone the repository or copy the `main.ts` file to your project.
2. Ensure you have Deno installed. If not, install it from [Deno's official site](https://deno.land/manual@v1.28.0/getting_started/installation).

## Usage

To generate a code snippet, use the following command:

```bash
cd src
deno run --allow-read --allow-write main.ts generate <template-name> --data '<JSON-string>'
```

### Command Breakdown

- `deno run`: Executes the script with Deno.
- `generate <template-name>`: Specifies the template to use (e.g., `function`, `class`, `interface`, etc.).
- `--data '<JSON-string>'`: Provides the data required to populate the placeholders in the template in JSON format.

### Example Commands

1. **Generate a function:**

```bash
deno run --allow-read --allow-write main.ts generate function --data '{"functionName": "addNumbers", "parameters": "a: number, b: number", "returnValue": "a + b"}'
```

Generates:

```typescript
function addNumbers(a: number, b: number) {
    // Your code here
    return a + b;
}
```

2. **Generate a class:**

```bash
deno run --allow-read --allow-write main.ts generate class --data '{"className": "Person", "constructor": "constructor(name: string) { this.name = name; }", "methods": "sayHello() { console.log(`Hello, ${this.name}`); }"}'
```

Generates:

```typescript
class Person {
    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}
```

3. **Generate an interface:**

```bash
deno run --allow-read --allow-write main.ts generate interface --data '{"interfaceName": "User", "properties": "name: string; age: number;"}'
```

Generates:

```typescript
interface User {
    name: string;
    age: number;
}
```

## Available Templates

Here are the available 40 templates:

- `function`
- `class`
- `interface`
- `enum`
- `type`
- `asyncFunction`
- `promiseFunction`
- `arrowFunction`
- `getter`
- `setter`
- `constructor`
- `method`
- `abstractClass`
- `module`
- `namespace`
- `interfaceImplementation`
- `genericFunction`
- `decorator`
- `typeAlias`
- `literalType`
- `unionType`
- `intersectionType`
- `tupleType`
- `recordType`
- `functionType`
- `classWithMethods`
- `abstractMethod`
- `typeUnion`
- `typeIntersection`
- `constant`
- `letVariable`
- `varVariable`
- `exportFunction`
- `importStatement`
- `defaultExport`
- `defaultImport`
- `interfaceWithMethods`
- `abstractClassWithProperties`
- `namespaceWithFunctions`
- `functionWithDefaults`
- `constFunction`
- `setMethod`

## Adding More Templates

You can add more templates by editing the `templates` object inside the `CodeSnippetGenerator` class. Each template uses placeholders in the form of `{{placeholderName}}` that will be replaced by the data passed through the `--data` option.

## License

This project is licensed under the Apache 2.0 License.