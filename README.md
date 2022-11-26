<br />

UTILS
----------

`utils` is a general purpose [Typescript](tslang.org) library. 

It provides annotations, and classes to help make writing Typescript better.

<details>
    <summary>
        Table of Contents
    </summary>
    <ol>
        <li>
            <a href="#installation">Installation</a>
        </li>
        <li>
            <a href="#usage">General Usage</a>
        </li>
        <li>
            <a href="#documentaion">Documentation</a>
        </li>
    </ol>
</details>

----------

<!-- What's needed to use the lib -->
### Prerequisites
A general understanding of Typescript, generics, 
and Node/NPM.

For contributing it is expected that you understand the source code
behind the library, and the general layout of the source code within.

<!-- how to install the lib... -->
### Installation

This is a general example on how to install the utilities provided by this library.

* npm
  ```bash
  npm install @biased-ts/utils --save
  ```

<!-- Examples on how to use the lib -->
### Usage

Depending on your use case, and what portion of the utility library you are using, these examples can vary.

For now, we are simply going to cover using the Getter and Setter annotations.

```ts
// Base, using the annotations
import { Getter, Setter } from '@biased-ts/utils';

class YourClass
{
    @Getter @Setter
    private example: string;
}

// Turns into
class YourClass
{
    private example: string;

    set setExample(val: string): void
    {
        example = val;
    }

    get getExample(): string
    {
        return example;
    }
}
```


### Documentaion
<a name="documentaion"></a>
At this current point in time, any documentation provided for this library is
simply provided through using JSDoc comments; those are required to have
detailed examples, descriptions, and other data.


<!-- ROADMAP -->
## Roadmap

- [ ] Builder
- [ ] Constructors
    - [ ] AllArgsConstructor
    - [ ] SomeArgsConstructor

See the [open issues](https://github.com/biased-ts/utils/issues) for a full list of proposed features (and known issues).

### Acknowledgements

This section is here to give acknowledgement to anyone who contributes, or takes the time to
report any issues within the source code; any efforts are heavily appreciated. Thank you all
for your time, and thank you anybody who uses this. 

### Licencing

This project is "licenced" using the Unlicence licence, which makes this essentially have no licence,
you are free to use this project, encorperate it, or otherwise do as you please. Although we are not responsible for it.