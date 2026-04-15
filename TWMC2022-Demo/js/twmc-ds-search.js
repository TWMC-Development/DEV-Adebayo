let searchTitle = document.querySelector('#twmc-ds__search-title');
let title = document.querySelector('.twmc-ds__title');
let searchVal;

searchTitle.addEventListener('keydown', function() {
    searchVal = this.value.toLowerCase();

    for (var i = 0; i < title.length; i++) {
        if (!searchVal || title[i].textContent.toLowerCase().indexOf(searchVal) > -1) {
            title[i].style['display'] = 'flex';
            console.log(title[i]);
        } else {
            title[i].style['display'] = 'none';
            console.log("Title not found!");
        }
    }
});



// Copy to clipboard
function copyCodeBlock() {
    // let copyCode = document.querySelectorAll("pre.twmc-ds__code");
    // copyCode.innerText();


    let copyCode = document.getElementsByClassName('twmc-ds__code');
    console.log(copyCode);

    // copyCode.select();
    // copyText.setSelectionRange(0, 99999);

    // navigator.clipboard.writeText(copyCode.value);
    

    // alert('Copied the text: ' + copyCode.value);
}

// Example
const copyButtonLabel = "Copy Code";

// you can use a class selector instead if you, or the syntax highlighting library adds one to the 'pre'. 
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");
    button.classList.add('twmc--btn--copy');

    button.innerText = copyButtonLabel;
    button.addEventListener("click", copyCode);
    block.appendChild(button);
  }
});

async function copyCode(event) {
  const button = event.srcElement;
  const pre = button.parentElement;
  let code = pre.querySelector("code");
  let text = code.innerText;
  await navigator.clipboard.writeText(text);
  
  button.innerText = "Code Copied";
  
  setTimeout(()=> {
    button.innerText = copyButtonLabel;
  },1000)
}
