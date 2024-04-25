let weight = 0
let height = 0
let BMI = 0
let category = ""
let parentEl = document.querySelector("body")

setTimeout(() => {
    let tag = `<p class="pButton" id="ie-btn" onclick="initialEnter()">[Start Process]</p>`
    parentEl.insertAdjacentHTML("beforeend",tag)
}, 1000)

function initialEnter() {
removeAnimation();  
const ieBtn = document.getElementById("ie-btn")
parentEl.removeChild(ieBtn)
setTimeout(() => {
    parentEl.insertAdjacentHTML("beforeend", setProcessCommand("Processing Command..."))
})
setTimeout(() => {
    removeAnimation();
    parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Please enter your weight in kilograms..."))
}, 1500)

setTimeout(() => {
    removeAnimation();
    parentEl.insertAdjacentHTML("beforeend", setInputWeightTag())
}, 2000)

}

function secondEnter() {
    removeAnimation();
    const inputWeight = document.getElementById("weight")
    const ieBtn = document.getElementById("ie-btn")

    if (parseInt(inputWeight.value)) {
        parentEl.removeChild(inputWeight)
        parentEl.removeChild(ieBtn)
        weight = inputWeight.value
        parentEl.insertAdjacentHTML("beforeend", setProcessCommand(`Processing command prompt(Weight: ${weight})...`))
        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Please enter your height in centimeters..."))
        }, 1500)
        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setInputHeightTag())
        }, 2000)

    } else {
        parentEl.removeChild(inputWeight)
        parentEl.removeChild(ieBtn)
        parentEl.insertAdjacentHTML("beforeend", setProcessError("Please enter a valid value..."))
        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Please enter your weight in kilograms..."))
        }, 1500)
        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setInputWeightTag())
        }, 2000)
    }
}

