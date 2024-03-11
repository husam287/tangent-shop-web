import { Size } from "@/@types/size";
import { TextProps, TextWeight } from "./types";
import { CustomCSS } from "@/@types/customCss";
import styles from './styles.module.scss'
import COLORS from "@/constant/colors";
import classes from "@/utils/classes";

export default function Text({
  text = "",
  variant = "span",
  fontSize = "md",
  fontWeight = "normal",
  color = "primary",
  className
}: TextProps) {
  const TextNode = variant

  const fontSizeMap = new Map<Size, string>([
    ["sm", "0.75rem"],
    ["md", "1rem"],
    ["lg", "1.25rem"],
    ["xl", "1.5rem"],
    ["2x", "1.75rem"],
    ["3x", "2rem"],
  ])
  const defaultFontSize = fontSizeMap.get('sm') as string
  const selectedFontSize = fontSizeMap.get(fontSize) || defaultFontSize

  const fontWeightMap = new Map<TextWeight, number>([
    ["light", 400],
    ["normal", 500],
    ["bold", 700],
  ])
  const defaultfontWeight = fontWeightMap.get("normal") as number
  const selectedfontWeight = fontWeightMap.get(fontWeight) || defaultfontWeight

  const textStyle = {
    "--fontSize": selectedFontSize,
    "--fontWeight": selectedfontWeight,
    "--color": COLORS[color]
  } as CustomCSS

  return (
    <TextNode
      className={classes([styles.text, className])}
      style={textStyle}
    >
      {text}
    </TextNode>
  );
}
