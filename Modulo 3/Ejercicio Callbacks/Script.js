function prepararIngredientes(huevos, azucar, leche, harina) {
    setTimeout(prepararIngredientes(huevos, azucar, leche, harina){
        console.log(`Los ingredientes ${huevos} - ${azucar} - ${leche} - ${harina} se encuentran en la mesa`)
    }, 2000);
}

function precalentarElHorno(temperatura) {
    console.log(`El horno se encuentra a ${temperatura} grados centigrados`);
}

function mezclarIngredientes(huevos, azucar, leche, harina) {
    console.log(`Los ingredientes ${huevos} - ${azucar} - ${leche} - ${harina} se están mezclando`);
}

function meterAlHorno(IngredientesMezclados) {
    console.log(`Los ${IngredientesMezclados} se encuentran en el horno`);
}

function preparacion() {
    setTimeout(prepararIngredientes(huevos, azucar, leche, harina){
        console.log(`Los ingredientes ${huevos} - ${azucar} - ${leche} - ${harina} se encuentran en la mesa`)
    }, 2000);
    setTimeout(precalentarElHorno(temperatura){
        console.log(`El horno se encuentra a ${temperatura} grados centigrados`);
    }, 2000);
    setTimeout(mezclarIngredientes(huevos, azucar, leche, harina){
        console.log(`Los ingredientes ${huevos} - ${azucar} - ${leche} - ${harina} se están mezclando`);}, 2000);
    setTimeout(meterAlHorno(){
        console.log(`Los ${IngredientesMezclados} se encuentran en el horno`);;
    }, 2000);
}
