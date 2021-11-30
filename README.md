## HTML Setup (what elements do we need?)
1. 3 divs for cup images, inside one img container
    - Why?
    We need to show the user which cup the ball was hidden under.
    - How?
    Update the dom image element (img.src)
2. 3 button elements
    - Why?
    Tells us which cup the user picks, and when they pick it.
    - How?
    addEventListener to the buttons
3. 3 divs for Win/Loss/Total, inside a separate container
    - Why? 
    To display the current "state", 
    - How? 
    .textContent to update the corresponding <span> element

## Events
1. user clicks any of the 3 buttons
    - (reset image of all cups)
    
    ..set state..
    - increment total attempts
    - use math.random() to decide which cup is correct
    - we need to compare the correct cup with the cup the user clicked
        if the user clicked the correct cup, increment win
        if the user did NOT click the click correct cup, increment loss (because losses can be derived by subtracting wins from total attempts, WE SHOULD NOT TRACK as state)

    ..update DOM..
    - change image of correct cup
    - change number of Wins/loss/Attempts
    
2. **stretch** user clicks 'try again' button
    - (reset image of all cups)
