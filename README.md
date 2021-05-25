# Pedro's Vizzuality front-end code challenge

Hi there!
You can check the live project here: [https://pedrogpimenta.github.io/vizzuality-code-challenge/](https://pedrogpimenta.github.io/vizzuality-code-challenge/).

- I've used a regular `create-react-app` to build the project (so just `yarn install && yarn start` or `npm install && npm start`).
- I used the App component as the main wrapper and Legend as an independent component so that it could possibly be included wherever it is needed.
- For state management I used regular React class component state on App.js. I did this because it would be overkill to add redux or a different library for this small project. Ideally we would need a centralized state machine that would distribute the state through all components. I emulated that by passing values and functions down, but I wouldn't do this in the real world.
- I also put the collapse/visibility values of each Legend Item here because we would need to pass those values (at least visibility) to other components (the Map in this case) so I thought I'd do this for all of them for simplicity.
- I have used TailwindCSS for the majority of styles because you mentioned you sometimes use it and I'm used to it.
- I have "standardized" margins, paddings and font styles as I see fit. In the real world, I'd consult with the designers first.
- The modal is super basic. There was no design and I almost forgot about it :)
- Of the optional tasks, I made 1 and left 2 due to time constraints:
  - Didn't add the possibility to add text to an item
  - Made the items sortable using `react-sortable-hoc`
  - Didn't build the timeline component
- I have used some external libraries for the modal, dragging items, tooltips and collapse animations. They are tested and apparently very flexible. Most were for scope/time reasons, but `react-sortable-hoc` I think I'd use it anyways, because it's a very solid library for a very complex interaction.
- I built a small&dumb "Icon" component to simulate a library. In the real world, depending on the project I would outright use a library or build a more robust one with the needed icons.
