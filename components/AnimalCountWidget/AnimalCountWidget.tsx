import {
  animalRows,
  ANIMAL_COUNT_DATE,
  SICK_COUNT,
  SUBTOTAL,
  GRAND_TOTAL,
} from './animalCountData';
import './AnimalCountWidget.scss';

export default function AnimalCountWidget() {
  return (
    <div className="acw">
      {/* Header */}
      <div className="acw__header">
        <span className="acw__title">Today&apos;s Animal Count</span>
        <span className="acw__date">
          AS PER
          <br />
          {ANIMAL_COUNT_DATE}
        </span>
      </div>

      {/* Rows */}
      <div className="acw__rows">
        {animalRows.map((row) => (
          <div key={row.labelEn} className="acw__row">
            <span className="acw__label">
              {row.labelEn}
              <span className="acw__hi">({row.labelHi})</span>
            </span>
            <span className="acw__count">{row.count}</span>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="acw__subtotal">
        <span className="acw__subtotal-label">
          Subtotal <span className="acw__hi">(योग)</span>
        </span>
        <span className="acw__subtotal-num">{SUBTOTAL}</span>
      </div>

      {/* Sick / Injured */}
      <div className="acw__row acw__row--sick">
        <span className="acw__label">
          Sick / Injured <span className="acw__hi">(अस्वस्थ पशु)</span>
        </span>
        <span className="acw__count acw__count--alert">{SICK_COUNT}</span>
      </div>

      {/* Grand Total */}
      <div className="acw__grand">
        <span className="acw__grand-label">
          Grand Total <span className="acw__hi">(कुल योग)</span>
        </span>
        <span className="acw__grand-num">{GRAND_TOTAL}</span>
      </div>
    </div>
  );
}
