// Check the fill in the blanks section
function checkFill()
{
    // Disable the checking button and input field
    document.getElementById("fillBtn").disabled = true;
    document.getElementById("fillr1").disabled = true;

    console.log("checking fill in the blank");

    // Initialize response and anszone
    response = document.getElementById("fillr1").value;
    anszone = document.getElementById("fillS");
    console.log(`checkFill(${response})`);

    // Check the answer
    if (response == "coal")
    {
        anszone.innerHTML = "Correct!"
    }
    else
    {
        anszone.innerHTML = "Incorrect... the right answer is <b>coal</b>."
    }
}

function checkChoice()
{
    // Disable the checking button
    document.getElementById("choiceBtn").disabled = true;

    console.log("checking radio buttons");

    // Check the answer
    if (document.getElementById("nuclear").checked)
    {
        document.getElementById("choiceS").innerHTML = "Correct!";
    }
    else
    {
        document.getElementById("choiceS").innerHTML = "Incorrect... the right answer is <b>nuclear</b>.";
    }
}

function checkBox()
{
    // Disable the checking button
    document.getElementById("boxBtn").disabled = true;

    console.log("checking checkboxes");

    // Initialize the "boxes" array and add the right values to it
    boxes = [];
    for (i = 0; i < 4; i++)
    {
        boxes.push((document.getElementsByName("a3")[i]).checked);
    }
    console.log(boxes);
    console.log([true, true, false, false]);
    console.log(boxes == [true, true, false, false])

    // Checks the answer
    if (boxes[0] == true && boxes[1] == true && boxes[2] == false && boxes[3] == false)
    {
        console.log("Correct");
        document.getElementById("boxS").innerHTML = "Correct!";
    }
    else
    {
        document.getElementById("boxS").innerHTML = "Incorrect... the right answer is <b>Carbon Dioxide</b> and <b>Methane</b>.";
    }
}
