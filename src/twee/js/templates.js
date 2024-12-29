const Templates = (window.Templates = window.T = {});
{
  const contentWarningInline = (...warnings) =>
    `<em>(<abbr title="Content Warning">CW</abbr>: ` +
    warnings
      .sort()
      .map((w) => `<span style="white-space:nowrap;">${w}.</span>`)
      .join(" ") +
    `)</em>`;

  const contentWarningParagraph = (...warnings) =>
    `<p class="content-warning"><b>Content warning</b>: ` +
    warnings
      .sort()
      .map((w) => `<span style="white-space:nowrap;">${w}.</span>`)
      .join(" ") +
    `</p>`;

  const infoMessage = (msg) =>
  `ⓘ <i>${msg}</i>`;
  const infoMessageBox = (msg) => 
  `<p class="content-warning">${infoMessage(msg)}</p>`;

  const restart = () => passage.render(`<a0 onclick="setup.restart()">Restart.</a>`);

  const rewind = () => passage.render(`<a0 onclick="setup.rewind()">Rewind.</a>`);

  // Templates for Hazel Epilogue

  const socialMediaComment = ([username, comment]) =>
    `<p><b>${username}</b> ${comment}</p>`;

  const hashtag = (tag) => `<span aria-label="hashtag">#</span>${tag}`;

  const likes = (likes) =>
    `<p class="social-card__likes"><span aria-label="${+likes | 0} likes">♡ ${
      +likes | 0
    }</span></p>`;

  const hoursAgo = (hours) =>
    `${+hours | 0}<span aria-label="hours">h</span> ago`;
  const minutesAgo = (mins) =>
    `${+mins | 0}<span aria-label="minutes">m</span> ago`;

  const socialMediaCard = ({
    name,
    username,
    time,
    body,
    hashtags,
    likeCount,
    comments,
  }) =>
    `<div class="contact-card">
    <p>${name} <small>${username} – ${time}</small></p>
    <div class="contact-card__body">${body}</div>
    <p><small>${(hashtags || []).map(hashtag).join(" ")}</small>
    ${likes(likeCount)}
    ${
      comments
        ? `<div.social-card__comments>${(comments || [])
            .map(socialMediaComment)
            .join("\n")}</div>`
        : ``
    }
</div>`;

const contact = ({ icon, name, pronouns, species, email, position, status }) => `<div class="social-card">
<img class="social-card-icon" src="assets/images/contact/${icon}.webp">
<div class="social-card-body">
<div><b>${name}</b> <small>${pronouns ?? ""}</small></div>
<div><small><b>Species:</b> ${species}</small></div>
<div><small><b>Position:</b> ${position}</small></div>
<div><small><b>Email:</b> ${email}</small></div>
</div>
</div>`;

  Object.assign(window.Templates, {
    CWI: contentWarningInline,
    contentWarningInline,
    CWP: contentWarningParagraph,
    contentWarningParagraph,
    infoMessage,
    infoMessageBox,
    restart,
    rewind,
    hoursAgo,
    hashtag,
    minutesAgo,
    socialMediaCard,
    contact,
  });
}
