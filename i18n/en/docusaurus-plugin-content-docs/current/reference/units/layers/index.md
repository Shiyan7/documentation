---
sidebar_position: 1
---

# Layer

The first level of application partitioning, according to the **scope of influence** of the module

![layers-flow-themed](/img/layers_flow.png)

## Structure

```sh
└── src/
    ├── app/                    # Initializing application logic
    ├── processes/              # (Optional) Application processes running over pages
    ├── pages/                  # Application pages
    ├── widgets/                # Self-sufficient UI blocks emerged from the composition of lower-level units
    ├── features/               # (Optional) Processing of user scenarios
    ├── entities/               # (Optional) Business entities that domain logic operates with
    └── shared/                 # Reused modules, non business specific
```

## Rules

- Each layer is located only at the topmost level, and cannot occur again at another nesting level

    ```diff
    // Bad
    - pages/../features/..
    - features/../entities/..
    // Good
    + pages/**
    + features/**
    ```

<!-- use: https://www.tablesgenerator.com/markdown_tables# -->

- Each layer can use (import) only the underlying layers
- The higher the layer is located, the higher the level of its responsibility and knowledge about other layers (from top to bottom)
  - `app` > (`processes`) > `pages` > (`widgets`) > `features` > `entities` > `shared`
- The lower the layer is located , the more it is used in the upper layers, and therefore the more dangerous it is to make changes to it (from bottom to top)
  - `shared` > `entities` > `features` > (`widgets`) > `pages` > (`processes`) > `app`

| Layer     |                              Can use                              |                         Can be used by                         |
|-----------|:-----------------------------------------------------------------:|:--------------------------------------------------------------:|
| app       | `shared`, `entities`, `features`, `widgets`, `pages`, `processes` |                                -                               |
| processes |        `shared`, `entities`, `features`, `widgets`, `pages`       |                              `app`                             |
| pages     |            `shared`, `entities`, `features`, `widgets`            |                       `processes`, `app`                       |
| widgets   |                  `shared`, `entities`, `features`                 |                   `pages`, `processes`, `app`                  |
| features  |                        `shared`, `entities`                       |             `widgets`, `pages`, `processes`, `app`             |
| entities  |                              `shared`                             |       `features`, `widgets`, `pages`, `processes`, `app`       |
| shared    |                                 -                                 | `entities`, `features`, `widgets`, `pages`, `processes`, `app` |

## How to use?

1. **First, decompose by main layers relevant to almost any application:**
    - `app` - for initializing application logic
    - `pages` - for application screens
    - `shared` - for abstract commonly used logic (UIKIT / helpers / API)

2. **Then, add the remaining layers as needed:**
    - `widgets` - if the logic on the pages starts to grow and / or duplicate
    - `entities` - if the amount of deunified logic is growing in the project
    - `features` - if it becomes difficult to find the boundaries of specific user scenarios in the project, and control them
    - `processes` - if a lot of "end-to-end logic" grows over the page

:::note

It should be understood that not all of the above layers are mandatory, but are needed only when **the complexity of the project and the swelling responsibility** in the existing structure require it

:::

## See also

- [Naming adaptability][refs-naming-adaptability]
- [Example: Viewer][refs-example-viewer]
  - *Example of logic distribution by layers: from `shared` to `app`*
- [About understanding the needs of users and the functionality of the application][refs-needs]
  - *To understand the `features` layer*
- [(Discussion) About reused modules][disc-sharing]
  - *To understand the `shared` layer*

[refs-naming-adaptability]: /docs/about/understanding/naming
[refs-needs]: /docs/about/understanding/needs-driven

[refs-low-coupling]: /docs/reference/isolation/coupling-cohesion
[refs-example-viewer]: /docs/guides/examples/auth

[refs-app]: /docs/reference/units/layers/app
[refs-processes]: /docs/reference/units/layers/processes
[refs-pages]: /docs/reference/units/layers/pages
[refs-widgets]: /docs/reference/units/layers/widgets
[refs-features]: /docs/reference/units/layers/features
[refs-entities]: /docs/reference/units/layers/entities
[refs-shared]: /docs/reference/units/layers/shared

[refs-segments]: /docs/reference/units/segments
[refs-segments--ui]: /docs/reference/units/segments#ui
[refs-segments--model]: /docs/reference/units/segments#model
[refs-segments--lib]: /docs/reference/units/segments#lib
[refs-segments--api]: /docs/reference/units/segments#api
[refs-segments--config]: /docs/reference/units/segments#config

[disc-sharing]: https://github.com/feature-sliced/documentation/discussions/14