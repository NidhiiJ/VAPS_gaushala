// ─────────────────────────────────────────────────────────────
// Animal Count Data — Suri Prem Jeevraksha Kendra Sansthan
// Update these numbers whenever the physical board changes.
// ─────────────────────────────────────────────────────────────

export interface AnimalRow {
  labelEn: string;
  labelHi: string;
  count: number;
}

export const ANIMAL_COUNT_DATE = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

export const animalRows: AnimalRow[] = [
  { labelEn: 'Cows',            labelHi: 'गाय',            count: 331 },
  { labelEn: 'Bulls',           labelHi: 'साण्ड',          count: 141 },
  { labelEn: 'Oxen',            labelHi: 'बैल',            count:  14 },
  { labelEn: 'Male Calves',     labelHi: 'बछड़ा नर',       count: 142 },
  { labelEn: 'Female Calves',   labelHi: 'बछड़ा मादा',     count:  91 },
  { labelEn: 'Disabled Cattle', labelHi: 'विकलांग गौवंश', count:  48 },
];

export const SUBTOTAL     = 767;
export const SICK_COUNT   =  37;
export const GRAND_TOTAL  = 804;
