function distanceFromHqInBlocks(distance){
   let blocks = Math.max(distance, 42)-Math.min(distance, 42)
  return  blocks
}
function distanceFromHqInFeet(distance){
    let feet =  (Math.max(distance, 42)-Math.min(distance, 42)) * 264
     return feet
}
function distanceTravelledInFeet(start, destination){
    let feet = (Math.max(start, destination)-Math.min(start, destination)) * 264
    return feet
}
function calculatesFarePrice(start, destination){
    let feet = (Math.max(start, destination)-Math.min(start, destination)) * 264
    if(feet<=400){
        return 0
    }
    if(feet>400 && feet<=2000){
        return (feet-400) * 0.02
    }
    if(feet>2000 && feet<=2500){
        return 25
    }
    if(feet>2500){
        return `cannot travel that far`
    }

}