## Configuration Options

### Things to Note

- The form factor options have different sizing than the other options:

  ![readme/profiler-head.png](readme/profiler-head.png)

  Note the `48px` padding on the right side. This is only present on the `xs` screen for these options.

- The configuration options have a subtle difference in the default state: they used `border-gray-300` where the images use `border-gray-200`.

- I noticed that Apple allows for arrow keyboard controls for these types of custom radio buttons. I kept it simple with just tab navigation because it seems tricky to implement tab + arrow keys and keep things intuitive. I'm also not sure if that's a best practice for accessibility.
