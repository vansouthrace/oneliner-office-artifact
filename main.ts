import { mkdirSync, writeFileSync } from "node:fs";

// Full placard form: date, material, donor, then the punch — 14,000 lunches and one resignation letter.
const entry = "Communal Microwave, c. 2004, stained plastic and regret. Donated by Facilities; used to heat 14,000 lunches and one resignation letter.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
