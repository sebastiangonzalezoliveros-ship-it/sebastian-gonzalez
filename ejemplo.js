//estado binario del guerreo {true o false = derrotado}
let gokuestavivo = true;

//el scroutes del juego nos muestra el interface en la consola 
console.log ("Goku puede seguir en la batalla :?" );
console.log (gokuestavivo); //imprime true 

// si el enemigo lo derrota , apagamos el interructor ;

console.log ("Goku sigue en pie:?" );
console.log (gokuestavivo); //imprime false

//el interruptor que decide el destino del guerrero 
let gokutieneenergia = false;

console.log ("---¡viene un ataque enemigo!!---");

//bifurcacion ¿que tomara el flujo del colegio ?
if (gokutieneenergia ){
//camino a :se ejecuta si es true 
console.log("!Goku esquivael ataque con exito¡"); 

} else {

    console.log("¡Goku no tiene energia y recibe el impacto !");
}

//---operadores logicos ---
let kigoku =100;
let tieneesferasdeldragon = true;
let tienesemillas = false;

//AND (&&): ¿puede transformarse? (ki alto y ademas tener las esferas)
let puedetransformarse = (kigoku > 90) && tieneesferasdeldragon ;
console.log(puedetransformarse); //imprime: true (se cumplen ambas)

//OR (||): ¿se valva de morir? (tiene semilla 0 tiene ))
