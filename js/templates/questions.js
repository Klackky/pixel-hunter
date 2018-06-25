/**
 * Function selects which level we need to render
 *
 * @function renderQuestions
 * @param {object} level current level
 * @return {string} string we`re appending to the dom
 */

const renderQuestions = (level) => {
  if (level.gameType === `game1`) {
    return `
    <form class="game__content">
    ${level.questions.map((question, index) => `<div class="game__option">
          <img src="${question.src}" alt="Option ${index}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question${index}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question${index}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`).join(``)
}</form>`;
  }
  if (level.gameType === `game2`) {
    return `
      <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${level.questions[0].src}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    </form>
    `;
  }
  return `
  <form class="game__content  game__content--triple">
  ${level.questions.map((question, index) => `<div class="game__option">
          <img src="${question.src}" alt="Option ${index}" width="304" height="455">
        </div>`)
}</form>
`;

};
export default renderQuestions;