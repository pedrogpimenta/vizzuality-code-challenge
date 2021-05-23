# Pedro's Vizzuality front-end code challenge

Hi there! I'm adding some notes, so you don't need to guess :)

- I've used a regular create-react-app to build the project (so just `yarn install && yarn start` or `npm install && npm start`).
- I used a React state only on the parent component (App.js). I didn't made collapse/visibility inside each components because there's a need to pass those values globally (to show or hide info on the supposed map). Due to the scope of the project I think it would be overkill to add a library like react-redux.
- I have used TailwindCSS for the majority of styles because you mentioned it and I'm used to it.
- I have "standardized" margins, paddings and font styles as I see fit. In the real world, I'd consult with the designers first.
- The modal is super basic. There was no design and I almost forgot about it :)
- Of the optional tasks, I made 1 and left 2 due to time constraints:
  - Didn't add the possibility to add text to an item
  - Made the items sortable
  - Didn't build the timeline component
- I have used some external libraries for the modal, dragging items, tooltips and collapse animations. They are tested and apparently very flexible. Most were for scope/time reasons, but react-draggable I think I'd use it anyways, because it's a very solid library for a very complex interaction.
- I built a small&dumb "Icon" component to simulate a library. In the real world, depending on the project I would outright use a library or build a more robust one with the needed icons.