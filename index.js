

function takeANumber(lineName, cusName){
  lineName.push[cusName]
  return `Welcome, ${cusName}. You are number ${lineName.length} in line.`
}

function nowServing(lineName){
  if(lineName.length > 0){
    return lineName[0]
    delete lineName[0]
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(lineName){
  function listReturn(){
  for (var i = 0; i < lineName.length; i++){
    return `${i + 1}. ${lineName[i]}`
    i++
   }
  }
  if (lineName.length > 0){
   return 'The line is currently:' + listReturn
 } else {
   return "The line is currently empty."
 }
}