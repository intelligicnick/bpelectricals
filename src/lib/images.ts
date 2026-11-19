/** Decorative photography (royalty-free). Project cards keep verified portfolio files. */

const stock = (file: string) => `/images/stock/${file}`;

export const images = {
  /** Homepage & key heroes — transmission / grid infrastructure */
  transmissionLines: stock("transmission-lines.jpg"),
  heroGrid: stock("hero-grid.jpg"),
  substation: stock("substation.jpg"),
  switchgear: stock("switchgear.jpg"),
  distributionBoard: stock("distribution-board.jpg"),
  cables: stock("cables.jpg"),
  industrial: stock("industrial.jpg"),
  construction: stock("construction.jpg"),
  controlRoom: stock("control-room.jpg"),
  warehouse: stock("warehouse.jpg"),
  teamWork: stock("team-work.jpg"),
  powerPlant: stock("power-plant.jpg"),
} as const;