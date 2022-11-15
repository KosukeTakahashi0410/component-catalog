import { useState } from "react";
import styles from "./index.module.css";

interface Props {
  contents: Array<{ id: number; label: string; text: string }>;
};

export const Accordion: React.FC<Props> = ({ contents }) => {
  const [accordionState, setAccordionState] = useState<number[]>([]);

  /**
   * 開閉状態を取得する
   * @param id アコーディオンのアイテムid
   * @returns 開閉状態
   */
  const isOpen = (id: number): boolean => {
    return accordionState.includes(id);
  };

  /**
   * アコーディオンを開閉させる
   * @param id アコーディオンのアイテムid
   */
  const toggleAccordion = (id: number): void => {
    // アコーディオンidが存在する場合
    if (accordionState.includes(id)) {
      const excludedArray = accordionState.filter((openId) => openId !== id);
      setAccordionState([...excludedArray]);
      return;
    }

    setAccordionState((prev) => [...prev, id]);
  };

  return (
    <ul className={styles.accordion}>
      {contents.map(({ id, label, text }) => (
        <li key={`${id}`} className={styles.wrapper}>
          <h2 className={styles.title}>
            <button
              type="button"
              aria-controls={`panel-${id}`}
              aria-expanded={isOpen(id)}
              onClick={() => toggleAccordion(id)}
              className={styles["toggle-button"]}
            >
              {label}
            </button>
          </h2>
          {isOpen(id) && (
            <div id={`panel-${id}`} className={styles.content}>
              <p>{text}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};