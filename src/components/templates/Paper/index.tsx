import classes from "@/utils/classes";
import { PaperProps } from "./types";
import styles from './styles.module.scss'
import { Size } from "@/@types/size";
import { CustomCSS } from "@/@types/customCss";

export default function Paper({
  topSpacing,
  bottomSpacing,
  children,
  isCentered = false
}: PaperProps) {
  const spacingMap = new Map<Size, string>([
    ["sm", "1rem"],
    ["md", "1.5rem"],
    ["lg", "2rem"],
    ["xl", "2.5rem"],
    ["2x", "3rem"],
    ["3x", "3.5rem"],
  ])
  const selectedtopSpacing = topSpacing ? spacingMap.get(topSpacing) : undefined
  const selectedBottomSpacing = bottomSpacing ? spacingMap.get(bottomSpacing) : undefined

  return (
    <div
      className={
        classes([
          styles.container,
          isCentered ? styles.centered : null
        ])
      }
      style={{
        '--top': selectedtopSpacing,
        '--bottom': selectedBottomSpacing
      } as CustomCSS}>
      {children}
    </div>
  );
}
