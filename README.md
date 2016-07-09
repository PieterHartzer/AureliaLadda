This attribute can be used in Aurelia to add Ladda functionality to an element.  Not all elements works, but buttons, hyperlinks and divs seems to work.

## Installation ##

1. Install spin.js
 `jspm install spin=github:fgnass/spin.js/`

2. Install Ladda
`jspm install ladda=github:hakimel/Ladda`

3. Change config.js to resemble
`"spin": "github:fgnass/spin.js@2.3.2",
"ladda": "github:hakimel/Ladda@1.0.0",
"github:hakimel/Ladda@1.0.0": {
      "spin": "github:fgnass/spin.js@2.3.2"
}`

## Usage ##
1. Import the Ladda style
`<link rel="stylesheet" href="styles/ladda-themeless.min.css">`

2. Pull the ladda-command in where you want to use it - or globally
    `<require from="./ladda-command"></require>`
    
3. Set up the Ladda button like usual
`<button ladda-command="command.bind: doSomething" type="button" class="btn btn-primary ladda-button" data-style="zoom-out">Click me</button>`

4. Add the ladda-command attribute and bind it to a function that should be called when the button is clicked.  
**This function must return a promise**
`ladda-command="command.bind: doSomething"`

## Notes ##
This is not bulletproof and was just done for what I needed it.  Since I could not find anything like this I figured that I might as well make it public.
