const STANDARDPRICE= 7565
const PREMIUMPRICE= 12345
const EXCELIUMPRICE= 15400

const STANDARDPERCENTAGE= .1
const PREMIUMPERCENTAGE= .13
const EXCILIUMPERCENTAGE= .16

$('#quote').keyup(function() {
    let number_apartments = $('#apartments').val()
    let number_floors =$('#floors').val()
    let number_basements=$('#basements').val()
    let number_companies=$("#companies").val()
    let number_parking_spots=$("#parking").val()
    let number_elevators= $('#elevators').val()
    let elevator_amount=$ ("#final-number").val()
    let elevator_prices=$ ("#total-elevator-cost")
    let elevator_install= $ ("#install-cost").val()
    let final_cost= $ ("#final-cost").val()
    let number_corporations= $("corporations")
    let max_occupants_floor=$("max-occupants-floor")
    let elevator_quality=$('input[name="selectMe"]:checked').val()
    //Check which building type has been selected
    let building_type = $('#building-type').val()
    console.log($('input[name="selectMe"]:checked').val()) // debug
    console.log(building_type)                             // debug         
​
    
    if(building_type == 'residential') {
        //Do residential calculation
        if(elevator_quality== 'standard'){
            numElevators= Math.ceil(number_apartments/number_floors/6)
            console.log(numElevators + 'standard')
            $('#final-number[name=final-number]').val(numElevators)
            let elevator_cost= numElevators*STANDARDPRICE
            $('#total-elevator-cost[name=res-elevators-cost]').val(elevator_cost)
            let install_cost= elevator_cost*STANDARDPERCENTAGE
            $("#install-cost[name=res-install]").val(install_cost)
            let total_cost= elevator_cost+install_cost
            $("#final-cost[name=res-final-price]").val(total_cost) 
​
        }else if(elevator_quality== 'premium'){
            numElevators= Math.ceil(number_apartments/number_floors/6)
            console.log(numElevators +'premium')
            $('#final-number[name=final-number-1]').val(numElevators)
            let elevator_cost= numElevators*PREMIUMPRICE
            console.log(elevator_cost)
            $('#total-elevator-cost[name=res-elevators-cost-1]').val(elevator_cost)
            let install_cost= elevator_cost*PREMIUMPERCENTAGE
            $("#install-cost[name=res-install-1]").val(install_cost)
            let total_cost= elevator_cost+install_cost
            $("#final-cost[name=res-final-price-1]").val(total_cost) 

        }else if(elevator_quality== 'excelium'){
            numElevators= Math.ceil(number_apartments/number_floors/6)
            / $('#final-number[name=final-number-2]').val(numElevators)
            let elevator_cost= numElevators*EXCELIUMPRICE
            $('#total-elevator-cost[name=res-elevators-cost-2').val(elevator_cost)
            let install_cost= elevator_cost*EXCELIUMPERCENTAGE
            $("#install-cost[name=res-install-2]").val(install_cost)
            let total_cost= elevator_cost+install_cost
            $("#final-cost[name=res-final-price-2]").val(total_cost) 
        }
      
    } else if (building_type == 'commercial'){
        if(elevator_quality== 'standard'){
            $('#final-number').val(numElevators)
            let elevator_cost= numElevators*STANDARDPRICE
            let elevator_install= elevator_cost*STANDARDPERCENTAGE
            let total_cost= elevator_cost+elevator_install
        }else if(elevator_quality== 'premium'){
            $('#final-number').val(numElevators)
            let elevator_cost= numElevators*PREMIUMPRICE
            let elevator_install= elevator_cost*PREMIUMPERCENTAGE
            let total_cost= elevator_cost+elevator_install
        }else if(elevator_quality== 'excelium'){
            $('#final-number').val(numElevators)
            let elevator_cost= numElevators*EXCELIUMPRICE
            let elevator_install= elevator_cost*EXCILIUMPERCENTAGE
            let total_cost= elevator_cost+elevator_install
        }
        //commercial calculations
    } else if (building_type == 'corporate'){ if(elevator_quality== 'standard'){
        numElevators= Math.ceil()
        console.log(numElevators)
       let all_floors= (number_floors+number_basements) 
       let total_occupants= (all_floors*max_occupants_floor)
       let elevator_amount= total_occupants/1000;
       let elevator_columns= all_floors/20;
       let elevators_per_column= elevator_amount/elevator_columns;
       let number_elevators= elevators_per_column*elevator_columns;
       let elevator_prices= number_elevators*7565;
       let elevator_install=elevator_prices*.1;
       let final_cost= elevator_install+elevator_prices;

    }else if(elevator_quality== 'premium'){
        numElevators= Math.ceil()
        console.log(numElevators)
       let all_floors= (number_floors+number_basements) 
       let total_occupants= (all_floors*max_occupants_floor)
       let elevator_amount= total_occupants/1000;
       let elevator_columns= all_floors/20;
       let elevators_per_column= elevator_amount/elevator_columns;
       let number_elevators= elevators_per_column*elevator_columns;
       let elevator_prices= number_elevators*12345;
       let elevator_install=elevator_prices*.13;
       let final_cost= elevator_install+elevator_prices;
    }else if(elevator_quality== 'excelium'){
        numElevators= Math.ceil()
        console.log(numElevators)
       let all_floors= (number_floors+number_basements) 
       let total_occupants= (all_floors*max_occupants_floor)
       let elevator_amount= total_occupants/1000;
       let elevator_columns= all_floors/20;
       let elevators_per_column= elevator_amount/elevator_columns;
       let number_elevators= elevators_per_column*elevator_columns;
       let elevator_prices= number_elevators*15400;
       let elevator_install=elevator_prices*.16;
       let final_cost= elevator_install+elevator_prices;
    }
        //corporate calculations
    } else if(building_type== "hybrid"){ if(elevator_quality== 'standard'){
        numElevators= Math.ceil()
        console.log(numElevators)
       let all_floors= (number_floors+number_basements) 
       let total_occupants= (all_floors*max_occupants_floor)
       let elevator_amount= total_occupants/1000;
       let elevator_columns= all_floors/20;
       let elevators_per_column= elevator_amount/elevator_columns;
       let number_elevators= elevators_per_column*elevator_columns;
       let elevator_prices= number_elevators*7565;
       let elevator_install=elevator_prices*.1;
       let final_cost= elevator_install+elevator_prices;


    }else if(elevator_quality== 'premium'){
        numElevators= Math.ceil()
        console.log(numElevators)
       let all_floors= (number_floors+number_basements) 
       let total_occupants= (all_floors*max_occupants_floor)
       let elevator_amount= total_occupants/1000;
       let elevator_columns= all_floors/20;
       let elevators_per_column= elevator_amount/elevator_columns;
       let number_elevators= elevators_per_column*elevator_columns;
       let elevator_prices= number_elevators*12345;
       let elevator_install=elevator_prices*.13;
       let final_cost= elevator_install+elevator_prices;
    }else if(elevator_quality== 'excelium'){
        numElevators= Math.ceil()
        console.log(numElevators)
       let all_floors= (number_floors+number_basements) 
       let total_occupants= (all_floors*max_occupants_floor)
       let elevator_amount= total_occupants/1000;
       let elevator_columns= all_floors/20;
       let elevators_per_column= elevator_amount/elevator_columns;
       let number_elevators= elevators_per_column*elevator_columns;
       let elevator_prices= number_elevators*15400;
       let elevator_install=elevator_prices*.16;
       let final_cost= elevator_install+elevator_prices;
    }
        // hybrid calculations
    }
   //if(!isNaN(numElevators))
    

   
    
})