function thirdEnter() {
    removeAnimation();
    const inputHeight = document.getElementById("height")
    const ieBtn = document.getElementById("ie-btn")

    if (parseInt(inputHeight.value)) {
        parentEl.removeChild(inputHeight)
        parentEl.removeChild(ieBtn)
        height = inputHeight.value
        parentEl.insertAdjacentHTML("beforeend", setProcessCommand(`Processing command prompt(Height: ${height})...`))
        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setProcessCommand(`Calculating BMI (Weight: ${weight} Height: ${height})...`))
        }, 1500)
        BMI = weight / ((height / 100.0) * (height / 100.0))
        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setProcessCommand(`Your BMI is ${BMI}...`))
        }, 3000)

        if (BMI < 18.5) {
            category = "Underweight"
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            category = "Healthy Weight"
        }  else if (BMI >= 25 && BMI <= 29.9) {
            category = "Overweight"
        }  else if (BMI >= 30 && BMI <= 34.9) {
            category = "Obese Class I"
        }  else if (BMI >= 35 && BMI <= 39.9) {
            category = "Obese Class II"
        }  else if (BMI >= 40) {
            category = "Obese Class III"
        } 

        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setProcessCommand(`Status: ${category}...`))
            removeAnimation();
        }, 4500)

        
        if (category === "Underweight") {
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessCommand("You need more nutrients..."))
              removeAnimation();
            }, 6000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Gain weight gradually by adding healthy calories..."))
              removeAnimation();
            }, 7500)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Eat more frequently, including 3 main meals and 2-3 snacks per day..."))
              removeAnimation();
            }, 9000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Choose nutrient-dense foods, such as lean proteins, whole grains, and healthy fats..."))
              removeAnimation();
            }, 10500)
          } else if (category === "Healthy Weight") {
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessCommand("Congratulations! You are at a healthy weight..."))
              removeAnimation();
            }, 6000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Maintain your weight by continuing to eat a balanced diet and staying physically active..."))
              removeAnimation();
            }, 7500)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Aim for 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week..."))
              removeAnimation();
            }, 9000)
            setTimeout(() => {
                removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Drink Water and Stay Hydrated, and Limit Sugared Beverages..."))
              removeAnimation();
            }, 10500)
            setTimeout(() => {
                let tag = `<p class="pButton" onclick="refresh()">Start Again</p>`
                parentEl.insertAdjacentHTML("beforeend", tag)
            }, 12000)
          } else if (category === "Overweight") {
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessCommand("You are overweight..."))
              removeAnimation();
            }, 6000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Lose weight gradually by reducing daily caloric intake and increasing physical activity..."))
              removeAnimation();
            }, 7500)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Aim for a daily caloric deficit of 500-1000 calories to promote weight loss..."))
              removeAnimation();
            }, 9000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Incorporate strength training exercises to build muscle and boost metabolism..."))
              removeAnimation();
            }, 10500)
            setTimeout(() => {
                let tag = `<p class="pButton" onclick="refresh()">Start Again</p>`
                parentEl.insertAdjacentHTML("beforeend", tag)
            }, 12000)
          } else if (category === "Obese Class I") {
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessCommand("You are obese..."))
              removeAnimation();
            }, 6000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Lose weight rapidly by reducing daily caloric intake and increasing physical activity..."))
              removeAnimation();
            }, 7500)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Aim for a daily caloric deficit of 1000-1500 calories to promote weight loss..."))
              removeAnimation();
            }, 9000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Consult with a healthcare professional or registered dietitian to develop a personalized weight loss plan..."))
              removeAnimation();
            }, 10500)
            setTimeout(() => {
                let tag = `<p class="pButton" onclick="refresh()">Start Again</p>`
                parentEl.insertAdjacentHTML("beforeend", tag)
            }, 12000)
          } else if (category === "Obese Class II") {
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessCommand("You are severely obese..."))
              removeAnimation();
            }, 6000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Lose weight rapidly by reducing daily caloric intake and increasing physical activity..."))
              removeAnimation();
            }, 7500)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Aim for a daily caloric deficit of 1500-2000 calories to promote weight loss..."))
              removeAnimation();
            }, 9000)
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Consider consulting with a bariatrician or weight loss specialist for guidance and support..."))
              removeAnimation();
            }, 10500)
            setTimeout(() => {
                let tag = `<p class="pButton" onclick="refresh()">Start Again</p>`
                parentEl.insertAdjacentHTML("beforeend", tag)
            }, 12000)
          } else if (category === "Obese Class III") {
            setTimeout(() => {
              removeAnimation();
              parentEl.insertAdjacentHTML("beforeend", setProcessCommand("You are morbidly obese... "))
              removeAnimation();
            }, 6000)
            setTimeout(() => {
                removeAnimation();
                parentEl.insertAdjacentHTML("beforeend", setProcessCommand("Healthy lifestyle changes..."))
                removeAnimation();
              }, 7500)
              setTimeout(() => {
                removeAnimation();
                parentEl.insertAdjacentHTML("beforeend", setProcessCommand("Behavioral and psychological therapy..."))
                removeAnimation();
              }, 9000)
              setTimeout(() => {
                removeAnimation();
                parentEl.insertAdjacentHTML("beforeend", setProcessCommand("Surgical procedures..."))
                removeAnimation();
              }, 10500)
              setTimeout(() => {
                let tag = `<p class="pButton" onclick="refresh()">Start Again</p>`
                parentEl.insertAdjacentHTML("beforeend", tag)
            }, 12000)
        }

       
    } else {
        parentEl.removeChild(inputWeight)
        parentEl.removeChild(ieBtn)
        parentEl.insertAdjacentHTML("beforeend", setProcessError("Please enter a valid value..."))
        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setProcessRequest("Please enter your weight in kilograms..."))
        }, 1500)
        setTimeout(() => {
            removeAnimation();
            parentEl.insertAdjacentHTML("beforeend", setInputWeightTag())
        }, 2000)
    }
}

function refresh() {
    window.location.reload();
}

function removeAnimation() {
    document.querySelectorAll("p").forEach((pe) => {
        pe.style.borderRight = "none"
    })
}
function setProcessCommand(msg) {
    return `<div class="container"><p class="processCommand">${msg}</p></div><br>`
}
function setProcessRequest(msg) {
    return `<div class="container"><p class="processRequest">${msg}</p></div><br>`
}
function setProcessError(msg) {
    return `<div class="container"><p class="processError">${msg}</p></div><br>`
}
function setInputWeightTag() {
    return `<input type="number" id="weight" placeholder="Weight (kg)" /><p id="ie-btn" class="pButton" onclick="secondEnter()">[Enter]</p>`
}
function setInputHeightTag() {
    return `<input type="number" id="height" placeholder="Height (cm)" /><p id="ie-btn" class="pButton" onclick="thirdEnter()">[Enter]</p>`
}