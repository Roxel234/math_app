import { useState, useRef } from 'react';

export function useDado() {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const intervalRef = useRef(null);

  const roll = (rollTime = 1000) => {
    if (isRolling) return; // Evita clicks duplicados
    setIsRolling(true);

    // Inicia el parpadeo del dado
    // @ts-ignore
    intervalRef.current = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
    }, 100);

    // Detiene el dado en el tiempo asignado
    setTimeout(() => {
        // @ts-ignore
        clearInterval(intervalRef.current);
        setIsRolling(false);

        const finalValue = Math.floor(Math.random() * 6) + 1;
            setDiceValue(finalValue);
        }, rollTime);
  };

  // El hook expone el valor actual, si está girando y la función para lanzarlo
  return { value: diceValue, rolling: isRolling, roll };
}
