export const generateID = () => {
    return (
        Math.random().toString(36).substr(2) + 
        Date.now().toString(36)
    );
}

export const formatearFecha = (fecha) => {
    /* TODO:
        - Agregar hora
    */
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones);
}