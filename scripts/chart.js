document.addEventListener('DOMContentLoaded', () => {
    const firstPaths = [
        { className: 'path-1', to: 'M0 86L147.5 -118.5' }, 
        { className: 'path-2', to: 'M0 86L148 -51' },
        { className: 'path-3', to: 'M0 86L148 76' },
        { className: 'path-4', to: 'M0 86L148 51' },
        { className: 'path-5', to: 'M0 86L148 80' },
        { className: 'path-6', to: 'M0 86L148 68' },
        { className: 'path-7', to: 'M0 86L148.5 19' }
    ];

    const secondPaths = [
        { className: 'path-1', to: 'M146 -120V84.5H0.0429688L146 -120Z', fill: '#A8FFCA' },
        { className: 'path-2', to: 'M146 -51.5V84.5H0.0429688L146 -51.5Z', fill: '#FFBDFE' },
        { className: 'path-3', to: 'M146 16.5V84.5H0.0429688L146 16.5Z', fill: '#A0B1FF' },
        { className: 'path-4', to: 'M146 48.5V84.5H0.0429688L146 48.5Z', fill: '#FFE0E6' },
        { className: 'path-5', to: 'M146 65.5V84.5H0.0429688L146 65.5Z', fill: '#32386A' },
        { className: 'path-6', to: 'M146 73.5V84.5H0.0429688L146 73.5Z', fill: '#D4E9FE' },
        { className: 'path-7', to: 'M146 78V84.5H0.0429688L146 78Z', fill: '#5874C7' }
    ];
    
    const initialPaths = [
        { className: 'path-1', to: 'M1.88672 85.0063L369.887 43.0063', stroke: '#A8FFCA' },
        { className: 'path-2', to: "M1.43921 85.1721L125.439 1.17212", stroke: '#FFBDFE' },
        { className: 'path-3', to: 'M1.68384 85.0513L52.6838 68.0513', stroke: '#D4E9FE' },
        { className: 'path-4', to: 'M1.073 85.6248L35.073 1.62475', stroke: '#FFE0E6' },
        { className: 'path-5', to: 'M1.03857 85.7253L13.0386 43.7253', stroke: '#5874C7' },
        { className: 'path-6', to: 'M1.22266 85.3708L35.2227 43.3708', stroke: '#32386A' },
        { className: 'path-7', to: 'M1.91504 85.0037L247.915 64.0037', stroke: '#A0B1FF' },
    ];


    function updateSVG(paths, isFill = false, resetStroke = false) {
        paths.forEach(path => {
            const element = document.querySelector(`.${path.className}`);
            element.setAttribute('d', path.to);
            if (isFill) {
                element.setAttribute('fill', path.fill);
                element.removeAttribute('stroke');
            }
            if (resetStroke) {
                element.setAttribute('stroke', path.stroke);
                element.removeAttribute('fill');
            }
        });
    }

    function animateSVG() {
        updateSVG(firstPaths);

        setTimeout(() => {
            updateSVG(secondPaths, true);

            setTimeout(() => {
                updateSVG(initialPaths, false, true);
            }, 3000);
        }, 4000);
    }

    animateSVG();
    setInterval(animateSVG, 8000); // 3초 애니메이션 + 3초 대기 + 3초 애니메이션 + 3초 대기 = 12초 주기
});