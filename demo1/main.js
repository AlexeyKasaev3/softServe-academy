import { drawChessBoard } from "./src/task1.js";
import { checkEnvelopes } from "./src/task2.js";
import { sortTriangles } from "./src/task3.js";
import { getBiggestPalindrome } from "./src/task4.js";
import { getHappyTickets } from "./src/task5.js";
import { getNumericalSequence } from "./src/task6.js";
import { getFibonacciRange } from "./src/task7.js";

document.body.addEventListener("click", clickRouter);

function clickRouter(e) {
  if (e.target.parentElement.id === "navigation") {
    handleNavigationClick(e);
    return;
  }
  if (e.target.getAttribute("type") === "reset") {
    handleResultsReset();
    return;
  }
}

function handleResultsReset() {
  document
    .querySelectorAll(".result")
    .forEach(
      resultField => (resultField.innerHTML = "Waiting form submitting")
    );
}

function handleNavigationClick(e) {
  [...e.target.parentElement.children].forEach(childNode =>
    childNode.classList.remove("selectedLink")
  );
  e.target.classList.add("selectedLink");

  [...document.getElementById("taskContainer").children].forEach(child =>
    child.classList.remove("taskSectionActive")
  );
  document
    .getElementById(e.target.getAttribute("data-to"))
    .classList.add("taskSectionActive");
  setTimeout(() => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }, 100);
}

const chessform = document.querySelector("#chessboard form");
chessform.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = extractFormData(chessform);
  const rows = toNum(formData.rows);
  const cols = toNum(formData.cols);
  const symbol = formData.symbol;
  try {
    const response = drawChessBoard(rows, cols, symbol);
    document.querySelector("#chessboard .result").innerHTML = response;
  } catch (e) {
    document.querySelector("#chessboard .result").innerHTML = e.message;
    console.log(JSON.parse(e.message));
  }
});

const envelopeform = document.querySelector("#envelopes form");
envelopeform.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = extractFormData(envelopeform);
  const envelope1sides = formData.envelope1sides.replace(/\s/g, "").split(",");
  const envelope2sides = formData.envelope2sides.replace(/\s/g, "").split(",");
  const envelope1 = {
    a: toNum(envelope1sides[0]),
    b: toNum(envelope1sides[1])
  };
  const envelope2 = {
    c: toNum(envelope2sides[0]),
    d: toNum(envelope2sides[1])
  };

  try {
    const response = checkEnvelopes(envelope1, envelope2);
    document.querySelector("#envelopes .result").innerHTML = response;
  } catch (e) {
    document.querySelector("#envelopes .result").innerHTML = e.message;
    console.log(JSON.parse(e.message));
  }
});

const trianglesform = document.querySelector("#triangles form");
trianglesform.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = extractFormData(trianglesform);
  const triangle1sides = formData.triangle1sides.replace(/\s/g, "").split(",");
  const triangle2sides = formData.triangle2sides.replace(/\s/g, "").split(",");
  const triangle3sides = formData.triangle3sides.replace(/\s/g, "").split(",");
  const triangles = [
    {
      vertices: formData.triangle1name,
      [`${formData.triangle1name[0]}`]: triangle1sides[0],
      [`${formData.triangle1name[1]}`]: triangle1sides[1],
      [`${formData.triangle1name[2]}`]: triangle1sides[2]
    }
  ];
  if (formData.triangle2name !== "") {
    triangles.push({
      vertices: formData.triangle2name,
      [`${formData.triangle2name[0]}`]: triangle2sides[0],
      [`${formData.triangle2name[1]}`]: triangle2sides[1],
      [`${formData.triangle2name[2]}`]: triangle2sides[2]
    });
  }
  if (formData.triangle3name !== "") {
    triangles.push({
      vertices: formData.triangle3name,
      [`${formData.triangle3name[0]}`]: triangle3sides[0],
      [`${formData.triangle3name[1]}`]: triangle3sides[1],
      [`${formData.triangle3name[2]}`]: triangle3sides[2]
    });
  }

  try {
    console.log(triangles);
    const response = sortTriangles(triangles);
    document.querySelector("#triangles .result").innerHTML = JSON.stringify(
      response
    );
  } catch (e) {
    document.querySelector("#triangles .result").innerHTML = e.message;
    console.log(JSON.parse(e.message));
  }
});

const palindromeform = document.querySelector("#palindrome form");
palindromeform.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = extractFormData(palindromeform);
  const num = toNum(formData.number);
  try {
    const response = getBiggestPalindrome(num);
    document.querySelector("#palindrome .result").innerHTML = response;
  } catch (e) {
    document.querySelector("#palindrome .result").innerHTML = e.message;
    console.log(JSON.parse(e.message));
  }
});

const ticketsform = document.querySelector("#happyTickets form");
ticketsform.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = extractFormData(ticketsform);
  const context = { min: formData.min, max: formData.max };
  try {
    const response = getHappyTickets(context);
    document.querySelector("#happyTickets .result").innerHTML = JSON.stringify(
      response
    );
  } catch (e) {
    document.querySelector("#happyTickets .result").innerHTML = e.message;
    console.log(JSON.parse(e.message));
  }
});

const numericalSequenceForm = document.querySelector("#numericalSequence form");
numericalSequenceForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = extractFormData(numericalSequenceForm);
  try {
    const response = getNumericalSequence(
      toNum(formData.seriesLength),
      toNum(formData.squaredNumber)
    );
    document.querySelector(
      "#numericalSequence .result"
    ).innerHTML = JSON.stringify(response);
  } catch (e) {
    document.querySelector("#numericalSequence .result").innerHTML = e.message;
    console.log(JSON.parse(e.message));
  }
});

const fibonacciRangeForm = document.querySelector("#fibonacciRange form");
fibonacciRangeForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = extractFormData(fibonacciRangeForm);
  let range;
  if(formData.max !== '') {
    range = {min: toNum(formData.min), max: toNum(formData.max)}
  } else {
    range = {length: toNum(formData.min)}
  }
  try {
    const response = getFibonacciRange(range);
    document.querySelector(
      "#fibonacciRange .result"
    ).innerHTML = JSON.stringify(response);
  } catch (e) {
    document.querySelector("#fibonacciRange .result").innerHTML = e.message;
    console.log(JSON.parse(e.message));
  }
});

function extractFormData(form) {
  const formData = {};
  form
    .querySelectorAll("input")
    .forEach(input => (formData[input.getAttribute("name")] = input.value));
  return formData;
}

function toNum(data) {
  return typeof data === "string" && data.length > 0 ? parseFloat(data) : "";
}
