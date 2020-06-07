## Selectable Options Border Size

The image thumbnails and configuration options share nearly identical border properties. All the states except for
`selected` & `selected && focus` have a 1px border, but selected options have a 2px border. Increasing the border size
to 2px will cause a reflow of content and result in guaranteed jank.

There's a few ways to solve this problem:

- Double nest the inner elements: ex) `<div><div>Inner Content</div></div>`. Both elements would set a 1px border,
  but one of them is set to `transparent`. When selected, it changes color without triggering a reflow. This works well
  when elements have no border radius. When they do, you end up with gaps between the elements. It's also not very semantic.
  Too many issues.

- Use a box shadow disguised as border. This works well because box shadows don't affect the content flow. Problem is we're
  already using box shadow for the focus outline and the other states use shadow-sm. The box shadow property supports multiple
  comma separated shadow declarations, so I could create custom utility classes that combine the shadows I need to make this work.

- Use an absolutely positioned psuedo element. I was torn between hacking the box shadows or using a psuedo element, and I settled
  on this approach. Both of those solutions requires writing some css, and the psuedo element seemed simpler off the get go. After
  implementing, I'm still torn. It ended up being more complex than I'd hoped, and using pseudo elements makes it impossible to apply
  tailwind classes from a consumer to the pseudo element which could suck in a real app environment. If I had time, I'd probably go
  back and try the box-shadow hacks. I think it might end up as the simpler solution.

## Configuration Options

- The configuration options implement the ARIA `radiogroup` role, using the roving tabindex pattern. This pattern doesn't
  require setting `aria-activedescendant`, and instead sets the tabindex of any unselected options to `-1`. Tab allows you
  to jump focus between `radiogroups`, and the arrow keys are used to adjust selections within them.

- The `role="radiobutton"` items throw an error in accessibility checkers: "Form elements should have a visible label". I scoured the ARIA docs for the best solution here, and turns out the [official best practice example](https://w3c.github.io/aria-practices/examples/radio/radio-2/radio-2.html) fails too, so that's fun.

  ![readme/accessibility-failz.png](readme/accessibility-failz.png)

- The form factor options have different sizing than the other options:

  ![readme/profiler-head.png](readme/profiler-head.png)

  Note the `48px` padding on the right side. This is only present on the `xs` screen for these options.

- The configuration options have a subtle difference in the default state: they used `border-gray-300` where the images use `border-gray-200`.

## Specifications

- Not much to note here, other than how awesome `grid` works for definition lists!

## Footer

- During accessibility testing I learned that SVGs should have `role="img"` and `<title>` tags as the alternative to `alt`.

- Starting price from the header doesn't match the base price in the footer when base config is selected, but I figured that's not important.

- "Need a financing?" Is in the designs. Figured it's a typo.
