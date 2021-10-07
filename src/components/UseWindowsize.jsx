import {useState, useEffect} from 'react'

/**
 * Función que obtine el tamaño de la ventana
 * @returns windowSize
 */

const UseWindowsize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {

        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        }

        window.addEventListener("resize", handleResize);
       
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default UseWindowsize
