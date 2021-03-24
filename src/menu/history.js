/* History Commands */

window.setup = window.setup || {};

// Undo Command
setup.undo = () => {
  window.history.back(); // load last checkpoint
  $("#back-button:focus").blur(); // unfocus the back button
}
// Restart
setup.restart = () => {
  console.info("localStorage = ", localStorage);
  story.history = []; // erase history (resets page visit counts)
  story.state = {}; // reset state

  // reset the startPassage variable to a passage with the tag 'start'
  const passages = story.passages.filter(p => p);
  const start = passages.find(p => p.tags.includes("start"));
  story.startPassage = start ? start.id : story.startPassage;
  story.show(story.startPassage); // load startPassage
}
// save a Snowman checkpoint on every passage.
$(window).on('sm.passage.shown', e => {
  story.checkpoint(); // required for "undo" to restore previous state
})