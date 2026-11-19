/** Verified remote URLs (Unsplash / Pexels) — electrical & B2B imagery. */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  heroGrid: pexels(1216589, 2000),
  transmissionLines: pexels(236989, 2000),
  substation: unsplash("1716784592039-4c81b8d1db15"),
  switchgear: unsplash("1581092160562-40aa08e78837"),
  distributionBoard: pexels(159201),
  cables: unsplash("1621905251189-08b45d6a269e"),
  industrial: pexels(1148820),
  construction: unsplash("1503387762-592deb58ef4e"),
  controlRoom: unsplash("1497366216548-37526070297c"),
  warehouse: unsplash("1586528116311-ad8dd3c8310d"),
  teamWork: pexels(2219024),
  powerPlant: pexels(236989),
} as const;