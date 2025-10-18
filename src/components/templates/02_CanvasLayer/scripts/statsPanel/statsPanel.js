// statsPanel.js

import Stats from 'three/examples/jsm/libs/stats.module.js';

export function addStatsPanel() {
    const stats = new Stats();
    document.body.appendChild(stats.domElement);
    return stats;
}