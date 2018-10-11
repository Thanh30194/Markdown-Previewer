/* jshint esversion: 6 */

const initInput = 
`Ant-man
=======
Quantum-physics
---------------
or you can make a header like this
## Doctor Strange
and make bolded text **magical**.

Here's a quote for you:
> When everything seems to be going against you, 
> remember that the airplane takes off against the wind, not with it.

You can learn anything follow this [link](https://www.youtube.com).

Inline code \`content.innerHTML = marked(editor.value);\`.
\`\`\`
// My codeblock:
editor.addEventListener("input", () => {
document.querySelector("#preview").innerHTML = 
marked(editor.value);
}); 
\`\`\`

My reading list: 
- War and Peace
- Antifragile
- Harry Potter

My todo list: 
1. Coding
2. Coding
3. Coding
4. Add an image
![Beautiful picture](https://bbvaopen4u.com/sites/default/files/styles/big-image/public/img/new/bbva-open4u-javascript.jpg?itok=6VzPgr4K)
`;


var editor = document.querySelector("#editor");
var content = document.querySelector("#preview");
var clear = document.querySelector("button");

// make new option for marked method
// open link in new tab
var renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
	return `<a target="_blank" href=${href}>${text}</a>`;
};
// carriage returns == breaks
marked.setOptions({
	gfm: true,
	breaks: true,
	renderer: renderer
});

// main mission
editor.value = initInput;
content.innerHTML = marked(editor.value);

editor.addEventListener("input", () => {
	document.querySelector("#preview").innerHTML = marked(editor.value);
}); 

// clear both panels
clear.addEventListener("click", () => {
	editor.value = ``;
	content.innerHTML = ``;
});

