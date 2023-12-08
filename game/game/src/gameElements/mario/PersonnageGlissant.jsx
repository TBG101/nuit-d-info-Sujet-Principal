import React, { useState, useEffect } from 'react';
import Mario from './mario';

const PersonnageGlissant = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [estEnCoursDeGlissement, setEstEnCoursDeGlissement] = useState(false);

    const gererClicSouris = () => {
        setEstEnCoursDeGlissement(true);
    };

    const gererRelachementSouris = () => {
        setEstEnCoursDeGlissement(false);
    };

    const gererMouvementSouris = (e) => {
        if (estEnCoursDeGlissement) {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        }
    };

    useEffect(() => {
        const nettoyer = () => {
            // Réinitialise l'état lorsque le composant est démonté
            setEstEnCoursDeGlissement(false);
        };

        // Attache l'événement de nettoyage pour le démontage du composant
        window.addEventListener('mouseup', nettoyer);

        return () => {
            // Détache l'événement lors du démontage
            window.removeEventListener('mouseup', nettoyer);
        };
    }, []); // Utilise une dépendance vide pour ne l'exécuter qu'une fois

    return (
        <div
            onMouseDown={gererClicSouris}
            onMouseUp={gererRelachementSouris}
            onMouseMove={gererMouvementSouris}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                cursor: estEnCoursDeGlissement ? 'grabbing' : 'grab',
            }}
        >
            <Mario></Mario>
        </div>
    );
};

export default PersonnageGlissant;
