function takeANumber(cusName, lineNum){
  lineNum = katzDeliLine.length
  katzDeliLine.push(cusName)
  return `Greetings, ${cusName}. You are number ${lineNum}.`
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
  
  while(katzDeliLine.length > 0){
   return 'The line is currently:' + katzDeliLine.cusName[i]
 }
}