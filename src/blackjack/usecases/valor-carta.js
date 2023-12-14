/**
 * Obtener el valor de la carta
 * @param {String} carta Valor de la carta sacado del deck
 * @returns {Number} Retorna el valor del deck
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}