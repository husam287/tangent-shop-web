import classes from "@/utils/classes";
import { CounterProps } from "./types";
import styles from './styles.module.scss'
import Button from "@/components/atoms/Button";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Text from "@/components/atoms/Text";

export default function Counter({ 
  initValue = 1,
  onCounterChange,
  minValue = 1,
  onReachedToMinValue,
 }: CounterProps) {
  const [counter, setcounter] = useState(initValue)
  
  const onIncreaseCounter = () => {
    onCounterChange?.(counter + 1);
    setcounter(counter + 1);
  };

  const onDecreaseCounter = () => {
    if (counter === minValue + 1 && onReachedToMinValue) {
      onReachedToMinValue();
      return;
    }
    onCounterChange?.(counter - 1);
    setcounter(counter - 1);
  };

  useEffect(() => {
    if (counter === initValue) return;

    setcounter(initValue);
  }, [initValue]);

  return (
    <div className={classes([styles.container])}>
      <Button prefix={<FaMinus />} onClick={onDecreaseCounter} shape="rounded" />
      <Text
        className={styles.counterText}
        text={`${counter}`}
        fontSize="lg"
        fontWeight="bold"
        variant="span"
        color="dark"
      />
      <Button prefix={<FaPlus />} onClick={onIncreaseCounter} shape="rounded" />
    </div>
  );
}
