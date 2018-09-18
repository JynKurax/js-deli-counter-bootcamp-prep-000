var katzDeliLine = []


function takeANumber(lineNum, cusName){
  
  katzDeliLine.push([cusName])
  lineNum = katzDeliLine.length
  return `Welcome, ${cusName}. You are number ${lineNum} in line.`
}

function nowServing(katzDeliLine){
  if(cusName.length > 0){
    return cusName[0]
    delete cusName[0]
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  function listReturn(){
  for (var i = 0; i < katDeliLine.length; i++){
    return `${i + 1}. ${cusName[i]}`
    i++
   }
  }
  if (katzDeliLine.length > 0){
   return 'The line is currently:' + listReturn
 } else {
   return "The line is currently empty."
 }
}